import { supabaseAdmin } from "../config/supabase.js"
import { getAllOrderPaymentsFromFile } from "../utils/orderPaymentsStore.js"
import { enrichOrderPaymentInfoAsync } from "./orderController.js"

export const getSellerStats = async (req, res, next) => {
  try {
    const sellerId = req.user.id

    // Fetch seller's products
    const { data: products, error: prodError } = await supabaseAdmin
      .from("products")
      .select("*")
      .eq("seller_id", sellerId)

    if (prodError) {
      return res.status(400).json({ error: prodError.message })
    }

    const totalProducts = products ? products.length : 0
    const lowStock = products ? products.filter((p) => p.stock < 5).length : 0

    if (!products || products.length === 0) {
      return res.status(200).json({
        totalRevenue: 0,
        totalOrders: 0,
        totalProducts: 0,
        lowStock: 0,
        paymentStats: {
          totalPaidOrders: 0,
          totalPendingPayments: 0,
          revenueFromPaidOrders: 0,
          codOrdersCount: 0,
          upiOrdersCount: 0,
          cardOrdersCount: 0,
          walletOrdersCount: 0,
        }
      })
    }

    const productIds = products.map((p) => p.id)

    // Fetch order items containing these product IDs
    const { data: orderItems, error: itemsError } = await supabaseAdmin
      .from("order_items")
      .select("*, orders(*)")
      .in("product_id", productIds)

    if (itemsError) {
      return res.status(400).json({ error: itemsError.message })
    }

    // Filter out items belonging to cancelled orders from revenue
    const nonCancelledItems = orderItems ? orderItems.filter((item) => item.orders && item.orders.status !== "cancelled") : []

    // Deduplicate orders
    const ordersMap = new Map()
    for (const item of orderItems || []) {
      if (item.orders && !ordersMap.has(item.orders.id)) {
        ordersMap.set(item.orders.id, item.orders)
      }
    }

    const allPayments = await getAllOrderPaymentsFromFile().catch(() => ({}))
    const enrichedOrders = await Promise.all(
      Array.from(ordersMap.values()).map((o) => enrichOrderPaymentInfoAsync(o, allPayments))
    )

    let totalPaidOrders = 0
    let totalPendingPayments = 0
    let revenueFromPaidOrders = 0
    let codOrdersCount = 0
    let upiOrdersCount = 0
    let cardOrdersCount = 0
    let walletOrdersCount = 0

    for (const order of enrichedOrders) {
      if (order.status === "cancelled") continue

      const method = (order.payment_method || "").toUpperCase()
      const status = (order.payment_status || "").toUpperCase()

      if (status === "PAID") {
        totalPaidOrders++
        revenueFromPaidOrders += parseFloat(order.total || 0)
      } else if (status === "PENDING") {
        totalPendingPayments++
      }

      if (method === "COD") {
        codOrdersCount++
      } else if (method === "UPI") {
        upiOrdersCount++
      } else if (method === "CARD") {
        cardOrdersCount++
      } else if (method === "WALLET") {
        walletOrdersCount++
      }
    }

    const totalRevenue = nonCancelledItems.reduce((sum, item) => sum + parseFloat(item.price) * parseInt(item.quantity), 0)
    const uniqueOrderIds = new Set(orderItems ? orderItems.map((item) => item.order_id) : [])
    const totalOrders = uniqueOrderIds.size

    return res.status(200).json({
      totalRevenue: parseFloat(totalRevenue.toFixed(2)),
      totalOrders,
      totalProducts,
      lowStock,
      paymentStats: {
        totalPaidOrders,
        totalPendingPayments,
        revenueFromPaidOrders: parseFloat(revenueFromPaidOrders.toFixed(2)),
        codOrdersCount,
        upiOrdersCount,
        cardOrdersCount,
        walletOrdersCount,
      }
    })
  } catch (err) {
    next(err)
  }
}
