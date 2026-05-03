import { Mail } from "lucide-react";
import type { FooterDict } from "@/lib/dict/types";

interface Props {
  dict: FooterDict;
  githubEnabled: boolean;
}

export function Footer({ dict, githubEnabled }: Props) {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">{dict.credit}</p>

        <div className="flex items-center gap-6">
          {githubEnabled && (
            <a
              href="https://github.com/agustinmariscotti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.985 1.03-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.832a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.683 0 3.842-2.337 4.688-4.566 4.936.359.31.679.921.679 1.856 0 1.339-.012 2.419-.012 2.748 0 .267.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
              </svg>
            </a>
          )}
          <a
            href="https://linkedin.com/in/agustinmariscotti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286h-.006ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.114 20.452H3.556V9h3.558v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
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
