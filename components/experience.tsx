import type { ExperienceDict } from "@/lib/dict/types"
import { ExperienceTabs } from "./experience-tabs"

interface Props {
  dict: ExperienceDict
}

export function Experience({ dict }: Props) {
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

        <ExperienceTabs dict={dict} />
      </div>
    </section>
  )
}
