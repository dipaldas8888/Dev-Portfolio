"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import SplashScreen from "@/components/SplashScreen";

import CustomCursor from "@/components/CustomCursor";

const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Add intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Background3D />
      <Navigation />
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
