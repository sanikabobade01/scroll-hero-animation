import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  { title: "Scroll-scrubbed motion", text: "Every movement of the hero is tied to scroll progress, so the page responds exactly as fast as you do." },
  { title: "Built for performance", text: "Only transform and opacity are animated, which keeps frames smooth on laptops and phones." },
  { title: "Accessible by default", text: "Semantic markup, visible focus states and full support for reduced-motion preferences." },
];

export default function Features() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".reveal", {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: { trigger: root.current, start: "top 70%", toggleActions: "play none none reverse" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-ice px-6 py-24 text-midnight sm:py-32" aria-labelledby="features-title">
      <div className="mx-auto max-w-5xl">
        <h2 id="features-title" className="reveal text-4xl font-light sm:text-6xl">Designed for impact.</h2>
        <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
          Motion should explain the page, not decorate it. This project shows how a single scroll gesture can guide attention from a bold introduction to the content that follows.
        </p>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <li key={f.title} className="reveal rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
