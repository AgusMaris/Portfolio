import { Github, Linkedin, Mail } from "lucide-react";
import type { FooterDict } from "@/lib/dict/types";

interface Props {
  dict: FooterDict;
}

export function Footer({ dict }: Props) {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">{dict.credit}</p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/agustinmariscotti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/agustinmariscotti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:agustinm06@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
