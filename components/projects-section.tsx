import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Living in Denmark",
    description: 
      "A curated open-source repository of essential resources for expats. Features practical guides on housing, documentation, and local integration.",
    tags: ["Community"],
    link: "https://github.com/peterampazzo/living-in-denmark",
  },
  {
    title: "Movi by Mobike",
    description:
      "A data science study analyzing urban mobility patterns in Padova. Leverages descriptive and cluster analysis to optimize bike-sharing fleet distribution.",
    tags: ["Data Science", "Mobility", "Python"],
    link: "https://osf.io/preprints/socarxiv/bd8p4",
  },
  {
    title: "OpenStreetMap POIs",
    description:
      "A Python package designed to automate the retrieval of Points of Interest. Utilizes OverPy and GeoPandas to query the OSM API within specific polygons.",
    tags: ["Geospatial", "Python"],
    link: "https://github.com/peterampazzo/osm-poi",
  },
  {
    title: "200 Metri da Casa",
    description:
      "A viral interactive map helping citizens visualize lockdown radius restrictions. Built with Leaflet.js and featured in major national news outlets.",
    tags: ["Community", "Social Impact"],
    link: "https://github.com/peterampazzo/200-metri-da-casa",
  },
  {
    title: "VirtualDojo",
    description:
      "A custom dashboard for CoderDojo Padova to facilitate online learning. Integrates the Jitsi Meet API to manage multiple virtual classrooms in one place.",
    tags: ["React", "Node.js"],
    link: "https://github.com/virtualdojo/virtualdojo-rooms",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-lg font-semibold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Projects</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Some things I&apos;ve built and contributed to
      </p>
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block rounded-lg border border-border/50 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
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
