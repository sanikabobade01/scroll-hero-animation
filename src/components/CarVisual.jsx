// A hand-drawn SVG sports car (original artwork, no copyrighted assets).
// The wheels have the class "wheel" so GSAP can spin them while scrolling.
function Wheel({ cx, cy }) {
  return (
    <g className="wheel">
      <circle cx={cx} cy={cy} r="46" fill="#05070d" />
      <circle cx={cx} cy={cy} r="32" fill="url(#rim)" />
      {[0, 60, 120].map((angle) => (
        <rect key={angle} x={cx - 2.5} y={cy - 32} width="5" height="64" rx="2.5" fill="#0a1020"
          transform={`rotate(${angle} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r="7" fill="#e8edf4" />
    </g>
  );
}

export default function CarVisual() {
  return (
    <svg viewBox="0 0 800 300" role="img" aria-label="Illustration of a sleek blue sports car" className="block h-auto w-full">
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fa2ff" />
          <stop offset="0.45" stopColor="#3b6cff" />
          <stop offset="1" stopColor="#14246b" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f1a38" />
          <stop offset="1" stopColor="#2a3f7a" />
        </linearGradient>
        <radialGradient id="rim" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#d5dcec" />
          <stop offset="1" stopColor="#7b869e" />
        </radialGradient>
        <radialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000" stopOpacity="0.6" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="400" cy="272" rx="360" ry="16" fill="url(#shadow)" />

      {/* Body */}
      <path fill="url(#body)"
        d="M40 210 C40 190 70 182 130 174 L250 118 C292 96 340 88 420 88 C500 88 545 106 595 140 L700 158 C750 166 765 186 765 210 L765 232 L40 232 Z" />
      {/* Shoulder highlight */}
      <path fill="none" stroke="#bcd0ff" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round"
        d="M135 176 C260 150 520 140 700 160" />
      {/* Windows */}
      <path fill="url(#glass)" d="M268 126 C300 110 340 102 395 102 L395 152 L226 152 Z" />
      <path fill="url(#glass)" d="M412 102 C470 103 520 120 566 152 L412 152 Z" />
      {/* Lights */}
      <path fill="#ffb347" d="M728 176 L762 186 L762 198 L722 192 Z" />
      <path fill="#ff5a5a" d="M40 196 L66 190 L66 204 L40 208 Z" />
      {/* Door line and lower trim */}
      <path fill="none" stroke="#0a1020" strokeOpacity="0.5" strokeWidth="2" d="M412 152 L412 224" />
      <rect x="40" y="222" width="725" height="10" fill="#0a1020" opacity="0.55" />

      {/* Wheel arches then wheels */}
      <circle cx="190" cy="228" r="56" fill="#05070d" />
      <circle cx="620" cy="228" r="56" fill="#05070d" />
      <Wheel cx={190} cy={228} />
      <Wheel cx={620} cy={228} />
    </svg>
  );
}
