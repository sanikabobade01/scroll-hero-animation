import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarVisual from "./CarVisual.jsx";
import Stats from "./Stats.jsx";

gsap.registerPlugin(ScrollTrigger);

const WORDS = ["WELCOME", "ITZ", "FIZZ"];

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    // gsap.context scopes selectors to this component and lets us clean up everything at once.
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 768px)",
        },
        (context) => {
          const { motion, desktop } = context.conditions;
          if (!motion) return; // reduced motion: static, fully visible page

          /* 1) INTRO (time based, plays once on load) */
          const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
          intro
            .from(".char", { opacity: 0, y: 30, duration: 0.9, stagger: 0.05 })
            .from(".car-intro", { opacity: 0, y: 60, scale: 0.92, duration: 1.2 }, 0.3)
            .from(".stat", { opacity: 0, y: 24, duration: 0.8, stagger: 0.25 }, "-=0.6");

          /* 2) SCROLL (progress based): scrub ties the timeline to the scrollbar.
                Timeline length is 1, so positions below are "percent of scroll". */
          const scroll = gsap.timeline({
            defaults: { ease: "none" },
              scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=160%", // hero stays pinned for 1.6 screens of scrolling
              pin: true,
              scrub: 1, // 1s of smoothing so the motion feels fluid
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          scroll
            // Phase 1 (0 → 0.6): car drives right, grows and tilts, wheels spin
            .to(".car-scroll", { xPercent: desktop ? 28 : 0, yPercent: desktop ? -6 : 8, scale: desktop ? 1.35 : 1.25, rotation: -4, ease: "power1.inOut", duration: 0.6 }, 0)
            .to(".wheel", { rotation: 900, transformOrigin: "50% 50%", duration: 1 }, 0)
            .to(".hero-title", { y: -60, scale: 0.94, opacity: 0.25, duration: 0.6 }, 0)
            .to(".hero-glow", { scale: 1.7, opacity: 0.9, duration: 0.6 }, 0)
            .to(".stats", { y: 40, opacity: 0.4, duration: 0.6 }, 0)
            // Phase 2 (0.6 → 1): car exits to the right and the hero fades out
            .to(".car-scroll", { xPercent: desktop ? 150 : 140, rotation: -8, ease: "power2.in", duration: 0.4 }, 0.6)
            .to(".hero-title, .stats, .hero-glow", { opacity: 0, duration: 0.4 }, 0.6);
        }
      );
    }, root);

    return () => ctx.revert(); // kills tweens + ScrollTriggers on unmount
  }, []);

  return (
    <section ref={root} className="hero relative h-screen min-h-[620px] overflow-hidden bg-midnight" aria-labelledby="hero-title">
      <div className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt/30 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col justify-between py-8 sm:py-12">
        <h1 id="hero-title" aria-label="Welcome Itz Fizz" className="hero-title flex flex-wrap justify-center gap-x-[0.6em] px-4 pt-6 text-center text-[clamp(1.6rem,6vw,5rem)] font-light leading-tight sm:pt-10">
          {WORDS.map((word) => (
            <span key={word} aria-hidden="true" className="inline-flex tracking-[0.18em] sm:tracking-[0.3em]">
              {word.split("").map((ch, i) => (
                <span key={i} className="char inline-block">{ch}</span>
              ))}
            </span>
          ))}
        </h1>

        <div className="car-intro mx-auto w-[94%] max-w-5xl md:w-[80%]">
          <div className="car-scroll">
            <CarVisual />
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}
