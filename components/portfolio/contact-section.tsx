"use client";

import Link from "next/link";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">03. What's Next?</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          I'm currently looking for new opportunities. Whether you have a
          question, want to discuss a project, or just want to say hi, my inbox
          is always open. I'll try my best to get back to you!
        </p>
        <Link
          href="mailto:anggytriasaputra@gmail.com"
          target="_blank"
          className="inline-block border border-primary text-primary px-8 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
        >
          Say Hello
        </Link>
      </div>
    </section>
  );
}
