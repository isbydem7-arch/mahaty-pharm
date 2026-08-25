"use client";
import { useEffect } from "react";

export default function ServicesMotionEffects(){
  useEffect(()=>{
    const root=document.querySelector<HTMLElement>('[data-page="services"]');
    if(!root)return;
    const targets=Array.from(root.querySelectorAll<HTMLElement>("[data-reveal], [data-guide]"));
    root.dataset.motionReady="true";
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window)){targets.forEach(el=>el.dataset.visible="true");return}
    let observer:IntersectionObserver|undefined;
    const frame=requestAnimationFrame(()=>{
      observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;(entry.target as HTMLElement).dataset.visible="true";observer?.unobserve(entry.target)}),{threshold:.08,rootMargin:"0px 0px -40px 0px"});
      targets.forEach(el=>{observer?.observe(el);const rect=el.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight-40){el.dataset.visible="true";observer?.unobserve(el)}});
    });
    return()=>{cancelAnimationFrame(frame);observer?.disconnect()};
  },[]);
  return null;
}
