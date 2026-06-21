import { motion } from "motion/react"
import { Sparkles, Users, Award, Mail } from "lucide-react"

export default function PartnersPage() {
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
            Grow With Us
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-50">
            Partnerships
          </h1>
          <p className="text-sm text-surface-400 max-w-2xl leading-relaxed">
            Collaborate with Morbi's premier e-commerce ecosystem. We offer vendor integration, retail collaboration, and smart merchant dashboard accounts to boost your reach.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl glass p-6 border border-surface-800/40 space-y-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white glow-sm">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-sm text-surface-100">For Local Brands & Sellers</h3>
          <p className="text-xs text-surface-400 leading-relaxed">
            Register as a seller and list your products on Urban-Basket. Get access to our high-speed visual search engine, voice shopping capabilities, and secure wallets.
          </p>
        </div>

        <div className="rounded-2xl glass p-6 border border-surface-800/40 space-y-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white glow-sm">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-sm text-surface-100">For Logistics & Affiliates</h3>
          <p className="text-xs text-surface-400 leading-relaxed">
            Connect your shipping services with our live routing maps. Coordinate delivery updates and offer seamless returns through our delivered orders automation.
          </p>
        </div>
      </div>

      <div className="rounded-3xl glass p-8 sm:p-10 border border-surface-800/40 text-center space-y-4">
        <h3 className="font-semibold text-sm text-surface-100">Ready to Partner with Urban-Basket?</h3>
        <p className="text-xs text-surface-400 max-w-md mx-auto leading-relaxed">
          Contact our operations team in Morbi to discuss custom branding integrations, APIs, and wholesale catalog listings.
        </p>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-primary text-white text-xs font-bold shadow-lg shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all">
          <Mail className="w-4 h-4" />
          urbanbasket2026@gmail.com
        </div>
      </div>
    </motion.div>
  )
}
