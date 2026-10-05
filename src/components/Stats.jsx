const STATS = [
  { value: "92%", label: "Customer Satisfaction" },
  { value: "85%", label: "Performance Improvement" },
  { value: "78%", label: "User Engagement" },
];

export default function Stats() {
  return (
    <dl className="stats mx-auto grid w-full max-w-4xl grid-cols-3 gap-3 px-4 text-center sm:gap-8">
      {STATS.map(({ value, label }) => (
        <div key={label} className="stat flex flex-col-reverse border-t border-white/20 pt-3 sm:pt-5">
          <dt className="mt-1 text-[0.7rem] leading-tight text-slate-300 sm:mt-2 sm:text-base">{label}</dt>
          <dd className="m-0 text-2xl font-light tabular-nums sm:text-5xl lg:text-6xl">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
