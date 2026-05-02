import Image from "next/image";
import type { AboutDict } from "@/lib/dict/types";

interface Props {
  dict: AboutDict;
}

function renderParagraph(text: string, index: number) {
  const parts = text.split("<highlight>");
  return (
    <p key={index} className="text-muted-foreground leading-relaxed">
      {parts.map((part, i) => {
        if (i === 0) return part;
        const [highlighted, rest] = part.split("</highlight>");
        return (
          <span key={i}>
            <span className="text-primary">{highlighted}</span>
            {rest}
          </span>
        );
      })}
    </p>
  );
}

export function About({ dict }: Props) {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="anim-scroll-fade">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="text-primary font-mono text-lg">
              {dict.sectionNumber}
            </span>
            {dict.title}
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 anim-scroll-fade-delay-1">
            {dict.paragraphs.map((p, i) => renderParagraph(p, i))}
          </div>

          <div className="relative group anim-scroll-fade-delay-2 md:self-start">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
              <Image
                src="/me.webp"
                alt="Agustin"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
