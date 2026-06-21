import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, "..", "data")
const PAYMENTS_FILE = path.join(DATA_DIR, "order-payments.json")

async function readStore() {
  try {
    const raw = await fs.readFile(PAYMENTS_FILE, "utf8")
    return JSON.parse(raw) || {}
  } catch {
    return {}
  }
}

async function writeStore(store) {
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.writeFile(PAYMENTS_FILE, JSON.stringify(store, null, 2), "utf8")
}

export async function saveOrderPaymentInFile(orderId, paymentInfo) {
  const store = await readStore()
  store[String(orderId)] = {
    payment_method: paymentInfo.payment_method,
    payment_status: paymentInfo.payment_status,
    transaction_id: paymentInfo.transaction_id || null,
    paid_at: paymentInfo.paid_at || null,
  }
  await writeStore(store)
}

export async function getOrderPaymentFromFile(orderId) {
  const store = await readStore()
  return store[String(orderId)] || null
}

export async function getAllOrderPaymentsFromFile() {
  return await readStore()
}
