"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  // Mock data tailored to a Full-Stack MERN & Spring Boot profile
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Avyukt Core Technology",
      period: "April 2026 - July 2026",
      location: "Remote",
      description: [
        "Contributing to development of enterprise-level full-stack applications.",
        "Building scalable APIs and dynamic frontend features with modern tech stack.",
        "Implementing core functionalities for project management and HR systems.",
      ],
      projects: [
        {
          title: "Project Management Platform",
          points: [
            "Developed and integrated RESTful APIs for task management, dependencies, and scheduling; built dynamic frontend features for project creation and workflow management.",
            "Designed key features including Project Planning (tasks, dependencies, scheduling), routing/navigation, and contributed to modules like Gantt charts, milestones, and sprint planning.",
            "Developed permission matrix APIs for assigning, updating, and validating user roles and permissions.",
            "Tech Stack: React.js, Node.js, Express.js, Tailwind CSS, Redux",
          ],
        },
        {
          title: "Human Resource Management Platform (HRMS)",
          points: [
            "Developed OTP-based email verification workflow for user registration and password reset.",
            "Designed and implemented dynamic forms with configurable field validation and reusable form components.",
            "Implemented RESTful APIs for payroll management, salary structures, and payroll processing workflows.",
            "Tech Stack: React.js, Node.js, Express.js, Tailwind CSS, Redux",
          ],
        },
      ],
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Redux"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
      id="experience"
      className="relative overflow-hidden bg-transparent px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Floating Elements matching your UI */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <motion.div
          className="absolute right-10 top-20 h-80 w-80 rounded-full bg-primary/10 opacity-40 blur-3xl"
          variants={floatVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-accent/10 opacity-30 blur-3xl"
          variants={floatVariants}
          animate="animate"
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="mb-4 flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                Experience
              </h2>
            </div>
            <motion.div
              className="h-1 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              My professional journey and the impact I've made along the way.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-primary/20 pl-8 sm:pl-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
              >
                {/* Glowing Timeline Node */}
                <motion.div
                  className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary sm:-left-[57px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.6)",
                  }}
                />

                {/* Experience Card */}
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-background p-6 transition-all sm:p-8"
                  whileHover={{
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1 font-medium text-primary">
                          {exp.company}
                        </span>
                        <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:block" />
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:block" />
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="relative z-10 mt-6 list-inside list-disc space-y-2 text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Projects Section */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="relative z-10 mt-8 space-y-4 border-t border-primary/10 pt-6">
                      <h4 className="text-lg font-semibold text-foreground">
                        Key Projects
                      </h4>
                      {exp.projects.map((project, projIndex) => (
                        <motion.div
                          key={projIndex}
                          className="space-y-2 rounded-lg border border-accent/20 bg-accent/5 p-4 backdrop-blur-sm"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: projIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <h5 className="font-medium text-primary">
                            {project.title}
                          </h5>
                          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                            {project.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="leading-relaxed">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
