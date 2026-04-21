const props = [
  {
    id: "advanced-sourcing",
    title: "Advanced Sourcing",
    description: "Discover premium suppliers with precision search tools.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" aria-hidden="true">
        <circle cx="26" cy="26" r="14" stroke="#1557C8" strokeWidth="2.5" />
        <path d="M36 36l10 10" stroke="#1557C8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="26" cy="26" r="7" stroke="#1557C8" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M20 26h12M26 20v12" stroke="#1557C8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="44" cy="20" r="6" stroke="#1557C8" strokeWidth="1.5" />
        <path d="M41 20h6M44 17v6" stroke="#1557C8" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "verified-data",
    title: "Verified Data",
    description: "Access trusted technical data and specifications.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" aria-hidden="true">
        <path
          d="M32 8l20 8v16c0 12-8 20-20 24C12 52 4 44 4 32V16L32 8z"
          stroke="#1557C8"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M22 32l6 6 14-14"
          stroke="#1557C8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "expert-network",
    title: "Expert Network",
    description: "Connect with certified engineering professionals.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" aria-hidden="true">
        <circle cx="32" cy="22" r="6" stroke="#1557C8" strokeWidth="2" />
        <circle cx="12" cy="44" r="5" stroke="#1557C8" strokeWidth="1.8" />
        <circle cx="52" cy="44" r="5" stroke="#1557C8" strokeWidth="1.8" />
        <circle cx="32" cy="50" r="5" stroke="#1557C8" strokeWidth="1.8" />
        <path d="M32 28v8M32 36l-14 8M32 36l14 8" stroke="#1557C8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 43l-5-5M47 43l5-5" stroke="#1557C8" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12">
          {props.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center gap-5">
              <div className="text-accent">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
