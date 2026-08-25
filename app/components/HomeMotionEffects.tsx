"use client";
import { useEffect } from "react";

export default function HomeMotionEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-page="home"]');
    if (!root) return;
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal], [data-guide]"));
    root.classList.add("motion-ready");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    let observer: IntersectionObserver | undefined;
    const frame = window.requestAnimationFrame(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
      targets.forEach((element) => {
        observer?.observe(element);
        const rect = element.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight - 40) {
          element.classList.add("is-visible");
          observer?.unobserve(element);
        }
      });
    });
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);
  return null;
}
