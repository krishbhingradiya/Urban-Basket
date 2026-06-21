import { motion } from "motion/react"
import { Sparkles, Newspaper, Calendar } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "How We Integrated Gemini 2.5 Flash for Visual Catalog Matching",
      excerpt: "An in-depth engineering walkthrough on visual similarity search, handling multimodal prompts, and implementing high-speed image processing fallback systems.",
      date: "June 15, 2026",
      readTime: "6 min read",
    },
    {
      title: "Building a Resilient Singleton Speech Recognition Interface",
      excerpt: "Standard web speech wrappers are notorious for restarting crashes. Here is how we implemented a singleton listener guardrail pattern for continuous voice navigation.",
      date: "May 28, 2026",
      readTime: "4 min read",
    },
    {
      title: "Urban-Basket Launches Operations from Morbi, Gujarat",
      excerpt: "Expanding local operations to offer same-day gadget shipments, regional custom courier coordination, and support for local merchants.",
      date: "May 10, 2026",
      readTime: "3 min read",
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
            Press & Insights
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-surface-50">
            Press & Blog
          </h1>
          <p className="text-sm text-surface-400 max-w-2xl leading-relaxed">
            Stay up to date with product releases, engineering deep-dives, and announcements from the Urban-Basket team.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-display font-bold text-lg text-surface-100 flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-primary-400" />
          Recent Articles
        </h2>

        <div className="grid gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="rounded-2xl glass p-6 sm:p-8 border border-surface-800/40 space-y-3 hover:border-primary-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 text-xs text-surface-450">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span>&bull;</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-surface-100 hover:text-primary-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-surface-400 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
