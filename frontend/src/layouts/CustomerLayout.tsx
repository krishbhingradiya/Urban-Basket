import { Outlet } from "react-router"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/cart/CartDrawer"
import { FloatingCustomerAssistants } from "@/components/layout/FloatingCustomerAssistants"
import { RealtimeOrdersSync } from "@/components/orders/RealtimeOrdersSync"
import { DeliveryReviewPrompt } from "@/components/reviews/DeliveryReviewPrompt"
export default function CustomerLayout() {
  return (
    <div className="gradient-bg min-h-screen flex flex-col relative overflow-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-1 pt-24 pb-16">
        <Outlet />
      </main>

      {/* Slide-out Cart Panel */}
      <CartDrawer />

      <RealtimeOrdersSync />

      {/* Order tracker + AI chat (bottom-right) */}
      <FloatingCustomerAssistants />

      {/* Full-screen review prompt for delivered orders */}
      <DeliveryReviewPrompt />

      {/* Sticky Footer */}
      <Footer />

    </div>
  )
}

