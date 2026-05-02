import { Github, Linkedin, Mail, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ContactDict } from "@/lib/dict/types";
import { features } from "@/lib/features";

interface Props {
  dict: ContactDict;
}

export function Contact({ dict }: Props) {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="anim-scroll-fade">
          <p className="text-primary font-mono text-sm mb-4">
            {dict.sectionNumber} {dict.tagline}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {dict.title}
          </h2>
        </div>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed anim-scroll-fade-delay-1">
          {dict.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 anim-scroll-fade-delay-1">
          <Button asChild size="lg" className="group">
            <a
              href="https://calendly.com/agustinm06/agustin-mariscotti-30-min-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {dict.calendlyLabel}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <a href="mailto:agustinm06@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              {dict.emailLabel}
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-8 anim-scroll-fade-delay-2">
          {features.github && (
            <a
              href="https://github.com/agustinmariscotti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          )}
          <a
            href="https://linkedin.com/in/agustinmariscotti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:agustinm06@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
