const services = [
  {
    id: "engineering-tools",
    title: "Engineering Tools",
    description: "Access calculators & libraries.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#1557C8" strokeWidth="2" />
        <path d="M6 18h36" stroke="#1557C8" strokeWidth="1.5" />
        <rect x="12" y="24" width="8" height="6" rx="1" stroke="#1557C8" strokeWidth="1.2" />
        <rect x="24" y="24" width="8" height="6" rx="1" stroke="#1557C8" strokeWidth="1.2" />
        <path d="M12 30h8M24 30h8" stroke="#1557C8" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M16 14h16" stroke="#1557C8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "engineering-jobs",
    title: "Engineering Jobs",
    description: "Career opportunities in OEM/Manufacturing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
        <rect x="6" y="18" width="36" height="22" rx="3" stroke="#1557C8" strokeWidth="2" />
        <path
          d="M16 18v-4a4 4 0 014-4h8a4 4 0 014 4v4"
          stroke="#1557C8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M6 28h36" stroke="#1557C8" strokeWidth="1.5" />
        <circle cx="24" cy="28" r="3" stroke="#1557C8" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "engineering-knowledge",
    title: "Engineering Knowledge",
    description: "Deep technical content & research. Join our expert content ecosystem.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
        <path
          d="M8 40V12a2 2 0 012-2h18l12 12v18a2 2 0 01-2 2H10a2 2 0 01-2-2z"
          stroke="#1557C8"
          strokeWidth="2"
        />
        <path d="M28 10v12h12" stroke="#1557C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 26h20M14 32h14" stroke="#1557C8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function EngineeringServices() {
  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 divide-x divide-slate-100">
          {services.map((item, i) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center px-10 gap-4 ${i > 0 ? "md:border-l md:border-slate-100" : ""}`}
            >
              <div className="text-accent">{item.icon}</div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
