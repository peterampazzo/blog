"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
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
          className={`flex flex-col items-center gap-4 lg:sticky lg:top-24 lg:h-fit lg:items-start transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <div className="relative size-[180px] overflow-hidden rounded-full">
            <Image
              src="./DSC09226-crop.jpg"
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
              Software Engineer
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
              href="https://linkedin.com/in/peterampazzo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:pietro@rampazzo.eu"
              className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right column - Bio content */}
        <div
          className={`flex-1 space-y-4 text-[15px] leading-relaxed text-foreground/90 lg:max-w-xl transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <p className="text-2xl font-bold text-primary text-center">Ciao! 👋 I&apos;m Pietro.</p>
          <p>
            I am a Software Engineer based in Copenhagen. My work focuses on bridging the gap between   <span className="font-medium text-primary">software engineering</span> and{" "}
            <span className="font-medium text-primary">data engineering</span>.
           </p>
           <p> 
            Currently on a data modernization journey where I build resilient, cloud-first integrations that enable users to consume and leverage data effectively.
          </p>
          <p>
            Moving to Denmark has changed my habits. Since the country is flat,
            I've traded mountain hiking in the Dolomites for road cycling and running.
            When the weather isn't ideal, I enjoy bouldering or a game of padel.
          </p>
          <p>
            Outside of work, I enjoy photography (occasionally publishing on <a href="https://unsplash.com/@peterampazzo" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Unsplash</a>) as well as <span className="font-medium text-primary">turning hygge into ravioli</span> by making homemade pasta for a good cause with <a href="https://www.instagram.com/marediravioli/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mare di Ravioli</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
