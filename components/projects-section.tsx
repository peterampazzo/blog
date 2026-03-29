import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Data Pipeline Toolkit",
    description:
      "A collection of tools for building and managing data pipelines with Python and Apache Airflow.",
    tags: ["Python", "Airflow", "Data Engineering"],
    link: "https://github.com/peterampazzo",
  },
  {
    title: "Personal Blog",
    description:
      "My personal blog built with Gatsby and Markdown. Features articles about software engineering and data.",
    tags: ["Gatsby", "React", "Markdown"],
    link: "https://github.com/peterampazzo/blog",
  },
  {
    title: "Open Source Contributions",
    description:
      "Various contributions to open source projects in the data and web development ecosystem.",
    tags: ["Open Source", "Community"],
    link: "https://github.com/peterampazzo",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-lg font-semibold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Projects</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Some things I&apos;ve built and contributed to
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-border/50 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-medium group-hover:text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
