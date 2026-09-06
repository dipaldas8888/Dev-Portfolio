"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
        { name: "Shadcn/ui", level: 90 },
      ],
    },
    backend: {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Java", level: 85 },
        { name: "Express", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 92 },
      ],
    },
    tools: {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 85 },
        { name: "Linux", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Redux", level: 90 },
        { name: "Vercel", level: 90 },
        { name: "Antigravity", level: 85 },
        { name: "Codex", level: 80 },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (idx: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: idx * 0.05, duration: 0.3 },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-40"
          variants={floatVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30"
          variants={floatVariants}
          animate="animate"
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1.5,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
              A comprehensive overview of my technical skills across different
              domains
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            variants={itemVariants}
          >
            {Object.entries(skillCategories).map(([key, category], idx) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold relative group overflow-hidden ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-2xl shadow-primary/30"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
                variants={tabVariants}
                custom={idx}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 to-primary/0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />
                <span className="relative flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  {category.title}
                </span>
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Object.entries(skillCategories).map(([key, category]) =>
                activeCategory === key
                  ? category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        exit={{
                          opacity: 0,
                          x: -20,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <motion.div
                          className="bg-gradient-to-br from-card to-background border border-primary/20 rounded-2xl p-6 relative overflow-hidden h-full"
                          whileHover={{
                            borderColor: "rgb(55, 65, 180, 0.5)",
                            boxShadow: "0 20px 40px rgba(55, 65, 180, 0.2)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          />
                          <div className="relative z-10">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="font-semibold text-lg">
                                {skill.name}
                              </h3>
                              <motion.span
                                className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>

                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full" />
                              <motion.div
                                className="bg-gradient-to-r from-primary via-accent to-secondary h-full rounded-full relative"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 0.8,
                                  delay: index * 0.05,
                                  ease: "easeOut",
                                }}
                                style={{
                                  boxShadow:
                                    "0 0 20px rgba(112, 212, 255, 0.5)",
                                }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))
                  : null,
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
