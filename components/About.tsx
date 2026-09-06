"use client";

import { motion } from "framer-motion";
import { Code2, ShieldCheck, Cpu, Sparkles } from "lucide-react";
import SplitText from "@/components/ui/SplitText";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const highlights = [
    {
      icon: <Code2 className="h-6 w-6 text-primary" />,
      title: "Full-Stack Development",
      description: "Crafting end-to-end web applications with React, Next.js, Node.js, Express, and Java Spring Boot.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-sky-400" />,
      title: "Secure API & Auth Architecture",
      description: "Designing REST APIs with JWT, OAuth 2.0, OTP email verification, and cryptographic signature validation.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-accent" />,
      title: "Database & AI Integration",
      description: "Architecting relational (MySQL, PostgreSQL) & NoSQL (MongoDB) databases, alongside Google Gemini AI API integrations.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background Orbs */}
      <motion.div
        className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 opacity-40 blur-3xl"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-accent/10 opacity-30 blur-3xl"
        variants={floatVariants}
        animate="animate"
        transition={{ duration: 4, delay: -1 }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div className="mb-12 sm:mb-16" variants={itemVariants}>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
              Get To Know Me
            </div>
            
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              <SplitText
                text="About Me"
                className="bg-gradient-to-r from-primary via-sky-400 to-accent bg-clip-text text-transparent"
                delay={60}
                duration={0.7}
                splitType="chars"
                tag="span"
              />
            </h2>

            <motion.div
              className="h-1 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Main Layout Grid */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Column - Detailed Profile Story */}
            <motion.div className="space-y-6 lg:col-span-7" variants={itemVariants}>
              <div className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card/90 via-background/80 to-card/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 sm:p-10">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />

                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Full-Stack Software Engineer
                </h3>

                <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I am a dedicated <span className="font-semibold text-foreground">Full-Stack Developer</span> based in Bengaluru, specializing in building scalable web applications and secure REST APIs using the <span className="font-semibold text-primary">MERN Stack (React, Node.js, Express, MongoDB)</span> and <span className="font-semibold text-accent">Java Spring Boot</span>.
                </p>

                <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Holding a B.Tech in Computer Science & Engineering, I have contributed to enterprise-grade platforms including Project Management tools with Gantt charts & permission matrices, HRMS platforms with dynamic form validation & payroll workflows, and AI-powered ATS resume builders using <span className="font-semibold text-sky-400">Google Gemini API</span>.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  My focus is on engineering clean API architectures, robust security (JWT, OAuth 2.0, SHA-256 validation), and responsive, performant user interfaces.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Highlight Cards */}
            <motion.div className="space-y-6 lg:col-span-5" variants={itemVariants}>
              <h3 className="text-xl font-bold text-foreground">
                Core Specializations
              </h3>

              <div className="space-y-4">
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 shadow-sm transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="mb-1 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
