"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Braces, Cpu, Layers3, Rocket, Terminal } from "lucide-react";

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
    if (prog < 28) return "Preparing interface";
    if (prog < 58) return "Composing 3D workspace";
    if (prog < 86) return "Syncing projects and skills";
    return "Ready to explore";
  };

  const stack = ["React", "Next.js", "Node", "MongoDB"];
  const signals = [
    { icon: Braces, label: "UI" },
    { icon: Cpu, label: "API" },
    { icon: Layers3, label: "UX" },
  ];

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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#07080c] px-4 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1e3a8a33,transparent_42%),linear-gradient(135deg,#111827_0%,#07080c_48%,#101010_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2.75rem_2.75rem] [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_82%,transparent)]" />
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent"
            animate={{ y: ["0vh", "100vh"], opacity: [0, 1, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/70 shadow-2xl shadow-black/30 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Portfolio system online
            </motion.div>

            <motion.div
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-8 flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44"
            >
              <motion.div
                className="absolute inset-0 rounded-[2rem] border border-sky-300/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-[1.55rem] border border-orange-300/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-sky-400 via-primary to-accent opacity-80 blur-xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-[#0b0f18]/90 shadow-2xl shadow-sky-950/60 backdrop-blur-xl sm:h-28 sm:w-28">
                <span className="bg-gradient-to-br from-white via-sky-200 to-orange-200 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                  D
                </span>
                <motion.div
                  className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-sky-200 shadow-lg backdrop-blur-md"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Rocket className="h-4 w-4" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                <span className="block text-white">DevFolio</span>
                <span className="block bg-gradient-to-r from-sky-300 via-white to-orange-300 bg-clip-text text-transparent">
                  Built for impact
                </span>
              </h1>
              <p className="mx-auto flex max-w-xl items-center justify-center gap-2 text-sm font-medium text-white/65 sm:text-base">
                <Terminal className="h-4 w-4 shrink-0 text-sky-300" />
                Full-stack experiences with clean UI, fast APIs, and product-grade detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/70 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-10 w-full max-w-md"
            >
              <div className="mb-4 grid grid-cols-3 gap-2">
                {signals.map(({ icon: Icon, label }, index) => (
                  <div
                    key={label}
                    className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-semibold text-white/65"
                  >
                    <Icon className="h-3.5 w-3.5 text-sky-300" />
                    {label}
                    <span
                      className={
                        progress > (index + 1) * 26
                          ? "h-1.5 w-1.5 rounded-full bg-emerald-400"
                          : "h-1.5 w-1.5 rounded-full bg-white/25"
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="relative h-3 w-full overflow-hidden rounded-md border border-white/10 bg-white/[0.06] p-0.5 shadow-2xl shadow-black/30 backdrop-blur-md">
                <motion.div
                  className="h-full rounded-[0.35rem] bg-gradient-to-r from-sky-300 via-primary to-accent"
                  style={{
                    width: `${progress}%`,
                    boxShadow: "0 0 24px rgba(56, 189, 248, 0.45)",
                  }}
                  transition={{ ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.25)_45%,transparent_60%)] opacity-40 animate-move-right" />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 text-xs font-medium text-white/55">
                <span className="flex min-w-0 items-center gap-2 text-left">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-300" />
                  </span>
                  {getStatusMessage(progress)}
                </span>
                <span className="font-mono text-sm font-bold text-white">
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
