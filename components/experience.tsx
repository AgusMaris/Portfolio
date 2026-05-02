"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ExperienceDict } from "@/lib/dict/types"

interface Props {
  dict: ExperienceDict
}

export function Experience({ dict }: Props) {
  const [activeTab, setActiveTab] = useState(0)
  const { entries } = dict

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="anim-scroll-fade">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">{dict.sectionNumber}</span>
            {dict.title}
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 anim-scroll-fade-delay-1">
          {/* Mobile Navigation with Arrows */}
          <div className="flex md:hidden items-center justify-between gap-2 border-b border-border pb-4">
            <button
              onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
              disabled={activeTab === 0}
              className={cn(
                "p-2 rounded-lg transition-all",
                activeTab === 0
                  ? "text-muted-foreground/30 cursor-not-allowed"
                  : "text-primary hover:bg-primary/10"
              )}
              aria-label={dict.ariaLabelPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex-1 text-center">
              <span className="text-sm font-mono text-primary">
                {entries[activeTab].company}
              </span>
              <div className="flex justify-center gap-1.5 mt-2">
                {entries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      activeTab === index
                        ? "bg-primary w-4"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`${dict.ariaLabelGoto} ${entries[index].company}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveTab((prev) => Math.min(entries.length - 1, prev + 1))}
              disabled={activeTab === entries.length - 1}
              className={cn(
                "p-2 rounded-lg transition-all",
                activeTab === entries.length - 1
                  ? "text-muted-foreground/30 cursor-not-allowed"
                  : "text-primary hover:bg-primary/10"
              )}
              aria-label={dict.ariaLabelNext}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex md:flex-col md:border-l border-border">
            {entries.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-3 text-sm font-mono whitespace-nowrap text-left transition-all",
                  "hover:bg-primary/10 hover:text-primary",
                  "md:border-l-2 md:-ml-px",
                  activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[300px]">
            {entries.map((exp, index) => (
              <div
                key={exp.company}
                className={cn(
                  "space-y-4 transition-opacity duration-300",
                  activeTab !== index && "hidden"
                )}
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.role}{" "}
                  <span className="text-primary">@ {exp.company}</span>
                </h3>
                <p className="text-sm font-mono text-muted-foreground">
                  {exp.period}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.summary}
                </p>
                <ul className="space-y-3">
                  {exp.bullets.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary mt-1.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
