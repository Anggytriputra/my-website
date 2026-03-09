"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <Link
          href="/"
          className="text-primary font-bold text-2xl font-mono"
        >
          {"<Yarn Anggy />"}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <span className="text-primary mr-1">0{index + 1}.</span>
              {link.name}
            </Link>
          ))}
          <Link
            href="/CV_ANGGYTRIPUTRA.pdf"
            target="_blank"
            className="border border-primary text-primary px-4 py-2 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            Resume
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-mono text-sm"
              >
                <span className="text-primary mr-1">0{index + 1}.</span>
                {link.name}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="border border-primary text-primary px-4 py-2 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
