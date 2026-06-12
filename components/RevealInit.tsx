"use client";
import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(i * 45, 180)}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
