import { Github, Linkedin, Mail, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ContactDict } from "@/lib/dict/types";
import { features } from "@/lib/features";
import { SocialLink } from "@/components/tracking/social-link";
import { ContactButton } from "@/components/tracking/contact-button";

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
          <ContactButton
            href="https://calendly.com/agustinm06/agustin-mariscotti-30-min-call"
            label={dict.calendlyLabel}
            eventType="calendly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="mr-2 h-4 w-4" />
            {dict.calendlyLabel}
          </ContactButton>
          <ContactButton
            href="mailto:agustinm06@gmail.com"
            label={dict.emailLabel}
            eventType="email"
          >
            <Mail className="mr-2 h-4 w-4" />
            {dict.emailLabel}
          </ContactButton>
        </div>

        <div className="flex justify-center gap-8 anim-scroll-fade-delay-2">
          {features.github && (
            <SocialLink
              href="https://github.com/agustinmariscotti"
              label="GitHub"
              platform="github"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </SocialLink>
          )}
          <SocialLink
            href="https://linkedin.com/in/agustinmariscotti"
            label="LinkedIn"
            platform="linkedin"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </SocialLink>
          <SocialLink
            href="mailto:agustinm06@gmail.com"
            label="Email"
            platform="email"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </SocialLink>
        </div>
      </div>
    </section>
  );
}
