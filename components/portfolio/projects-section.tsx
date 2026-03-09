"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Inbound Omnichannel Customer support livechat",
    description:
      "This system enables customers to reach support agents through multiple integrated channels, namely Live Chat, Email, and Telegram. All customer interactions are centralized into a single platform, allowing agents to respond quickly and efficiently without switching between different applications.",
    tech: [
      "Node.js",
      "React",
      "Redux",
      "Tailwind",
      "Shadcn",
      "Express.js",
      "PHP",
      "Mysql",
      "Socket.IO",
    ],
    github: "https://github.com",
    external:
      "https://drive.google.com/drive/folders/1DDWRacCLo8boHKNbs1pCSNIUWllJnAT9",
    image: "/omni_channel_chatroom.png",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/project-2.jpg",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy using advanced language models.",
    tech: ["Next.js", "OpenAI API", "Prisma", "Vercel AI SDK"],
    github: "https://github.com",
    external: "https://example.com",
    image: "/project-3.jpg",
  },
];

const otherProjects = [
  {
    title: "Inbound Omnichannel Customer support livechat",
    description:
      "This system enables customers to reach support agents through multiple integrated channels, namely Live Chat, Email, and Telegram. All customer interactions are centralized into a single platform, allowing agents to respond quickly and efficiently without switching between different applications.",
    tech: [
      "Node.js",
      "React",
      "Redux",
      "Tailwind",
      "Shadcn",
      "Express.js",
      "PHP",
      "Mysql",
      "Socket.IO",
    ],
    github: "https://github.com",
    external:
      "https://drive.google.com/drive/folders/1DDWRacCLo8boHKNbs1pCSNIUWllJnAT9",
    image: "/omnichannel.png",
  },
  {
    title: "Raptor – Revenue Profit Generator",
    description:
      "This is a solution proposal management application for PT. VADS Indonesia, designed to streamline the end-to-end process of handling client proposals. With Raptor, users can track proposal submissions, monitor SLA compliance, and evaluate the success rate of winning tenders. The system provides management with clear insights into revenue opportunities and project profitability.",
    tech: ["React", "Redux", "Boostrap,", "PHP", "Mysql"],
    github: "https://github.com",
    external:
      "https://drive.google.com/drive/folders/1az28Rfl5jP0mKO4JvXZ-5HQZcx8OsL71",
    image: "/raptor.png",
  },
  {
    title: "Bangunin APP",
    description:
      "A business application designed to support the construction industry by providing a platform for managing construction-related products and branch operations. The system enables centralized control while maintaining branch-level administration, ensuring both flexibility and oversight.",
    tech: ["Node.js", "React", "Redux", "Tailwind", "Express.js", "Mysql"],
    github: "https://github.com/Anggytriputra/JCWDOL0903",
    external: "https://jcwdol0903.purwadhikabootcamp.com/",
    image: "/bangunin_app.png",
  },
  {
    title: "Quantum Nusatama Asset Web App",
    description:
      "The QN Asset App is designed to monitor all assets across Quantum Nusatama branches. The central branch has the ability to add new assets, while branches can initiate asset returns to the central branch. The return status is categorized into four statuses: bad, good, service, and project completed. Additionally, the app supports asset transfers, allowing either branches or the central branch to transfer assets to a designated branch if the assets are needed there.",
    tech: ["Node.js", "React", "Redux", "Tailwind", "Express.js", "Mysql"],
    github: "https://github.com/Anggytriputra/qn_assets",
    external: "",
    image: "/qn_asset.png",
  },
  {
    title: "Stroke Prediction With Model Classification",
    description:
      "Globally, stroke is the second leading cause of death and the third leading cause of disability. One in four people are in danger of stroke in their lifetime. Lifestyle risk factors for stroke include being overweight or obese, physical inactivity, tobacco use and alcohol abuse. Medical risk factors include high blood pressure, high cholesterol, diabetes and a personal or family history of stroke or heart attack. An estimated 70% of strokes occur in low- and middle-income countries, which also account for 87% of stroke-related deaths and disability-adjusted life years.",
    tech: ["Jupyter Notebook"],
    github:
      "https://github.com/Anggytriputra/Anggy_Portofolio/tree/main/Project_1",
    external: "https://anggytriputra.github.io/portfolio_web/",
    image: "/stroke_prediction.png",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-lg md:text-xl mr-2">
              02.
            </span>
            Some Things I've Built
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Featured Projects */}
        {/* <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
            
              <div
                className={`md:col-span-7 relative group ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                } row-start-1`}
              >
                <Link
                  href={project.external}
                  target="_blank"
                  className="block"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-xl">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>

       
              <div
                className={`md:col-span-6 relative z-10 ${
                  index % 2 === 0
                    ? "md:col-start-6 md:text-right"
                    : "md:col-start-1 md:text-left"
                } row-start-1`}
              >
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  <Link
                    href={project.external}
                    target="_blank"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>
                <div className="bg-card p-6 rounded shadow-lg mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 text-sm text-muted-foreground font-mono mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.external}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Other Projects */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Noteworthy Projects
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-lg shadow-lg hover:-translate-y-2 transition-transform group overflow-hidden border border-border"
            >
              <Link
                href={project.external}
                target="_blank"
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    <Link
                      href={project.external}
                      target="_blank"
                    >
                      {project.title}
                    </Link>
                  </h4>
                  <div className="flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                    <Link
                      href={project.external}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground font-mono">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
