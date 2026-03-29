"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        {/* Left column - Photo and social links (sticky on desktop) */}
        <div 
          className={`flex flex-col items-center gap-4 lg:sticky lg:top-24 lg:h-fit lg:items-start transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative size-[180px] overflow-hidden rounded-full">
            <Image
              src="https://raw.githubusercontent.com/peterampazzo/blog/master/content/pages/about/profile.jpeg"
              alt="Pietro Rampazzo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Pietro Rampazzo
            </h1>
            <p className="mt-1 text-muted-foreground">
              Software & Data Engineer
            </p>
            <p className="mt-1 flex items-center justify-center gap-1 text-sm text-muted-foreground lg:justify-start">
              <MapPin className="h-3.5 w-3.5" />
              <span>Copenhagen, Denmark</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/peterampazzo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/pietrorampazzo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/peterampazzo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@peterampazzo.com"
              className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right column - Bio content */}
        <div 
          className={`flex-1 space-y-4 text-[15px] leading-relaxed text-foreground/90 lg:max-w-xl transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p>
            <span className="font-medium text-foreground">Ciao!</span> I&apos;m Pietro, an Italian software engineer currently based in 
            Copenhagen, Denmark. I work at the intersection of{" "}
            <span className="font-medium text-primary">software engineering</span> and{" "}
            <span className="font-medium text-primary">data engineering</span>, 
            building systems that transform raw data into actionable insights.
          </p>
          <p>
            My journey in tech started with a curiosity for how things work 
            under the hood. Over the years, I&apos;ve had the opportunity to work 
            on diverse projects ranging from data pipelines and analytics 
            platforms to full-stack web applications.
          </p>
          <p>
            I believe in writing clean, maintainable code and sharing knowledge 
            with the community. This blog is where I document my learnings, 
            experiments, and thoughts on software development.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring the Nordic lifestyle,
            biking around Copenhagen, or enjoying a good cup of coffee while 
            reading about new technologies.
          </p>
        </div>
      </div>
    </section>
  )
}
