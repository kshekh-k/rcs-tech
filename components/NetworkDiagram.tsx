"use client";

export default function NetworkDiagram() {
  return (
    <div className="relative w-full max-w-[760px] aspect-square">
      <svg
        viewBox="0 0 900 900"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ========================= */}
          {/* Background Gradient */}
          {/* ========================= */}

          <radialGradient id="bgGlow">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>

          {/* ========================= */}
          {/* Globe Gradient */}
          {/* ========================= */}

          <radialGradient id="globeFill">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="60%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </radialGradient>

          {/* ========================= */}
          {/* Ring Stroke */}
          {/* ========================= */}

          <linearGradient id="ringStroke">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* ========================= */}
          {/* Glow Filter */}
          {/* ========================= */}

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ========================= */}
          {/* Soft Glow */}
          {/* ========================= */}

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* ======================================== */}
        {/* Background Glow */}
        {/* ======================================== */}

        <circle cx="450" cy="450" r="360" fill="url(#bgGlow)" />

        {/* ======================================== */}
        {/* Dotted World Background */}
        {/* ======================================== */}

        <g opacity="0.14" fill="#93c5fd">
          {Array.from({ length: 320 }).map((_, i) => {
            const x = (i % 20) * 40 + 70 + (i % 2 === 0 ? 10 : -10);

            const y = Math.floor(i / 20) * 40 + 90;

            return <circle key={i} cx={x} cy={y} r="2" />;
          })}
        </g>

        {/* ======================================== */}
        {/* Decorative Rings */}
        {/* ======================================== */}

        <circle
          cx="450"
          cy="450"
          r="280"
          fill="none"
          stroke="rgba(96,165,250,.12)"
          strokeWidth="1"
        />

        <circle
          cx="450"
          cy="450"
          r="230"
          fill="none"
          stroke="rgba(96,165,250,.08)"
          strokeWidth="1"
        />

        <circle
          cx="450"
          cy="450"
          r="180"
          fill="none"
          stroke="rgba(96,165,250,.08)"
          strokeWidth="1"
        />

        {/* ======================================== */}
        {/* Main Globe */}
        {/* ======================================== */}

        <g filter="url(#glow)">
          <circle cx="450" cy="450" r="140" fill="url(#globeFill)" />

          {/* Outer Ring */}

          <circle
            cx="450"
            cy="450"
            r="150"
            fill="none"
            stroke="url(#ringStroke)"
            strokeWidth="3"
          />
        </g>

        {/* ======================================== */}
        {/* Latitude */}
        {/* ======================================== */}

        {[0, 1, 2, 3, 4].map((i) => {
          const r = 110 - i * 20;

          return (
            <ellipse
              key={i}
              cx="450"
              cy="450"
              rx="140"
              ry={r}
              fill="none"
              stroke="#dbeafe"
              strokeOpacity=".18"
            />
          );
        })}

        {/* ======================================== */}
        {/* Longitude */}
        {/* ======================================== */}

        {[0, 1, 2, 3, 4].map((i) => {
          const rx = 40 + i * 22;

          return (
            <ellipse
              key={i}
              cx="450"
              cy="450"
              rx={rx}
              ry="140"
              fill="none"
              stroke="#dbeafe"
              strokeOpacity=".18"
            />
          );
        })}

        {/* ======================================== */}
        {/* Premium Network Connections */}
        {/* ======================================== */}

        <g stroke="#60A5FA" strokeWidth="2" opacity="0.45">
          <line x1="450" y1="300" x2="220" y2="190" />
          <line x1="560" y1="350" x2="720" y2="240" />
          <line x1="575" y1="530" x2="720" y2="660" />
          <line x1="350" y1="550" x2="190" y2="690" />
          <line x1="305" y1="450" x2="120" y2="450" />
          <line x1="595" y1="450" x2="790" y2="450" />
        </g>

        {/* ======================================== */}
        {/* Connection Glow */}
        {/* ======================================== */}

        <g filter="url(#softGlow)">
          <line
            x1="450"
            y1="300"
            x2="220"
            y2="190"
            stroke="#38BDF8"
            strokeOpacity=".35"
            strokeWidth="6"
          />

          <line
            x1="560"
            y1="350"
            x2="720"
            y2="240"
            stroke="#38BDF8"
            strokeOpacity=".35"
            strokeWidth="6"
          />

          <line
            x1="575"
            y1="530"
            x2="720"
            y2="660"
            stroke="#38BDF8"
            strokeOpacity=".35"
            strokeWidth="6"
          />

          <line
            x1="350"
            y1="550"
            x2="190"
            y2="690"
            stroke="#38BDF8"
            strokeOpacity=".35"
            strokeWidth="6"
          />
        </g>

        {/* ======================================== */}
        {/* Network Nodes */}
        {/* ======================================== */}

        <g>
          {[
            [220, 190],
            [720, 240],
            [720, 660],
            [190, 690],
            [120, 450],
            [790, 450],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="12" fill="#2563EB" filter="url(#glow)" />

              <circle cx={x} cy={y} r="6" fill="#E0F2FE" />
            </g>
          ))}
        </g>

        {/* ======================================== */}
        {/* Pulse Animation */}
        {/* ======================================== */}

        <g>
          {[220, 190, 720, 240, 720, 660, 190, 690].map((_, i) => {
            const coords = [
              [220, 190],
              [720, 240],
              [720, 660],
              [190, 690],
            ][i];

            if (!coords) return null;

            return (
              <circle
                key={i}
                cx={coords[0]}
                cy={coords[1]}
                r="18"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                opacity=".6"
              >
                <animate
                  attributeName="r"
                  values="18;34;18"
                  dur="2.5s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="opacity"
                  values=".7;0;.7"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>

        {/* ======================================== */}
        {/* Globe Highlight */}
        {/* ======================================== */}

        <ellipse
          cx="410"
          cy="390"
          rx="42"
          ry="18"
          fill="#FFFFFF"
          opacity=".15"
        />

        {/* ======================================== */}
        {/* Inner Glow */}
        {/* ======================================== */}

        <circle cx="450" cy="450" r="95" fill="#60A5FA" opacity=".12" />

        {/* ======================================== */}
        {/* Floating Particles */}
        {/* ======================================== */}

        <g fill="#93C5FD" opacity=".7">
          {Array.from({ length: 40 }).map((_, i) => {
            const x = 100 + ((i * 19) % 700);
            const y = 100 + ((i * 43) % 700);

            return <circle key={i} cx={x} cy={y} r={Math.random() * 2 + 1} />;
          })}
        </g>

        {/* ======================================== */}
        {/* Service Nodes */}
        {/* ======================================== */}

        <g fontFamily="Inter, sans-serif">
          {/* Cybersecurity */}
          <g transform="translate(150 145)">
            <rect
              width="150"
              height="54"
              rx="16"
              fill="#0F172ACC"
              stroke="#3B82F6"
            />
            <text x="18" y="34" fontSize="22">
              🛡
            </text>
            <text x="52" y="34" fill="#FFF" fontSize="15" fontWeight="600">
              Cybersecurity
            </text>
          </g>

          {/* Network */}
          <g transform="translate(650 185)">
            <rect
              width="145"
              height="54"
              rx="16"
              fill="#0F172ACC"
              stroke="#3B82F6"
            />
            <text x="18" y="34" fontSize="22">
              🌐
            </text>
            <text x="50" y="34" fill="#FFF" fontSize="15" fontWeight="600">
              Network
            </text>
          </g>

          {/* Cloud */}
          <g transform="translate(665 640)">
            <rect
              width="165"
              height="54"
              rx="16"
              fill="#0F172ACC"
              stroke="#3B82F6"
            />
            <text x="18" y="34" fontSize="22">
              ☁
            </text>
            <text x="48" y="34" fill="#FFF" fontSize="15" fontWeight="600">
              Server & Cloud
            </text>
          </g>

          {/* Hardware */}
          <g transform="translate(95 660)">
            <rect
              width="155"
              height="54"
              rx="16"
              fill="#0F172ACC"
              stroke="#3B82F6"
            />
            <text x="18" y="34" fontSize="22">
              🖥
            </text>
            <text x="50" y="34" fill="#FFF" fontSize="15" fontWeight="600">
              Hardware
            </text>
          </g>

          {/* Web */}
          <g transform="translate(70 425)">
            <rect
              width="170"
              height="54"
              rx="16"
              fill="#0F172ACC"
              stroke="#3B82F6"
            />
            <text x="18" y="34" fontSize="22">
              💻
            </text>
            <text x="48" y="34" fill="#FFF" fontSize="15" fontWeight="600">
              Web & App Dev
            </text>
          </g>

          {/* SaaS */}
          <g transform="translate(670 425)">
            <rect
              width="145"
              height="54"
              rx="16"
              fill="#0F172ACC"
              stroke="#3B82F6"
            />
            <text x="18" y="34" fontSize="22">
              📦
            </text>
            <text x="50" y="34" fill="#FFF" fontSize="15" fontWeight="600">
              SaaS
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
