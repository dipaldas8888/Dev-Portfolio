"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sparkles, Terminal } from "lucide-react";

export interface SplashScreenProps {
  onComplete?: () => void;
  minDuration?: number; // duration in ms
}

export default function SplashScreen({
  onComplete,
  minDuration = 2200,
}: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const intervalTime = 30; // update frequency

    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const calculatedProgress = Math.min(
        100,
        Math.floor((elapsedTime / minDuration) * 100),
      );

      setProgress(calculatedProgress);

      if (calculatedProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          onComplete?.();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [minDuration, onComplete]);

  const getStatusMessage = (prog: number) => {
    if (prog < 30) return "Initializing Core System...";
    if (prog < 65) return "Loading 3D Scene & Canvas...";
    if (prog < 90) return "Configuring Portfolio Components...";
    return "Welcome to DevFolio";
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(16px)",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background px-4"
        >
          {/* Ambient Glowing Orbs */}
          <motion.div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Center Brand Monogram */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-8"
            >
              {/* Outer Pulsing Neon Ring */}
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary via-sky-400 to-accent opacity-75 blur-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Central Hex / Badge Container */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-background/80 shadow-2xl backdrop-blur-xl sm:h-28 sm:w-28">
                <Code2 className="h-12 w-12 text-primary sm:h-14 sm:w-14" />
                <motion.div
                  className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
              </div>
            </motion.div>

            {/* Developer Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary via-sky-400 to-accent bg-clip-text text-transparent">
                  PORTFOLIO
                </span>
              </h1>
              <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
                <Terminal className="h-4 w-4 text-primary" />
                Full-Stack Engineer
              </p>
            </motion.div>

            {/* Animated Progress Bar & Percentage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 w-72 sm:w-80"
            >
              <div className="relative h-2.5 w-full overflow-hidden rounded-full border border-white/10 bg-white/5 p-0.5 backdrop-blur-md">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-sky-400 to-accent"
                  style={{
                    width: `${progress}%`,
                    boxShadow: "0 0 16px rgba(59, 130, 246, 0.8)",
                  }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Status and Percentage Label */}
              <div className="mt-4 flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                  {getStatusMessage(progress)}
                </span>
                <span className="font-mono font-bold text-foreground">
                  {progress}%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
