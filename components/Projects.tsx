"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Jobify",
      description:
        "A full-stack job discovery engine featuring multi-filtering criteria, PDF/DOC resume uploads, saved job bookmarks, a Recruiter Portal with job posting lifecycles and in-browser resume inspection, plus an Admin Dashboard for platform metrics and user role management.",
      tags: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
      ],
      live: "https://jobify-two-topaz.vercel.app/",
      github: "https://github.com/dipaldas8888/jobify",
    },
    {
      id: 2,
      title: "Crowdly",
      description:
        "A social media web app with real-time chat, activity notifications, 24 hr stories, activity feed, nested discussions, post sharing, location metadata, a custom bookmarking module, Cloudinary media uploads, email OTP validation via Nodemailer, and secure JWT handling.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Cloudinary",
      ],
      live: "https://crowdly-jade.vercel.app/",
      github: "https://github.com/dipaldas8888/Crowdly",
    },
    {
      id: 3,
      title: "BookNest",
      description:
        "A full-stack online bookstore featuring secure JWT & Google OAuth authentication, advanced book search and filtering, persistent shopping cart, and role-based admin dashboard.",
      tags: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      live: "https://book-nest-omega.vercel.app/",
      github: "https://github.com/dipaldas8888/BookNest",
    },
    {
      id: 4,
      title: "NOVA",
      description:
        "A high-performance, fully responsive AI productivity SaaS landing page with glassmorphism visuals, dark/light theme persistence, React 19 code splitting, Suspense boundaries, optimized bundle size, interactive product demo modal, pricing toggle, persona tabs, animated counters, testimonials carousel, and accessible FAQ accordion.",
      tags: [
        "React 19",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "Dark Mode",
        "Performance",
      ],
      live: "https://nova-phi-bice.vercel.app/",
      github: "https://github.com/dipaldas8888/Nova",
    },
    {
      id: 5,
      title: "SenseAI",
      description:
        "An AI-powered ATS resume builder and cover letter generator featuring multi-template selection, real-time resume scoring, and Google Gemini API integration.",
      tags: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "React",
        "Tailwind CSS",
        "Gemini AI",
      ],
      github: "https://github.com/dipaldas8888/senseai",
    },
    {
      id: 6,
      title: "Nexus",
      description:
        "A modern, feature-rich web application built with Next.js and Tailwind CSS featuring interactive components, responsive design, and seamless user experience.",
      tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Shadcn UI"],
      live: "https://nexus-mocha-psi-35.vercel.app/",
      github: "https://github.com/dipaldas8888/Nexus",
    },
    {
      id: 7,
      title: "TCongs Assignment",
      description:
        "A responsive assignment application showcasing clean state management, modular component structure, dynamic UI elements, and API integration.",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel"],
      live: "https://tcongs-assignment-mu.vercel.app/",
      github: "https://github.com/dipaldas8888/tcongs-assignment",
    },
    {
      id: 8,
      title: "TaskFlow",
      description:
        "A full-stack task management application with user authentication, real-time updates, and a responsive design. Users can create, edit, and delete tasks, set priorities, and track progress.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/dipaldas8888/TaskFlow",
      live: "https://task-flow-chi-sooty.vercel.app/",
    },
    {
      id: 9,
      title: "DashHive",
      description:
        "A modern full-stack web application with secure JWT authentication, responsive UI, and scalable backend architecture.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/dipaldas8888/Dashhive",
    },
    {
      id: 10,
      title: "Landing Page",
      description:
        "This is a modern restaurant landing page built using React, Vite, and Tailwind CSS. The website provides a clean UI to showcase restaurant services, menu highlights, and contact information.",
      tags: ["React", "Tailwind CSS"],
      github: "https://github.com/dipaldas8888/restro-landing",
      live: "https://restro-three-pi.vercel.app/",
    },
    {
      id: 11,
      title: "NextCart",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and a shopping cart system. It features a responsive design.",
      tags: [
        "React",
        "Tailwind CSS",
        "Context API",
        "Spring Boot",
        "PostgreSQL",
        "Java",
      ],
      repositories: [
        {
          label: "Frontend",
          href: "https://github.com/dipaldas8888/NextCart",
        },
        {
          label: "Backend",
          href: "https://github.com/dipaldas8888/NexttCart",
        },
      ],
    },
    {
      id: 12,
      title: "NovaCare",
      description:
        "A full-stack healthcare platform for seamless doctor appointment booking, secure authentication and appointment management.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Spring Boot",
        "Supabase",
        "Java",
        "Cloudinary",
      ],
      repositories: [
        {
          label: "Frontend",
          href: "https://github.com/dipaldas8888/NovaCareUI",
        },
        {
          label: "Backend",
          href: "https://github.com/dipaldas8888/NovaCare",
        },
      ],
    },
    {
      id: 13,
      title: "PingUp",
      description:
        "A highly responsive, production-ready real-time chat application featuring secure JWT authentication, typing indicators, online/offline status tracking, custom avatar creation, and real-time messaging via Socket.io.",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "Socket.io",
        "MongoDB",
        "Tailwind CSS",
      ],
      live: "https://ping-up-six-sigma.vercel.app/",
      github: "https://github.com/dipaldas8888/ping-up",
    },
    {
      id: 14,
      title: "Mini Exception Inbox",
      description:
        "An operator dashboard designed to detect production plan-vs-actual deficits, surface them in an exception inbox, and allow quick actions/status resolutions directly from the UI.",
      tags: [
        "React",
        "FastAPI",
        "Python",
        "SQLite",
        "SQLAlchemy",
        "Pandas",
        "Vite",
      ],
      github: "https://github.com/dipaldas8888/mini-exception",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-transparent px-4 py-20 sm:px-6 lg:px-8"
    >
      <motion.div
        className="absolute left-0 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl opacity-30 sm:h-96 sm:w-96"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-30 sm:h-80 sm:w-80"
        animate={{ y: [0, -18, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -1,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-5xl">
              Featured Projects
            </h2>
            <motion.div
              className="h-1 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            />
          </motion.div>

          <motion.div
            className="mb-20 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="group h-full"
              >
                <div className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-background">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-80" />

                  <div className="relative z-10 flex h-full flex-col space-y-5 p-6">
                    <motion.h3
                      className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-grow flex-wrap content-start gap-2 pt-2">
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="inline-block rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1 text-xs font-medium text-primary"
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05, duration: 0.25 }}
                          whileHover={{ y: -2, scale: 1.03 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      className="mt-auto flex flex-wrap gap-3 border-t border-primary/10 pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.12 }}
                    >
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-w-[130px] flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}

                      {(
                        project.repositories ?? [
                          { label: "Code", href: project.github },
                        ]
                      ).map((repository) => (
                        <motion.a
                          key={repository.label}
                          href={repository.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-w-[130px] flex-1 items-center justify-center gap-2 rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/10"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Github className="h-4 w-4" />
                          <span>{repository.label}</span>
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div className="mt-20" variants={itemVariants}>
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 backdrop-blur-sm sm:p-12"
              whileHover={{ borderColor: "rgb(55, 65, 180, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div className="flex-1">
                  <h3 className="mb-4 text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-4xl">
                    More Case Studies
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Additional product work and implementation examples are
                    available on request for client and project discussions.
                  </p>
                </div>

                <motion.a
                  href="#projects"
                  className="relative overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-4 font-semibold text-primary-foreground"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(55, 65, 180, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <span className="relative flex items-center gap-2">
                    <motion.span whileHover={{ rotate: 12 }}>
                      <Github className="h-5 w-5" />
                    </motion.span>
                    View Projects
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
