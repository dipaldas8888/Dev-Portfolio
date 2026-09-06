"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  return (
    <footer className="bg-transparent border-t border-primary/10 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30"
          variants={floatVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-20"
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
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building beautiful, performant, and accessible web applications
              that make a difference.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors block relative group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-primary">
              Let's Work Together
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Available for freelance projects, UI/UX design implementation, and
              modern product builds.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-primary/10 my-8"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg text-sm font-medium relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(55, 65, 180, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.1 }}
            >
              Back to Top ↑
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
