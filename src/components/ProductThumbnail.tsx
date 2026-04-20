interface ProductThumbnailProps {
  hue: number;
  name: string;
  size?: "sm" | "lg";
}

export default function ProductThumbnail({
  hue,
  name,
  size = "sm",
}: ProductThumbnailProps) {
  const h = hue;
  const cx = 200;
  const cy = size === "lg" ? 170 : 140;
  const viewH = size === "lg" ? 320 : 280;

  // Compute 6 backward-curved impeller blade paths
  const blades = Array.from({ length: 6 }, (_, i) => {
    const baseAngle = (i * 60) * (Math.PI / 180);
    const startAngle = baseAngle - 0.2;
    const endAngle = baseAngle + 0.25;
    return {
      x1: cx + Math.cos(startAngle) * 22,
      y1: cy + Math.sin(startAngle) * 22,
      x2: cx + Math.cos(endAngle) * 70,
      y2: cy + Math.sin(endAngle) * 70,
    };
  });

  return (
    <svg
      viewBox={`0 0 400 ${viewH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Engineering schematic for ${name}`}
      role="img"
      className="w-full h-full"
    >
      {/* Background */}
      <rect width="400" height={viewH} fill={`hsl(${h} 38% 96%)`} />

      {/* Blueprint grid lines */}
      {Array.from({ length: Math.ceil(viewH / 20) + 1 }, (_, i) => (
        <line
          key={`h${i}`}
          x1="0"
          y1={i * 20}
          x2="400"
          y2={i * 20}
          stroke={`hsl(${h} 28% 91%)`}
          strokeWidth="0.6"
        />
      ))}
      {Array.from({ length: 21 }, (_, i) => (
        <line
          key={`v${i}`}
          x1={i * 20}
          y1="0"
          x2={i * 20}
          y2={viewH}
          stroke={`hsl(${h} 28% 91%)`}
          strokeWidth="0.6"
        />
      ))}

      {/* Inlet pipe — left */}
      <rect
        x="0"
        y={cy - 18}
        width={cx - 80}
        height="36"
        fill={`hsl(${h} 40% 93%)`}
        stroke={`hsl(${h} 40% 80%)`}
        strokeWidth="1"
      />

      {/* Outlet pipe — top */}
      <rect
        x={cx - 18}
        y="0"
        width="36"
        height={cy - 80}
        fill={`hsl(${h} 40% 93%)`}
        stroke={`hsl(${h} 40% 80%)`}
        strokeWidth="1"
      />

      {/* Outer casing */}
      <circle
        cx={cx}
        cy={cy}
        r="92"
        fill={`hsl(${h} 36% 94%)`}
        stroke={`hsl(${h} 52% 66%)`}
        strokeWidth="2"
      />

      {/* Inner ring */}
      <circle
        cx={cx}
        cy={cy}
        r="74"
        fill={`hsl(${h} 30% 97%)`}
        stroke={`hsl(${h} 44% 75%)`}
        strokeWidth="1.25"
      />

      {/* Impeller blades */}
      {blades.map((b, i) => (
        <line
          key={i}
          x1={b.x1}
          y1={b.y1}
          x2={b.x2}
          y2={b.y2}
          stroke={`hsl(${h} 55% 56%)`}
          strokeWidth="2.25"
          strokeLinecap="round"
        />
      ))}

      {/* Hub */}
      <circle
        cx={cx}
        cy={cy}
        r="20"
        fill={`hsl(${h} 48% 88%)`}
        stroke={`hsl(${h} 52% 66%)`}
        strokeWidth="1.5"
      />
      <circle cx={cx} cy={cy} r="7" fill={`hsl(${h} 62% 58%)`} />

      {/* Dimension line — horizontal */}
      <line
        x1={cx - 92}
        y1={cy + 114}
        x2={cx + 92}
        y2={cy + 114}
        stroke={`hsl(${h} 40% 76%)`}
        strokeWidth="0.75"
        strokeDasharray="4 2"
      />
      <line x1={cx - 92} y1={cy + 110} x2={cx - 92} y2={cy + 118} stroke={`hsl(${h} 40% 76%)`} strokeWidth="0.75" />
      <line x1={cx + 92} y1={cy + 110} x2={cx + 92} y2={cy + 118} stroke={`hsl(${h} 40% 76%)`} strokeWidth="0.75" />
      <text
        x={cx}
        y={cy + 126}
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="7.5"
        fill={`hsl(${h} 50% 52%)`}
      >
        Ø 184 mm
      </text>

      {/* Specs tag */}
      {size === "lg" && (
        <>
          <rect x="298" y="32" width="88" height="76" rx="4" fill="white" fillOpacity="0.88" stroke={`hsl(${h} 35% 84%)`} strokeWidth="1" />
          <text x="308" y="50" fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill={`hsl(${h} 45% 48%)`} letterSpacing="0.5">SPECIFICATIONS</text>
          <text x="308" y="65" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" fill={`hsl(${h} 35% 38%)`}>Q  450 m³/h</text>
          <text x="308" y="79" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" fill={`hsl(${h} 35% 38%)`}>H  65 m</text>
          <text x="308" y="93" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" fill={`hsl(${h} 35% 38%)`}>P  7.5 kW</text>
        </>
      )}

      {/* Frame border */}
      <rect x="1" y="1" width="398" height={viewH - 2} stroke={`hsl(${h} 36% 84%)`} strokeWidth="1" fill="none" />
    </svg>
  );
}
