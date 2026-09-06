"use client";

import { Mail, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
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

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background Glows */}
      <motion.div
        className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 opacity-30 blur-3xl"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent/10 opacity-20 blur-3xl"
        variants={floatVariants}
        animate="animate"
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -1.5,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="mb-16 text-center" variants={itemVariants}>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
              Get In Touch
            </div>

            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              <span className="bg-gradient-to-r from-primary via-sky-400 to-accent bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>

            <motion.div
              className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />

            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you have a project opportunity, a question, or just want
              to connect, feel free to reach out through the contact form or
              share the details of your project.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-background to-card p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-sm transition-transform group-hover:scale-110">
                  <Mail className="h-7 w-7" />
                </div>

                <h3 className="mb-1 text-2xl font-bold text-foreground">
                  Project Inquiries
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Share your goals, timeline, and project scope, and we can
                  discuss the best next steps.
                </p>

                <div className="mb-6 rounded-xl border border-primary/20 bg-background/60 p-4 font-mono text-sm font-semibold text-primary backdrop-blur-sm">
                  Available on request
                </div>
              </div>

              <a
                href="#contact-form"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary via-sky-400 to-accent px-5 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                <span>Send a Message</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-background to-card p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent shadow-sm transition-transform group-hover:scale-110">
                  <MapPin className="h-7 w-7" />
                </div>

                <h3 className="mb-1 text-2xl font-bold text-foreground">
                  Work Status
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Open for freelance collaborations, product work, and remote
                  project engagements.
                </p>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm font-medium text-green-400">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span>Available for Freelance & Remote Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
