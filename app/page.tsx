import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { PostsSection } from "@/components/posts-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/30 to-blue-400/20 blur-3xl" />
        <div className="animate-float-delayed absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-gradient-to-bl from-primary/20 to-cyan-400/20 blur-3xl" />
        <div className="animate-pulse-soft absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gradient-to-t from-primary/15 to-indigo-400/10 blur-3xl" />
      </div>

      {/* Subtle dot pattern overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 dot-pattern" />

      <Header />
      <main className="relative mx-auto max-w-2xl px-6">
        <AboutSection />
        <hr className="border-border/40" />
        <ProjectsSection />
        <hr className="border-border/40" />
        <PostsSection />
      </main>
      <footer className="relative mx-auto max-w-2xl px-6">
        <Footer />
      </footer>
    </div>
  )
}
