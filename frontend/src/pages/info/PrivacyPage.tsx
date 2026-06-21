import { motion } from "motion/react"
import { Sparkles, Shield, Mail } from "lucide-react"

export default function PrivacyPage() {
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
            Security & Trust
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-50">
            Privacy Policy
          </h1>
          <p className="text-sm text-surface-400 max-w-2xl leading-relaxed">
            Your data protection is our highest priority. Read how we collect, store, and manage your account information.
          </p>
        </div>
      </div>

      <div className="rounded-3xl glass p-8 sm:p-10 border border-surface-800/40 space-y-6 text-sm text-surface-400 leading-relaxed">
        <h2 className="font-display font-bold text-base text-surface-100 flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary-400" />
          Data Handling Principles
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-surface-150">1. Information Collection</h3>
            <p className="text-xs mt-1 text-surface-400">
              We collect account registration data (email, name), transaction histories, search records (including image files uploaded for visual search), and wallet details.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-surface-150">2. Usage & AI Integrations</h3>
            <p className="text-xs mt-1 text-surface-400">
              Your voice transcriptions and search query history are used exclusively to process your requests. The visual search engine uses Gemini API in a secure data tunnel; no visual catalog matches or user photos are shared or stored for model training purposes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-surface-150">3. Contacting Us</h3>
            <p className="text-xs mt-1 text-surface-400">
              If you have any questions, you can contact our privacy compliance team operating from Morbi, Gujarat at +91 7861079164 or by email at <a href="mailto:urbanbasket2026@gmail.com" className="text-primary-400 hover:underline">urbanbasket2026@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
