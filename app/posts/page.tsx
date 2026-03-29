import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllPosts } from "@/lib/posts"

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function PostsPage() {
  const posts = getAllPosts()

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back home
      </Link>

      <div className="mt-8">
        <h1 className="text-2xl font-semibold tracking-tight">Writing</h1>
        <p className="mt-2 text-muted-foreground">
          Thoughts on software, data, and everything in between.
        </p>
      </div>

      <div className="mt-10 space-y-1">
        {posts.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">No posts yet.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add markdown files to <code className="bg-muted px-1.5 py-0.5 rounded text-xs">content/posts/</code>
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group -mx-2 flex items-baseline justify-between gap-4 rounded-md px-2 py-3 transition-all duration-200 hover:bg-primary/5 hover:pl-3"
            >
              <div className="min-w-0 flex-1">
                <h2 className="truncate font-medium text-foreground group-hover:text-foreground">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
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
    </main>
  )
}
