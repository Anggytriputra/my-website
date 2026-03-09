"use client";

import { CheckIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Mysql",
  "Socket.io",
  "GitHub",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-lg md:text-xl mr-2">
              01.
            </span>
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Anggy, an Application Engineer and Full Stack Developer
              based in Indonesia. I specialize in building scalable web
              applications and enterprise systems using modern JavaScript
              technologies such as React, Next.js, Node.js, and NestJS.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              In my professional experience, I have developed several real-world
              systems including omnichannel live chat platforms, workshop
              management systems, work order tracking applications, and proposal
              management systems that help businesses streamline their
              operations.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I enjoy solving complex problems, optimizing system performance,
              and building reliable applications that deliver real value to
              users and organizations.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary text-xs">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="relative w-full aspect-square rounded">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 rounded" />

              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="relative inline-block">
                  <Avatar className="h-48 w-48 ring-2 ring-blue-600 ring-offset-4 ring-offset-background dark:ring-blue-400">
                    <AvatarImage
                      src="/anggy.jpg"
                      alt="Anggy"
                      className="object-contain bg-white"
                    />
                    <AvatarFallback>AT</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-2 right-5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                    <CheckIcon className="h-4 w-4 text-white" />
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary rounded -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all" />
          </div>

          {/* <div className="relative w-fit">
            <Avatar className="ring-offset-background ring-2 ring-green-600 ring-offset-2 dark:ring-green-400">
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
                alt="Hallie Richards"
              />
              <AvatarFallback className="text-xs">HR</AvatarFallback>
            </Avatar>
            <span className="absolute -right-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full bg-green-600 dark:bg-green-400">
              <CheckIcon className="size-3 text-white" />
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
