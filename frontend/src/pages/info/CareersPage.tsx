import { motion } from "motion/react"
import { Sparkles, Briefcase, Mail } from "lucide-react"

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior React Developer",
      department: "Frontend Engineering",
      location: "Morbi, Gujarat (Hybrid)",
      type: "Full-Time",
    },
    {
      title: "Node.js Backend Developer",
      department: "Backend Engineering",
      location: "Morbi, Gujarat (On-Site)",
      type: "Full-Time",
    },
    {
      title: "AI Integration Specialist",
      department: "Research & Development",
      location: "Remote / Morbi",
      type: "Contract",
    },
  ]

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
            Join Our Team
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-50">
            Careers at Urban-Basket
          </h1>
          <p className="text-sm text-surface-400 max-w-2xl leading-relaxed">
            Build the next generation of e-commerce. We are always looking for passionate engineers, creative designers, and marketing experts to join our team in Morbi, Gujarat.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-display font-bold text-lg text-surface-100 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary-400" />
          Open Positions
        </h2>

        <div className="grid gap-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="rounded-2xl glass p-6 border border-surface-800/40 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-primary-500/30 transition-colors"
            >
              <div className="space-y-1">
                <h3 className="font-semibold text-sm text-surface-100">{job.title}</h3>
                <p className="text-xs text-surface-400">
                  {job.department} &bull; {job.location}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-[10px] font-bold uppercase">
                  {job.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl glass p-8 border border-surface-800/40 text-center space-y-4">
        <h3 className="font-semibold text-sm text-surface-100">Don't see a matching position?</h3>
        <p className="text-xs text-surface-400 max-w-md mx-auto leading-relaxed">
          We are always excited to meet talented individuals. Send your resume and a description of what you'd like to work on to our team.
        </p>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-primary text-white text-xs font-bold shadow-lg shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all">
          <Mail className="w-4 h-4" />
          urbanbasket2026@gmail.com
        </div>
      </div>
    </motion.div>
  )
}
