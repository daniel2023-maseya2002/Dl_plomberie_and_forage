export default function JourneyIllustration({ stageId }) {
  // Common SVG props
  const svgProps = {
    viewBox: "0 0 400 300",
    className: "w-full h-full max-h-[400px] object-contain",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

  const stroke = "#0A1F44"; // navy-900
  const accent = "#1B9AD6"; // water-500
  const ground = "#F4F7FA"; // mist-50

  switch (stageId) {
    case 'etude':
      return (
        <svg {...svgProps}>
          <rect x="0" y="150" width="400" height="150" fill={ground} />
          <line x1="0" y1="150" x2="400" y2="150" stroke={stroke} strokeWidth="2" />
          {/* Survey markers */}
          <polygon points="100,150 110,120 120,150" fill="none" stroke={accent} strokeWidth="2" />
          <circle cx="110" cy="115" r="5" fill={accent} />
          <line x1="110" y1="150" x2="110" y2="110" stroke={accent} strokeWidth="2" strokeDasharray="4 4" />
          <polygon points="250,150 260,120 270,150" fill="none" stroke={accent} strokeWidth="2" />
          <circle cx="260" cy="115" r="5" fill={accent} />
          <line x1="260" y1="150" x2="260" y2="110" stroke={accent} strokeWidth="2" strokeDasharray="4 4" />
          {/* Ground layers */}
          <path d="M0 200 Q 200 180 400 220" stroke={stroke} strokeWidth="1" strokeDasharray="2 4" />
          <path d="M0 250 Q 200 230 400 270" stroke={stroke} strokeWidth="1" strokeDasharray="2 4" />
        </svg>
      );
    case 'forage':
      return (
        <svg {...svgProps}>
          <rect x="0" y="150" width="400" height="150" fill={ground} />
          <line x1="0" y1="150" x2="400" y2="150" stroke={stroke} strokeWidth="2" />
          {/* Drill rig */}
          <rect x="150" y="80" width="20" height="70" fill="none" stroke={stroke} strokeWidth="2" />
          <rect x="230" y="80" width="20" height="70" fill="none" stroke={stroke} strokeWidth="2" />
          <line x1="160" y1="80" x2="240" y2="80" stroke={stroke} strokeWidth="2" />
          <line x1="160" y1="80" x2="160" y2="40" stroke={stroke} strokeWidth="2" />
          {/* Borehole */}
          <line x1="200" y1="80" x2="200" y2="260" stroke={accent} strokeWidth="4" />
          <rect x="190" y="150" width="20" height="110" fill="rgba(27, 154, 214, 0.1)" />
          {/* Ground layers */}
          <path d="M0 200 Q 200 180 400 220" stroke={stroke} strokeWidth="1" />
          <path d="M0 250 Q 200 230 400 270" stroke={stroke} strokeWidth="1" />
        </svg>
      );
    case 'installation':
      return (
        <svg {...svgProps}>
          <rect x="0" y="150" width="400" height="150" fill={ground} />
          <line x1="0" y1="150" x2="400" y2="150" stroke={stroke} strokeWidth="2" />
          {/* Pump above ground */}
          <rect x="180" y="100" width="40" height="50" fill="none" stroke={stroke} strokeWidth="2" />
          <circle cx="200" cy="115" r="10" fill={accent} />
          {/* Pipes */}
          <line x1="200" y1="150" x2="200" y2="260" stroke={stroke} strokeWidth="4" />
          <rect x="190" y="150" width="20" height="110" fill="rgba(10, 31, 68, 0.05)" />
          <path d="M200 150 L200 140 L250 140 L250 110" stroke={accent} strokeWidth="3" fill="none" />
          {/* Ground layers */}
          <path d="M0 200 Q 200 180 400 220" stroke={stroke} strokeWidth="1" />
        </svg>
      );
    case 'pompage':
      return (
        <svg {...svgProps}>
          <rect x="0" y="150" width="400" height="150" fill={ground} />
          <line x1="0" y1="150" x2="400" y2="150" stroke={stroke} strokeWidth="2" />
          {/* Pump above ground */}
          <rect x="180" y="100" width="40" height="50" fill="none" stroke={stroke} strokeWidth="2" />
          <circle cx="200" cy="115" r="10" fill={accent} />
          {/* Water flow */}
          <line x1="200" y1="150" x2="200" y2="260" stroke={stroke} strokeWidth="4" />
          <rect x="190" y="150" width="20" height="110" fill="rgba(27, 154, 214, 0.4)" />
          {/* Arrows going up */}
          <path d="M195 230 L200 240 L205 230" fill={accent} />
          <path d="M195 200 L200 210 L205 200" fill={accent} />
          <path d="M195 170 L200 180 L205 170" fill={accent} />
          {/* Output pipe */}
          <path d="M200 150 L200 140 L250 140 L250 110" stroke={accent} strokeWidth="3" fill="none" />
        </svg>
      );
    case 'distribution':
      return (
        <svg {...svgProps}>
          <rect x="0" y="150" width="400" height="150" fill={ground} />
          <line x1="0" y1="150" x2="400" y2="150" stroke={stroke} strokeWidth="2" />
          {/* Pump */}
          <rect x="100" y="100" width="40" height="50" fill="none" stroke={stroke} strokeWidth="2" />
          <circle cx="120" cy="115" r="10" fill={accent} />
          <line x1="120" y1="150" x2="120" y2="260" stroke={stroke} strokeWidth="4" />
          {/* Storage Tank */}
          <rect x="280" y="60" width="60" height="80" fill="none" stroke={stroke} strokeWidth="2" />
          <rect x="280" y="100" width="60" height="40" fill="rgba(27, 154, 214, 0.2)" />
          {/* Distribution Pipe */}
          <path d="M120 110 L240 110 L240 100 L280 100" stroke={accent} strokeWidth="3" fill="none" />
          {/* Building outline */}
          <rect x="300" y="180" width="80" height="60" fill="none" stroke={stroke} strokeWidth="2" />
          <path d="M340 180 L340 140 L340 100" stroke={accent} strokeWidth="3" fill="none" strokeDasharray="4 2" />
        </svg>
      );
    default:
      return null;
  }
}