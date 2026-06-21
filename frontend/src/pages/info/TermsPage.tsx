import { motion } from "motion/react"
import { Sparkles, FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-12"
    >
      <div className="relative rounded-3xl glass border border-primary-500/20 overflow-hidden p-8 sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/20 via-transparent to-accent-950/20 pointer-events-none" />
        <div className="relative space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary-400">
            <Sparkles className="w-3.5 h-3.5" />
            Terms of Service
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-50">
            Terms of Service
          </h1>
          <p className="text-sm text-surface-400 max-w-2xl leading-relaxed">
            Please read these terms carefully before accessing or using the e-commerce services provided by Urban-Basket.
          </p>
        </div>
      </div>

      <div className="rounded-3xl glass p-8 sm:p-10 border border-surface-800/40 space-y-6 text-sm text-surface-400 leading-relaxed">
        <h2 className="font-display font-bold text-base text-surface-100 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary-400" />
          Conditions of Use
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-surface-150">1. User Accounts & Wallet Funds</h3>
            <p className="text-xs mt-1 text-surface-400">
              Users are responsible for keeping credentials safe. Wallet funds added to accounts are fully secure and can be used for purchase transactions or refunded according to payment provider schedules.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-surface-150">2. Sales, Returns & Catalog Items</h3>
            <p className="text-xs mt-1 text-surface-400">
              Purchases are subject to product stock. Delivered items can be returned within 30 days under the easy return policy. Mystery boxes represent random surprise items; value is always guaranteed to exceed or match the purchase price.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-surface-150">3. Governing Jurisdiction</h3>
            <p className="text-xs mt-1 text-surface-400">
              These terms are governed by the laws of India, under the jurisdiction of the courts of Morbi, Gujarat.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
