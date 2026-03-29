import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/posts"

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function PostsSection() {
  const posts = getAllPosts().slice(0, 5) // Show latest 5 posts on homepage

  return (
    <section id="writing" className="py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Writing</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Thoughts on software, data, and everything in between
          </p>
        </div>
      </div>
      <div className="mt-8 space-y-1">
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4">
            No posts yet. Add markdown files to <code className="bg-muted px-1.5 py-0.5 rounded text-xs">content/posts/</code>
          </p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group flex items-baseline justify-between gap-4 rounded-md px-2 py-3 -mx-2 transition-all duration-200 hover:bg-primary/5 hover:pl-3"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground truncate group-hover:text-foreground">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
                    {post.excerpt}
                  </p>
                )}
              </div>
              <time className="flex-shrink-0 text-sm tabular-nums text-muted-foreground">
                {formatDate(post.date)}
              </time>
            </Link>
          ))
        )}
      </div>
      {posts.length > 0 && (
        <Link
          href="/posts"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View all posts
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </section>
  )
}
