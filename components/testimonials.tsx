"use client"

import { useState } from "react"
import { Quote, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Maru Ibanez",
    role: "Founder @ Evaluados AI | EdTech | Global Shaper Davos",
    relationship: "Maru fue manager directa de Agustin",
    excerpt:
      "Un gran profesional y una gran persona. Agustin se destaco por combinar muy buena capacidad tecnica con una vision de producto y de negocio poco comun en el rol. Desde que entro a Evaluados se convirtio rapidamente en un actor clave del equipo.",
    fullContent:
      "Un gran profesional y una gran persona. Agustin se destaco por combinar muy buena capacidad tecnica con una vision de producto y de negocio poco comun en el rol. Desde que entro a Evaluados se convirtio rapidamente en un actor clave del equipo.\n\n- Lidero varias propuestas de automatizacion interna. Una de las mas significativas en el equipo de implementacion fue el proceso de carga de asignaturas: lo que antes tomaba entre 1 y 2 meses con dos personas dedicadas, hoy se resuelve en apenas 2 dias.\n\n- Integro CodePush en nuestra app mobile para acelerar los deploys evitando el ciclo de las tiendas.\n\n- Trabajo en optimizar el onboarding de nuevas universidades y la carga masiva de usuarios (hablamos de miles de usuarios universitarios).\n\n- Acompano al CTO codo a codo en la migracion completa de nuestro software, entre muchas otras cosas.\n\nEs una persona muy proactiva: frente a cada desafio, siempre trae soluciones a la mesa. Tiene una gran sensibilidad para entender el impacto de su trabajo en el resto del equipo y aportar valor donde mas se necesita.\n\nCualquier equipo que lo sume va a ganar no solo un muy buen profesional, sino tambien un partner estrategico para pensar producto y operacion. Lo recomiendo sin dudarlo.",
    initials: "MI",
  },
]

export function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="anim-scroll-fade">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">04.</span>
            Recomendaciones
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => {
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
                      Leer menos
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Leer mas
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
