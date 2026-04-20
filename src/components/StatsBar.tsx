const stats = [
  { value: "2,400+", label: "Products Listed" },
  { value: "180+", label: "Manufacturers" },
  { value: "32", label: "Categories" },
  { value: "12k+", label: "Engineers Monthly" },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-line">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1 py-2">
          <span className="text-2xl md:text-3xl font-bold text-ink tracking-tight font-display">
            {stat.value}
          </span>
          <span className="text-xs font-medium text-muted uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
