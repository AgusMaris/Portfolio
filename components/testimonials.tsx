import { useState } from "react"
import { Quote, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

import type { TestimonialsDict } from "@/lib/dict/types"

export function Testimonials({ dict }: { dict: TestimonialsDict }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="anim-scroll-fade">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">{dict.sectionNumber}</span>
            {dict.title}
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>
        </div>

        <div className="space-y-6">
          {dict.entries.map((testimonial, index) => {
            const isExpanded = expandedIndex === index

            return (
              <div
                key={testimonial.name}
                className="relative bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all anim-scroll-fade-delay-1"
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary/70 mt-1">
                      {testimonial.relationship}
                    </p>
                  </div>
                </div>

                <div className="text-muted-foreground leading-relaxed">
                  {isExpanded ? (
                    <div className="whitespace-pre-line animate-in fade-in duration-300">
                      {`"${testimonial.fullContent}"`}
                    </div>
                  ) : (
                    <p className="italic">{`"${testimonial.excerpt}"`}</p>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpand(index)}
                  className="mt-4 text-primary hover:text-primary/80 hover:bg-primary/10 gap-1"
                >
                  {isExpanded ? (
                    <>
                      {dict.readLess}
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      {dict.readMore}
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
