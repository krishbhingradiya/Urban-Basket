import { motion } from "motion/react"
import { Sparkles, MapPin, Mail, Phone, ShoppingBag } from "lucide-react"

export default function AboutPage() {
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
            Our Story
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-50">
            About Urban-Basket
          </h1>
          <p className="text-sm text-surface-400 max-w-2xl leading-relaxed">
            Welcome to the future of online shopping. Urban-Basket is a modern, high-tech multi-vendor e-commerce platform designed to bring you the premium items, tech gadgets, fashion apparel, and lifestyle products with a seamless, immersive interface.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl glass p-6 border border-surface-800/40 space-y-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white glow-sm">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-sm text-surface-100">Our Location</h3>
          <p className="text-xs text-surface-400 leading-relaxed">
            Morbi, Gujarat, India. Built and operated locally with global standards.
          </p>
        </div>

        <div className="rounded-2xl glass p-6 border border-surface-800/40 space-y-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white glow-sm">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-sm text-surface-100">Email Address</h3>
          <p className="text-xs text-surface-400 leading-relaxed">
            urbanbasket2026@gmail.com
          </p>
        </div>

        <div className="rounded-2xl glass p-6 border border-surface-800/40 space-y-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white glow-sm">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-sm text-surface-100">Contact Number</h3>
          <p className="text-xs text-surface-400 leading-relaxed">
            +91 7861079164
          </p>
        </div>
      </div>

      <div className="rounded-3xl glass p-8 sm:p-10 border border-surface-800/40 space-y-6">
        <h2 className="font-display font-bold text-xl text-surface-100 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-primary-400" />
          Why Choose Urban-Basket?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <h4 className="font-semibold text-surface-150">🎨 Premium Aesthetics</h4>
            <p className="text-xs text-surface-400 leading-relaxed">
              We believe shopping should be beautiful. Our state-of-the-art UI elements, micro-animations, and clean dark/light themes deliver a stunning user experience.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-surface-150">🤖 AI-Powered Searches</h4>
            <p className="text-xs text-surface-400 leading-relaxed">
              Integrated with Google's multimodal Gemini AI, our Dual-Engine Visual Search lets you search items with just a picture, or use voice command controls.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-surface-150">📦 Fast, Tracked Deliveries</h4>
            <p className="text-xs text-surface-400 leading-relaxed">
              Real-time map and courier tracking built in, keeping you fully notified of your delivery timeline up to completion.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-surface-150">🎁 Cinematic Rewards</h4>
            <p className="text-xs text-surface-400 leading-relaxed">
              Try our mystery boxes filled with top-tier gadgets and fashion items, revealed through a custom cinema style animation.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
