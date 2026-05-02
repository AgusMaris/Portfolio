import type { TechStackDict } from "@/lib/dict/types"

interface Props {
  dict: TechStackDict
}

export function TechStack({ dict }: Props) {
  return (
    <section id="stack" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="anim-scroll-fade">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">{dict.sectionNumber}</span>
            {dict.title}
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {dict.categories.map((category) => (
            <div
              key={category.category}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors anim-scroll-fade-delay-1"
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={`w-8 h-8 object-contain transition-transform group-hover:scale-110 ${tech.invert ? "invert" : ""}`}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium text-center group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 anim-scroll-fade-delay-2">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 text-center">
            {dict.secondaryLabel}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {dict.secondaryStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono text-muted-foreground bg-card border border-border rounded-full hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
