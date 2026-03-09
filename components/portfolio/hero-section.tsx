"use client";

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm md:text-base mb-4">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          <span className="text-balance">Anggy Triputra</span>
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
          <span className="text-balance">
            I build scalable web applications..
          </span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          I'm an Application Engineer and Full Stack Developer with experience
          building enterprise web applications using modern JavaScript
          technologies such as React, Next.js, Node.js, and NestJS. I focus on
          creating scalable systems, real-time applications, and efficient
          solutions that support business operations.
        </p>

        <div className="flex items-center gap-6 mb-12">
          <Link
            href="#projects"
            className="border border-primary text-primary px-6 py-3 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-3 rounded font-mono text-sm hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        <div className="flex items-center gap-5">
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
          <Link
            href="/CV_ANGGYTRIPUTRA.pdf"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Resume"
          >
            <FileText className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
