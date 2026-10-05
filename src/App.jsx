import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <main id="main">
        <Hero />
        <Features />
      </main>
      <footer className="bg-midnight py-8 text-center text-sm text-slate-400">
        Built by Sanika Bobade with React, GSAP and Tailwind CSS.
      </footer>
    </>
  );
}
