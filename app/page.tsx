"use client";

import { useEffect, useRef } from "react";

const TICKER_IDEAS = [
  "malayalam spelling game for class 4",
  "attendance tracker for a 30-kid tuition centre",
  "plus-two physics doubt bot",
  "fee reminder for parents on whatsapp",
  "handwriting practice for LKG",
  "past-paper quiz for SSLC",
  "timetable maker for a small school",
  "reading tracker for libraries",
  "voice notes to malayalam notes",
  "scholarship deadline finder",
];


export default function Home() {
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const COLORS = ["#00ff00", "#ffffff", "#2621F3", "#00ff00", "#000000"];

    const burst = (x: number, y: number, count = 5) => {
      for (let i = 0; i < count; i++) {
        const px = document.createElement("div");
        const size = Math.random() * 5 + 3;
        const angle = (i / count) * 2 * Math.PI + Math.random() * 0.5;
        const dist = Math.random() * 36 + 16;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        px.style.cssText = `
          position:fixed;left:${x}px;top:${y}px;
          width:${size}px;height:${size}px;background:${color};
          pointer-events:none;z-index:9999;
          outline:1.5px solid #000;will-change:transform,opacity;
        `;
        document.body.appendChild(px);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            px.style.transition = "transform 0.36s cubic-bezier(.2,.8,.4,1),opacity 0.36s ease";
            px.style.transform = `translate(${Math.cos(angle) * dist}px,${Math.sin(angle) * dist}px)`;
            px.style.opacity = "0";
          });
        });
        setTimeout(() => px.remove(), 400);
      }
    };

    // Load bursts above wordmark
    const introY = window.innerHeight * 0.18;
    [0, 80, 160, 260, 380, 500].forEach((delay) => {
      setTimeout(() => {
        burst(window.innerWidth * (0.15 + Math.random() * 0.7), introY + (Math.random() - 0.5) * 60, 9);
      }, delay);
    });

    const onClick = (e: MouseEvent) => burst(e.clientX, e.clientY, 7);
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = wordmarkRef.current;
      if (!el) return;
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.6), 1);
      const scale = 1 + progress * 1.8;
      const translateY = progress * -120;
      el.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tickerContent = [...TICKER_IDEAS, ...TICKER_IDEAS].map((idea, idx) => (
    <span key={idx}>{idea}</span>
  ));

  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="wordmark" ref={wordmarkRef} style={{ willChange: "transform, opacity", transformOrigin: "center top" }}>
          VIBE<span className="green">KODE</span>
        </div>
        <p className="wordmark-sub">Kozhikode, 2026</p>
        <p className="tagline">// kerala&apos;s first ever vibe coding contest · 2026</p>

        <div className="wrap">
          <div className="cta-row">
            <span className="btn btn-primary btn-disabled">
              COMING SOON
            </span>
            <a className="btn btn-ghost" href="#how-to">
              HOW TO PARTICIPATE →
            </a>
          </div>


          <div className="hero-svg">
            <svg viewBox="0 0 66 32" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" preserveAspectRatio="xMidYMax meet"><rect x="2" y="1" width="8" height="1" fill="#000000"></rect><rect x="14" y="1" width="4" height="1" fill="#000000"></rect><rect x="2" y="2" width="1" height="1" fill="#000000"></rect><rect x="3" y="2" width="2" height="1" fill="#0e0a8a"></rect><rect x="5" y="2" width="1" height="1" fill="#ffffff"></rect><rect x="6" y="2" width="3" height="1" fill="#0e0a8a"></rect><rect x="9" y="2" width="1" height="1" fill="#000000"></rect><rect x="14" y="2" width="4" height="1" fill="#00ff00"></rect><rect x="44" y="2" width="21" height="1" fill="#000000"></rect><rect x="2" y="3" width="1" height="1" fill="#000000"></rect><rect x="3" y="3" width="2" height="1" fill="#0e0a8a"></rect><rect x="5" y="3" width="1" height="1" fill="#ffffff"></rect><rect x="6" y="3" width="3" height="1" fill="#0e0a8a"></rect><rect x="9" y="3" width="1" height="1" fill="#000000"></rect><rect x="14" y="3" width="1" height="1" fill="#00ff00"></rect><rect x="17" y="3" width="1" height="1" fill="#00ff00"></rect><rect x="23" y="3" width="10" height="1" fill="#000000"></rect><rect x="39" y="3" width="1" height="1" fill="#000000"></rect><rect x="45" y="3" width="3" height="1" fill="#00ff00"></rect><rect x="49" y="3" width="3" height="1" fill="#ffffff"></rect><rect x="53" y="3" width="3" height="1" fill="#00ff00"></rect><rect x="57" y="3" width="3" height="1" fill="#ffffff"></rect><rect x="61" y="3" width="3" height="1" fill="#00ff00"></rect><rect x="2" y="4" width="1" height="1" fill="#000000"></rect><rect x="3" y="4" width="2" height="1" fill="#0e0a8a"></rect><rect x="5" y="4" width="1" height="1" fill="#ffffff"></rect><rect x="6" y="4" width="3" height="1" fill="#0e0a8a"></rect><rect x="9" y="4" width="1" height="1" fill="#000000"></rect><rect x="14" y="4" width="1" height="1" fill="#00ff00"></rect><rect x="17" y="4" width="1" height="1" fill="#00ff00"></rect><rect x="23" y="4" width="1" height="1" fill="#000000"></rect><rect x="24" y="4" width="8" height="1" fill="#ffffff"></rect><rect x="32" y="4" width="1" height="1" fill="#000000"></rect><rect x="37" y="4" width="2" height="1" fill="#000000"></rect><rect x="39" y="4" width="1" height="1" fill="#ffffff"></rect><rect x="40" y="4" width="2" height="1" fill="#000000"></rect><rect x="46" y="4" width="1" height="1" fill="#00ff00"></rect><rect x="50" y="4" width="1" height="1" fill="#ffffff"></rect><rect x="54" y="4" width="1" height="1" fill="#00ff00"></rect><rect x="58" y="4" width="1" height="1" fill="#ffffff"></rect><rect x="62" y="4" width="1" height="1" fill="#00ff00"></rect><rect x="2" y="5" width="1" height="1" fill="#000000"></rect><rect x="3" y="5" width="2" height="1" fill="#0e0a8a"></rect><rect x="5" y="5" width="1" height="1" fill="#ffffff"></rect><rect x="6" y="5" width="3" height="1" fill="#0e0a8a"></rect><rect x="9" y="5" width="1" height="1" fill="#000000"></rect><rect x="15" y="5" width="1" height="1" fill="#00ff00"></rect><rect x="17" y="5" width="1" height="1" fill="#00ff00"></rect><rect x="23" y="5" width="1" height="1" fill="#000000"></rect><rect x="24" y="5" width="5" height="1" fill="#ffffff"></rect><rect x="29" y="5" width="1" height="1" fill="#00ff00"></rect><rect x="30" y="5" width="2" height="1" fill="#ffffff"></rect><rect x="32" y="5" width="1" height="1" fill="#000000"></rect><rect x="36" y="5" width="1" height="1" fill="#000000"></rect><rect x="37" y="5" width="2" height="1" fill="#ffffff"></rect><rect x="39" y="5" width="1" height="1" fill="#00ff00"></rect><rect x="40" y="5" width="2" height="1" fill="#ffffff"></rect><rect x="42" y="5" width="1" height="1" fill="#000000"></rect><rect x="2" y="6" width="1" height="1" fill="#000000"></rect><rect x="3" y="6" width="6" height="1" fill="#ffffff"></rect><rect x="9" y="6" width="1" height="1" fill="#000000"></rect><rect x="23" y="6" width="1" height="1" fill="#000000"></rect><rect x="24" y="6" width="2" height="1" fill="#ffffff"></rect><rect x="26" y="6" width="1" height="1" fill="#00ff00"></rect><rect x="27" y="6" width="2" height="1" fill="#ffffff"></rect><rect x="29" y="6" width="2" height="1" fill="#00ff00"></rect><rect x="31" y="6" width="1" height="1" fill="#ffffff"></rect><rect x="32" y="6" width="1" height="1" fill="#000000"></rect><rect x="36" y="6" width="1" height="1" fill="#000000"></rect><rect x="37" y="6" width="2" height="1" fill="#ffffff"></rect><rect x="39" y="6" width="1" height="1" fill="#00ff00"></rect><rect x="40" y="6" width="2" height="1" fill="#ffffff"></rect><rect x="42" y="6" width="1" height="1" fill="#000000"></rect><rect x="2" y="7" width="1" height="1" fill="#000000"></rect><rect x="3" y="7" width="2" height="1" fill="#0e0a8a"></rect><rect x="5" y="7" width="1" height="1" fill="#ffffff"></rect><rect x="6" y="7" width="3" height="1" fill="#0e0a8a"></rect><rect x="9" y="7" width="1" height="1" fill="#000000"></rect><rect x="23" y="7" width="1" height="1" fill="#000000"></rect><rect x="24" y="7" width="1" height="1" fill="#ffffff"></rect><rect x="25" y="7" width="1" height="1" fill="#00ff00"></rect><rect x="26" y="7" width="2" height="1" fill="#ffffff"></rect><rect x="28" y="7" width="1" height="1" fill="#00ff00"></rect><rect x="29" y="7" width="2" height="1" fill="#ffffff"></rect><rect x="31" y="7" width="1" height="1" fill="#00ff00"></rect><rect x="32" y="7" width="1" height="1" fill="#000000"></rect><rect x="35" y="7" width="1" height="1" fill="#000000"></rect><rect x="36" y="7" width="3" height="1" fill="#ffffff"></rect><rect x="39" y="7" width="1" height="1" fill="#000000"></rect><rect x="40" y="7" width="2" height="1" fill="#00ff00"></rect><rect x="42" y="7" width="1" height="1" fill="#ffffff"></rect><rect x="43" y="7" width="1" height="1" fill="#000000"></rect><rect x="2" y="8" width="1" height="1" fill="#000000"></rect><rect x="3" y="8" width="2" height="1" fill="#0e0a8a"></rect><rect x="5" y="8" width="1" height="1" fill="#ffffff"></rect><rect x="6" y="8" width="3" height="1" fill="#0e0a8a"></rect><rect x="9" y="8" width="1" height="1" fill="#000000"></rect><rect x="15" y="8" width="6" height="1" fill="#000000"></rect><rect x="23" y="8" width="1" height="1" fill="#000000"></rect><rect x="24" y="8" width="2" height="1" fill="#ffffff"></rect><rect x="26" y="8" width="1" height="1" fill="#00ff00"></rect><rect x="27" y="8" width="1" height="1" fill="#ffffff"></rect><rect x="28" y="8" width="1" height="1" fill="#00ff00"></rect><rect x="29" y="8" width="1" height="1" fill="#ffffff"></rect><rect x="30" y="8" width="1" height="1" fill="#00ff00"></rect><rect x="31" y="8" width="1" height="1" fill="#ffffff"></rect><rect x="32" y="8" width="1" height="1" fill="#000000"></rect><rect x="36" y="8" width="1" height="1" fill="#000000"></rect><rect x="37" y="8" width="5" height="1" fill="#ffffff"></rect><rect x="42" y="8" width="1" height="1" fill="#000000"></rect><rect x="50" y="8" width="15" height="1" fill="#000000"></rect><rect x="2" y="9" width="1" height="1" fill="#000000"></rect><rect x="3" y="9" width="2" height="1" fill="#0e0a8a"></rect><rect x="5" y="9" width="1" height="1" fill="#ffffff"></rect><rect x="6" y="9" width="3" height="1" fill="#0e0a8a"></rect><rect x="9" y="9" width="1" height="1" fill="#000000"></rect><rect x="15" y="9" width="1" height="1" fill="#000000"></rect><rect x="16" y="9" width="4" height="1" fill="#ffffff"></rect><rect x="20" y="9" width="1" height="1" fill="#000000"></rect><rect x="23" y="9" width="1" height="1" fill="#000000"></rect><rect x="24" y="9" width="8" height="1" fill="#ffffff"></rect><rect x="32" y="9" width="1" height="1" fill="#000000"></rect><rect x="36" y="9" width="1" height="1" fill="#000000"></rect><rect x="37" y="9" width="5" height="1" fill="#ffffff"></rect><rect x="42" y="9" width="1" height="1" fill="#000000"></rect><rect x="50" y="9" width="15" height="1" fill="#000000"></rect><rect x="2" y="10" width="1" height="1" fill="#000000"></rect><rect x="3" y="10" width="2" height="1" fill="#0e0a8a"></rect><rect x="5" y="10" width="1" height="1" fill="#ffffff"></rect><rect x="6" y="10" width="3" height="1" fill="#0e0a8a"></rect><rect x="9" y="10" width="1" height="1" fill="#000000"></rect><rect x="15" y="10" width="1" height="1" fill="#000000"></rect><rect x="16" y="10" width="4" height="1" fill="#ffffff"></rect><rect x="20" y="10" width="1" height="1" fill="#000000"></rect><rect x="23" y="10" width="1" height="1" fill="#000000"></rect><rect x="24" y="10" width="8" height="1" fill="#ffffff"></rect><rect x="32" y="10" width="1" height="1" fill="#000000"></rect><rect x="37" y="10" width="2" height="1" fill="#000000"></rect><rect x="39" y="10" width="1" height="1" fill="#ffffff"></rect><rect x="40" y="10" width="2" height="1" fill="#000000"></rect><rect x="50" y="10" width="2" height="1" fill="#000000"></rect><rect x="52" y="10" width="11" height="1" fill="#0e0a8a"></rect><rect x="63" y="10" width="2" height="1" fill="#000000"></rect><rect x="2" y="11" width="10" height="1" fill="#000000"></rect><rect x="15" y="11" width="1" height="1" fill="#000000"></rect><rect x="16" y="11" width="3" height="1" fill="#ffffff"></rect><rect x="19" y="11" width="2" height="1" fill="#000000"></rect><rect x="23" y="11" width="1" height="1" fill="#000000"></rect><rect x="24" y="11" width="8" height="1" fill="#ffffff"></rect><rect x="32" y="11" width="1" height="1" fill="#000000"></rect><rect x="39" y="11" width="1" height="1" fill="#000000"></rect><rect x="50" y="11" width="2" height="1" fill="#000000"></rect><rect x="52" y="11" width="1" height="1" fill="#0e0a8a"></rect><rect x="53" y="11" width="9" height="1" fill="#00ff00"></rect><rect x="62" y="11" width="1" height="1" fill="#0e0a8a"></rect><rect x="63" y="11" width="2" height="1" fill="#000000"></rect><rect x="8" y="12" width="4" height="1" fill="#000000"></rect><rect x="15" y="12" width="1" height="1" fill="#000000"></rect><rect x="16" y="12" width="4" height="1" fill="#ffffff"></rect><rect x="20" y="12" width="1" height="1" fill="#000000"></rect><rect x="23" y="12" width="10" height="1" fill="#000000"></rect><rect x="50" y="12" width="2" height="1" fill="#000000"></rect><rect x="52" y="12" width="11" height="1" fill="#0e0a8a"></rect><rect x="63" y="12" width="2" height="1" fill="#000000"></rect><rect x="10" y="13" width="2" height="1" fill="#000000"></rect><rect x="15" y="13" width="6" height="1" fill="#000000"></rect><rect x="50" y="13" width="2" height="1" fill="#000000"></rect><rect x="52" y="13" width="1" height="1" fill="#0e0a8a"></rect><rect x="53" y="13" width="5" height="1" fill="#00ff00"></rect><rect x="58" y="13" width="1" height="1" fill="#0e0a8a"></rect><rect x="59" y="13" width="2" height="1" fill="#00ff00"></rect><rect x="61" y="13" width="2" height="1" fill="#0e0a8a"></rect><rect x="63" y="13" width="2" height="1" fill="#000000"></rect><rect x="10" y="14" width="2" height="1" fill="#000000"></rect><rect x="13" y="14" width="9" height="1" fill="#000000"></rect><rect x="50" y="14" width="2" height="1" fill="#000000"></rect><rect x="52" y="14" width="11" height="1" fill="#0e0a8a"></rect><rect x="63" y="14" width="2" height="1" fill="#000000"></rect><rect x="10" y="15" width="2" height="1" fill="#000000"></rect><rect x="13" y="15" width="1" height="1" fill="#000000"></rect><rect x="14" y="15" width="7" height="1" fill="#00ff00"></rect><rect x="21" y="15" width="1" height="1" fill="#000000"></rect><rect x="46" y="15" width="1" height="1" fill="#00ff00"></rect><rect x="50" y="15" width="2" height="1" fill="#000000"></rect><rect x="52" y="15" width="1" height="1" fill="#0e0a8a"></rect><rect x="53" y="15" width="9" height="1" fill="#00ff00"></rect><rect x="62" y="15" width="1" height="1" fill="#0e0a8a"></rect><rect x="63" y="15" width="2" height="1" fill="#000000"></rect><rect x="10" y="16" width="2" height="1" fill="#000000"></rect><rect x="13" y="16" width="1" height="1" fill="#000000"></rect><rect x="14" y="16" width="6" height="1" fill="#00ff00"></rect><rect x="20" y="16" width="9" height="1" fill="#000000"></rect><rect x="47" y="16" width="1" height="1" fill="#00ff00"></rect><rect x="50" y="16" width="2" height="1" fill="#000000"></rect><rect x="52" y="16" width="11" height="1" fill="#0e0a8a"></rect><rect x="63" y="16" width="2" height="1" fill="#000000"></rect><rect x="10" y="17" width="2" height="1" fill="#000000"></rect><rect x="13" y="17" width="1" height="1" fill="#000000"></rect><rect x="14" y="17" width="6" height="1" fill="#00ff00"></rect><rect x="20" y="17" width="1" height="1" fill="#000000"></rect><rect x="21" y="17" width="7" height="1" fill="#00ff00"></rect><rect x="28" y="17" width="1" height="1" fill="#000000"></rect><rect x="46" y="17" width="1" height="1" fill="#00ff00"></rect><rect x="50" y="17" width="2" height="1" fill="#000000"></rect><rect x="52" y="17" width="1" height="1" fill="#0e0a8a"></rect><rect x="53" y="17" width="4" height="1" fill="#00ff00"></rect><rect x="57" y="17" width="1" height="1" fill="#0e0a8a"></rect><rect x="58" y="17" width="3" height="1" fill="#00ff00"></rect><rect x="61" y="17" width="2" height="1" fill="#0e0a8a"></rect><rect x="63" y="17" width="2" height="1" fill="#000000"></rect><rect x="5" y="18" width="1" height="1" fill="#00ff00"></rect><rect x="10" y="18" width="2" height="1" fill="#000000"></rect><rect x="13" y="18" width="1" height="1" fill="#000000"></rect><rect x="14" y="18" width="6" height="1" fill="#00ff00"></rect><rect x="20" y="18" width="12" height="1" fill="#000000"></rect><rect x="45" y="18" width="4" height="1" fill="#000000"></rect><rect x="50" y="18" width="2" height="1" fill="#000000"></rect><rect x="52" y="18" width="11" height="1" fill="#0e0a8a"></rect><rect x="63" y="18" width="2" height="1" fill="#000000"></rect><rect x="4" y="19" width="1" height="1" fill="#00ff00"></rect><rect x="6" y="19" width="1" height="1" fill="#00ff00"></rect><rect x="10" y="19" width="2" height="1" fill="#000000"></rect><rect x="13" y="19" width="1" height="1" fill="#000000"></rect><rect x="14" y="19" width="7" height="1" fill="#00ff00"></rect><rect x="21" y="19" width="1" height="1" fill="#000000"></rect><rect x="28" y="19" width="1" height="1" fill="#000000"></rect><rect x="29" y="19" width="2" height="1" fill="#ffffff"></rect><rect x="31" y="19" width="1" height="1" fill="#000000"></rect><rect x="45" y="19" width="1" height="1" fill="#000000"></rect><rect x="46" y="19" width="2" height="1" fill="#ffffff"></rect><rect x="48" y="19" width="4" height="1" fill="#000000"></rect><rect x="52" y="19" width="11" height="1" fill="#0e0a8a"></rect><rect x="63" y="19" width="2" height="1" fill="#000000"></rect><rect x="10" y="20" width="2" height="1" fill="#000000"></rect><rect x="13" y="20" width="1" height="1" fill="#000000"></rect><rect x="14" y="20" width="7" height="1" fill="#00ff00"></rect><rect x="21" y="20" width="1" height="1" fill="#000000"></rect><rect x="28" y="20" width="5" height="1" fill="#000000"></rect><rect x="33" y="20" width="1" height="1" fill="#ffffff"></rect><rect x="34" y="20" width="1" height="1" fill="#000000"></rect><rect x="35" y="20" width="1" height="1" fill="#ffffff"></rect><rect x="36" y="20" width="1" height="1" fill="#000000"></rect><rect x="37" y="20" width="1" height="1" fill="#ffffff"></rect><rect x="38" y="20" width="1" height="1" fill="#000000"></rect><rect x="39" y="20" width="1" height="1" fill="#ffffff"></rect><rect x="40" y="20" width="1" height="1" fill="#000000"></rect><rect x="41" y="20" width="1" height="1" fill="#ffffff"></rect><rect x="45" y="20" width="1" height="1" fill="#000000"></rect><rect x="46" y="20" width="2" height="1" fill="#ffffff"></rect><rect x="48" y="20" width="17" height="1" fill="#000000"></rect><rect x="4" y="21" width="3" height="1" fill="#00ff00"></rect><rect x="10" y="21" width="2" height="1" fill="#000000"></rect><rect x="13" y="21" width="9" height="1" fill="#000000"></rect><rect x="30" y="21" width="10" height="1" fill="#000000"></rect><rect x="40" y="21" width="1" height="1" fill="#00ff00"></rect><rect x="41" y="21" width="1" height="1" fill="#000000"></rect><rect x="45" y="21" width="4" height="1" fill="#000000"></rect><rect x="50" y="21" width="15" height="1" fill="#000000"></rect><rect x="3" y="22" width="5" height="1" fill="#00ff00"></rect><rect x="10" y="22" width="2" height="1" fill="#000000"></rect><rect x="13" y="22" width="51" height="1" fill="#000000"></rect><rect x="4" y="23" width="3" height="1" fill="#00ff00"></rect><rect x="12" y="23" width="9" height="1" fill="#000000"></rect><rect x="21" y="23" width="43" height="1" fill="#ffffff"></rect><rect x="4" y="24" width="3" height="1" fill="#00ff00"></rect><rect x="12" y="24" width="52" height="1" fill="#000000"></rect><rect x="4" y="25" width="3" height="1" fill="#00ff00"></rect><rect x="14" y="25" width="2" height="1" fill="#000000"></rect><rect x="18" y="25" width="3" height="1" fill="#000000"></rect><rect x="24" y="25" width="2" height="1" fill="#000000"></rect><rect x="52" y="25" width="6" height="1" fill="#000000"></rect><rect x="60" y="25" width="2" height="1" fill="#000000"></rect><rect x="3" y="26" width="5" height="1" fill="#000000"></rect><rect x="14" y="26" width="2" height="1" fill="#000000"></rect><rect x="18" y="26" width="3" height="1" fill="#000000"></rect><rect x="24" y="26" width="2" height="1" fill="#000000"></rect><rect x="52" y="26" width="1" height="1" fill="#000000"></rect><rect x="53" y="26" width="4" height="1" fill="#ffffff"></rect><rect x="57" y="26" width="1" height="1" fill="#000000"></rect><rect x="60" y="26" width="2" height="1" fill="#000000"></rect><rect x="3" y="27" width="5" height="1" fill="#000000"></rect><rect x="14" y="27" width="2" height="1" fill="#000000"></rect><rect x="18" y="27" width="3" height="1" fill="#000000"></rect><rect x="24" y="27" width="2" height="1" fill="#000000"></rect><rect x="52" y="27" width="6" height="1" fill="#000000"></rect><rect x="60" y="27" width="2" height="1" fill="#000000"></rect><rect x="3" y="28" width="5" height="1" fill="#000000"></rect><rect x="14" y="28" width="2" height="1" fill="#000000"></rect><rect x="18" y="28" width="3" height="1" fill="#000000"></rect><rect x="24" y="28" width="2" height="1" fill="#000000"></rect><rect x="52" y="28" width="1" height="1" fill="#000000"></rect><rect x="53" y="28" width="4" height="1" fill="#ffffff"></rect><rect x="57" y="28" width="1" height="1" fill="#000000"></rect><rect x="60" y="28" width="2" height="1" fill="#000000"></rect><rect x="3" y="29" width="5" height="1" fill="#000000"></rect><rect x="14" y="29" width="2" height="1" fill="#000000"></rect><rect x="18" y="29" width="3" height="1" fill="#000000"></rect><rect x="24" y="29" width="2" height="1" fill="#000000"></rect><rect x="52" y="29" width="6" height="1" fill="#000000"></rect><rect x="60" y="29" width="2" height="1" fill="#000000"></rect><rect x="3" y="30" width="5" height="1" fill="#000000"></rect><rect x="14" y="30" width="2" height="1" fill="#000000"></rect><rect x="18" y="30" width="5" height="1" fill="#000000"></rect><rect x="24" y="30" width="2" height="1" fill="#000000"></rect><rect x="52" y="30" width="4" height="1" fill="#000000"></rect><rect x="56" y="30" width="1" height="1" fill="#00ff00"></rect><rect x="57" y="30" width="1" height="1" fill="#000000"></rect><rect x="60" y="30" width="2" height="1" fill="#000000"></rect><rect x="0" y="31" width="66" height="1" fill="#000000"></rect></svg>
          </div>

          <div id="how-to" className="step-cards">
            <div className="step-card">
              <div className="sc-num">STEP 01</div>
              <div className="sc-title">Register Free</div>
              <p className="sc-body">
                Sign up at vibekode.in before the deadline. Solo entries only —
                one registration per person. Open to anyone in Kerala.
              </p>
            </div>
            <div className="step-card">
              <div className="sc-num">STEP 02</div>
              <div className="sc-title">Build Your App</div>
              <p className="sc-body">
                On event day, pick a real classroom problem in Kerala and vibe
                code your way to a working web app in 8 hours. Use any AI tool
                you like.
              </p>
            </div>
            <div className="step-card">
              <div className="sc-num">STEP 03</div>
              <div className="sc-title">Submit & Demo</div>
              <p className="sc-body">
                Submit your working URL by 6 PM. Shortlisted builders demo live
                on stage in Kozhikode — winners announced the same evening.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-row">
          <div className="ticker-tag">BUILDING NOW</div>
          <div className="ticker-track">
            {tickerContent}
          </div>
        </div>
      </div>
    </>
  );
}
