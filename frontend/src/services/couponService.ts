import { apiGet, apiPost, apiDelete, apiPatch, API_URL } from "./api"

export interface Coupon {
  id: string
  coupon_code: string
  discount_type: "percentage" | "fixed"
  discount_value: number
  minimum_order_amount: number
  maximum_discount: number | null
  expiry_date: string | null
  usage_limit: number
  used_count: number
  is_active: boolean
  created_by: string
  created_at: string
  first_order_only: boolean
  user_specific_expiry: number
  random_discount_enabled: boolean
  random_discount_min: number
  random_discount_max: number
}

export interface CouponValidationResult {
  valid: boolean
  discount: number
  discountPercentage: number
  message: string
  coupon?: Coupon
}

export interface CouponStats {
  totalActive: number
  totalUsage: number
  totalDiscountGiven: number
  expiredCount: number
}

export function validateCoupon(coupon_code: string, cart_total: number) {
  return apiPost<CouponValidationResult>("/coupons/validate", { coupon_code, cart_total })
}

export function applyCoupon(coupon_code: string, cart_total: number) {
  return apiPost<CouponValidationResult>("/coupons/apply", { coupon_code, cart_total })
}

export function getSellerCoupons() {
  return apiGet<Coupon[]>("/coupons")
}

export function getCouponStats() {
  return apiGet<CouponStats>("/coupons/stats")
}

export function createCoupon(data: Partial<Coupon>) {
  return apiPost<Coupon>("/coupons/create", data)
}

export function updateCoupon(id: string, data: Partial<Coupon>) {
  return apiPatch<Coupon>(`/coupons/${id}`, data)
}

export function deleteCoupon(id: string) {
  return apiDelete<{ message: string }>(`/coupons/${id}`)
}
