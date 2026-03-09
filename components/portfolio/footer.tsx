"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Social Links */}
        <div className="flex justify-center gap-6 mb-6 md:hidden">
          <Link
            href=" https://github.com/Anggytriputra"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href=" https://www.linkedin.com/in/anggytriputra27/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:anggytriasaputra@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by{" "}
            <Link
              href="/"
              className="text-primary hover:underline"
            >
              Anggy Triputra
            </Link>
          </p>
          <p className="text-muted-foreground/60 text-xs font-mono mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
