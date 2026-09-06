"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TextType from "@/components/ui/TextType";
import BlurText from "@/components/ui/BlurText";

export default function Hero() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const stats = [{ value: "MERN", label: "Core Stack" }];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-4 pt-20 sm:px-6 lg:px-8">
      <motion.div
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-40"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-16 right-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl opacity-30"
        variants={floatVariants}
        animate="animate"
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -1,
        }}
      />
      <motion.div
        className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-secondary/10 blur-2xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full border border-accent/20"
        animate={{ rotate: -360 }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <TextType
              text={[
                "Full-Stack Developer • MERN",
                "React & Next.js Specialist",
                "Node.js & Express Builder",
                "Spring Boot Enthusiast",
              ]}
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2500}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-primary font-bold"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground sm:text-base">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">
              Crafting clean, modern
            </span>
            <span className="block bg-gradient-to-r from-primary via-sky-400 to-accent bg-clip-text text-transparent">
              <TextType
                text={[
                  "full-stack web experiences",
                  "scalable web applications",
                  "interactive digital products",
                  "robust MERN solutions",
                ]}
                typingSpeed={65}
                deletingSpeed={35}
                pauseDuration={2200}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-accent font-light"
                startOnVisible={true}
              />
            </span>
          </h1>

          <BlurText
            text="I build responsive frontend interfaces and secure backend systems using React, Next.js, Node.js, and MongoDB, with a strong focus on performance, usability, and real-world product quality."
            delay={50}
            animateBy="words"
            direction="bottom"
            className="mx-auto max-w-3xl justify-center text-lg leading-relaxed text-muted-foreground sm:text-xl"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {["React + Next.js", "Node.js + Express", "MongoDB + SQL"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/90 backdrop-blur-md"
              >
                {item}
              </span>
            ),
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <motion.button
            onClick={(e) => scrollToSection(e, "#projects")}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-sky-400 to-accent px-8 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/25"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(59,130,246,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-accent via-sky-400 to-primary"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={(e) => scrollToSection(e, "#contact")}
            className="rounded-xl border border-primary/30 bg-background/40 px-8 py-4 font-semibold text-primary backdrop-blur-md transition-colors hover:bg-primary/10"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(59,130,246,0.2)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center"
        >
          <motion.div whileHover={{ scale: 1.12 }} className="cursor-pointer">
            <div className="relative flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary p-2">
              <motion.div
                className="h-2 w-1 rounded-full bg-gradient-to-b from-primary to-accent"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                animate={{ opacity: [0, 0.35, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
          <motion.p
            className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
