export type IconItem = {
  id: number;
  name: string;
  svg: string;
  tags: string[];
};

export const iconsData: IconItem[] = [
  {
    id: 1,
    name: "umbrella",
    tags: ["rain", "ubrella"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" style="background: linear-gradient(to bottom, #0f172a, #1e293b); overflow: hidden;">
  <defs>
    <!-- Umbrella Canopy Gradient -->
    <linearGradient id="umbrellaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fb7185" />
      <stop offset="100%" stop-color="#be123c" />
    </linearGradient>

    <!-- Background Glow -->
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
    </radialGradient>

    <!-- Rain Pattern 1 (Background: slower, denser, darker) -->
    <pattern id="rain1" width="25" height="35" patternUnits="userSpaceOnUse">
      <line x1="5" y1="0" x2="5" y2="8" stroke="#7dd3fc" stroke-width="0.5" opacity="0.4" stroke-linecap="round"/>
      <line x1="18" y1="15" x2="18" y2="21" stroke="#7dd3fc" stroke-width="0.4" opacity="0.3" stroke-linecap="round"/>
      <line x1="12" y1="25" x2="12" y2="33" stroke="#7dd3fc" stroke-width="0.6" opacity="0.5" stroke-linecap="round"/>
    </pattern>

    <!-- Rain Pattern 2 (Foreground: faster, sparser, brighter) -->
    <pattern id="rain2" width="40" height="50" patternUnits="userSpaceOnUse">
      <line x1="10" y1="5" x2="10" y2="18" stroke="#e0f2fe" stroke-width="0.8" opacity="0.6" stroke-linecap="round"/>
      <line x1="30" y1="30" x2="30" y2="45" stroke="#e0f2fe" stroke-width="0.7" opacity="0.5" stroke-linecap="round"/>
    </pattern>
    
    <!-- Shared Animation Settings to ensure perfect sync -->
    <!-- keyTimes: closed, closed, open, open, closed, closed -->
    <g id="animConfig">
      <animate id="masterTime" attributeName="opacity" values="1" dur="6s" repeatCount="indefinite" />
    </g>
  </defs>

  <!-- Atmospheric Glow behind Umbrella -->
  <circle cx="50" cy="50" r="45" fill="url(#glow)" />

  <!-- Rain Layer 1 (Background) -->
  <g transform="rotate(10 50 50)">
    <rect x="-50" y="-50" width="200" height="200" fill="url(#rain1)">
      <animateTransform attributeName="transform" type="translate" from="0 0" to="0 35" dur="0.4s" repeatCount="indefinite" />
    </rect>
  </g>

  <!-- The Umbrella Group with bounce animation -->
  <g>
    <!-- Bounce Effect (Moves up slightly when opening, settles down when closing) -->
    <animateTransform 
      attributeName="transform" 
      type="translate" 
      values="0 2; 0 2; 0 -1; 0 -1; 0 2; 0 2" 
      keyTimes="0; 0.2; 0.3; 0.7; 0.8; 1" 
      keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" 
      calcMode="spline" 
      dur="6s" 
      repeatCount="indefinite" 
    />

    <!-- Top Ferrule (Pointy tip) -->
    <line x1="50" y1="12" x2="50" y2="20" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />

    <!-- Main Shaft -->
    <line x1="50" y1="20" x2="50" y2="85" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />

    <!-- Handle (Curved Wooden hook) -->
    <path d="M 50,85 L 50,90 C 50,96 42,96 42,90 L 42,88" fill="none" stroke="#d97706" stroke-width="3" stroke-linecap="round" />

    <!-- Sliding Runner Mechanism -->
    <rect x="48" y="78" width="4" height="6" rx="1" fill="#cbd5e1">
      <animate 
        attributeName="y" 
        values="78; 78; 58; 58; 78; 78" 
        keyTimes="0; 0.2; 0.3; 0.7; 0.8; 1" 
        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" 
        calcMode="spline" 
        dur="6s" 
        repeatCount="indefinite" 
      />
    </rect>

    <!-- Left Rib -->
    <path fill="none" stroke="#9f1239" stroke-width="1.2">
      <animate 
        attributeName="d" 
        values="
          M 45,80 Q 48,50 50,20; 
          M 45,80 Q 48,50 50,20; 
          M 30,60 Q 40,40 50,20; 
          M 30,60 Q 40,40 50,20; 
          M 45,80 Q 48,50 50,20; 
          M 45,80 Q 48,50 50,20" 
        keyTimes="0; 0.2; 0.3; 0.7; 0.8; 1" 
        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" 
        calcMode="spline" 
        dur="6s" 
        repeatCount="indefinite" 
      />
    </path>

    <!-- Center Rib -->
    <path fill="none" stroke="#9f1239" stroke-width="1.2">
      <animate 
        attributeName="d" 
        values="
          M 50,80 Q 50,50 50,20; 
          M 50,80 Q 50,50 50,20; 
          M 50,60 Q 50,40 50,20; 
          M 50,60 Q 50,40 50,20; 
          M 50,80 Q 50,50 50,20; 
          M 50,80 Q 50,50 50,20" 
        keyTimes="0; 0.2; 0.3; 0.7; 0.8; 1" 
        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" 
        calcMode="spline" 
        dur="6s" 
        repeatCount="indefinite" 
      />
    </path>

    <!-- Right Rib -->
    <path fill="none" stroke="#9f1239" stroke-width="1.2">
      <animate 
        attributeName="d" 
        values="
          M 55,80 Q 52,50 50,20; 
          M 55,80 Q 52,50 50,20; 
          M 70,60 Q 60,40 50,20; 
          M 70,60 Q 60,40 50,20; 
          M 55,80 Q 52,50 50,20; 
          M 55,80 Q 52,50 50,20" 
        keyTimes="0; 0.2; 0.3; 0.7; 0.8; 1" 
        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" 
        calcMode="spline" 
        dur="6s" 
        repeatCount="indefinite" 
      />
    </path>

    <!-- Main Morphing Canopy -->
    <path fill="url(#umbrellaGrad)">
      <animate 
        attributeName="d" 
        values="
          M 50,20 C 49,35 43,65 40,80 Q 42.5,82 45,80 Q 47.5,82 50,80 Q 52.5,82 55,80 Q 57.5,82 60,80 C 57,65 51,35 50,20 Z; 
          M 50,20 C 49,35 43,65 40,80 Q 42.5,82 45,80 Q 47.5,82 50,80 Q 52.5,82 55,80 Q 57.5,82 60,80 C 57,65 51,35 50,20 Z; 
          M 50,20 C 30,20 10,40 10,60 Q 20,55 30,60 Q 40,55 50,60 Q 60,55 70,60 Q 80,55 90,60 C 90,40 70,20 50,20 Z; 
          M 50,20 C 30,20 10,40 10,60 Q 20,55 30,60 Q 40,55 50,60 Q 60,55 70,60 Q 80,55 90,60 C 90,40 70,20 50,20 Z; 
          M 50,20 C 49,35 43,65 40,80 Q 42.5,82 45,80 Q 47.5,82 50,80 Q 52.5,82 55,80 Q 57.5,82 60,80 C 57,65 51,35 50,20 Z; 
          M 50,20 C 49,35 43,65 40,80 Q 42.5,82 45,80 Q 47.5,82 50,80 Q 52.5,82 55,80 Q 57.5,82 60,80 C 57,65 51,35 50,20 Z" 
        keyTimes="0; 0.2; 0.3; 0.7; 0.8; 1" 
        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1" 
        calcMode="spline" 
        dur="6s" 
        repeatCount="indefinite" 
      />
    </path>
  </g>

  <!-- Rain Layer 2 (Foreground, passes dynamically over the background) -->
  <g transform="rotate(10 50 50)">
    <rect x="-50" y="-50" width="200" height="200" fill="url(#rain2)" style="pointer-events: none;">
      <animateTransform attributeName="transform" type="translate" from="0 0" to="0 50" dur="0.3s" repeatCount="indefinite" />
    </rect>
  </g>
</svg>`,
  },
  {
    id: 2,
    name: "home",
    tags: ["house", "home"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <title>Cozy Animated Home</title>
  <desc>A charming house with a rotating sun, drifting clouds, and smoke rising from the chimney.</desc>

  <defs>
    <!-- Soft Drop Shadow for added depth -->
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#1e293b" flood-opacity="0.15" />
    </filter>

    <style>
      /* --- Sun Animation --- */
      .sun-group {
        transform-origin: 35px 35px;
        animation: spin 20s linear infinite;
      }
      @keyframes spin {
        100% { transform: rotate(360deg); }
      }

      /* --- Cloud Animation --- */
      .cloud {
        animation: drift linear infinite;
      }
      .cloud-1 {
        animation-duration: 25s;
        animation-delay: -5s;
      }
      .cloud-2 {
        animation-duration: 35s;
        animation-delay: -20s;
      }
      @keyframes drift {
        0% { transform: translateX(-80px); }
        100% { transform: translateX(250px); }
      }

      /* --- Smoke Animation --- */
      .smoke {
        transform-origin: 130px 20px;
        opacity: 0;
      }
      .smoke-1 { animation: puff 4s ease-out infinite; }
      .smoke-2 { animation: puff 4s ease-out infinite 1.33s; }
      .smoke-3 { animation: puff 4s ease-out infinite 2.66s; }
      
      @keyframes puff {
        0% { 
          transform: translateY(0) scale(0.6); 
          opacity: 0; 
        }
        20% { 
          opacity: 0.8; 
        }
        100% { 
          transform: translateY(-35px) scale(2.2); 
          opacity: 0; 
        }
      }

      /* --- Window Glow Animation --- */
      .window-glow {
        animation: pulse-glow 3s ease-in-out infinite alternate;
      }
      @keyframes pulse-glow {
        0% { fill: #fef08a; }
        100% { fill: #fde047; }
      }
    </style>
  </defs>

  <!-- Background Sky -->
  <rect x="0" y="0" width="200" height="200" fill="#bae6fd" rx="16" />

  <!-- Animated Sun -->
  <g filter="url(#shadow)">
    <g class="sun-group">
      <!-- Sun Body -->
      <circle cx="35" cy="35" r="10" fill="#fbbf24" stroke="#d97706" stroke-width="2.5" />
      <!-- Straight Rays -->
      <g stroke="#d97706" stroke-width="2.5" stroke-linecap="round">
        <line x1="35" y1="16" x2="35" y2="20" />
        <line x1="35" y1="54" x2="35" y2="50" />
        <line x1="16" y1="35" x2="20" y2="35" />
        <line x1="54" y1="35" x2="50" y2="35" />
      </g>
      <!-- Diagonal Rays -->
      <g stroke="#d97706" stroke-width="2.5" stroke-linecap="round" transform="rotate(45 35 35)">
        <line x1="35" y1="16" x2="35" y2="20" />
        <line x1="35" y1="54" x2="35" y2="50" />
        <line x1="16" y1="35" x2="20" y2="35" />
        <line x1="54" y1="35" x2="50" y2="35" />
      </g>
    </g>
  </g>

  <!-- Animated Clouds -->
  <!-- Cloud 1 (Foreground) -->
  <g class="cloud cloud-1" filter="url(#shadow)">
    <path d="M 140 60 A 8 8 0 0 1 140 44 A 12 12 0 0 1 160 36 A 10 10 0 0 1 175 46 A 8 8 0 0 1 175 60 Z" fill="#ffffff" stroke="#374151" stroke-width="2.5" />
  </g>
  
  <!-- Cloud 2 (Background, scaled down) -->
  <g transform="scale(0.7) translate(-30, -10)">
    <g class="cloud cloud-2">
      <path d="M 140 60 A 8 8 0 0 1 140 44 A 12 12 0 0 1 160 36 A 10 10 0 0 1 175 46 A 8 8 0 0 1 175 60 Z" fill="#f8fafc" stroke="#374151" stroke-width="3" />
    </g>
  </g>

  <!-- Animated Chimney Smoke -->
  <g fill="#f1f5f9" stroke="#374151" stroke-width="2">
    <circle cx="130" cy="18" r="4" class="smoke smoke-1" />
    <circle cx="130" cy="18" r="5" class="smoke smoke-2" />
    <circle cx="130" cy="18" r="3.5" class="smoke smoke-3" />
  </g>

  <!-- House Structure Group -->
  <g filter="url(#shadow)">
    
    <!-- Chimney Body -->
    <rect x="123" y="30" width="14" height="40" fill="#ef4444" stroke="#374151" stroke-width="3" />
    <!-- Chimney Top Lip -->
    <rect x="120" y="26" width="20" height="6" rx="1.5" fill="#ef4444" stroke="#374151" stroke-width="3" />

    <!-- House Base -->
    <rect x="55" y="90" width="90" height="70" fill="#fdfbf7" stroke="#374151" stroke-width="3" />

    <!-- Roof -->
    <path d="M 45 90 L 100 42 L 155 90 Z" fill="#ef4444" stroke="#374151" stroke-width="3" stroke-linejoin="round" />

    <!-- Door -->
    <rect x="89" y="124" width="22" height="36" fill="#3b82f6" stroke="#374151" stroke-width="3" />
    <!-- Door Window -->
    <rect x="94" y="129" width="12" height="12" rx="1.5" fill="#bae6fd" stroke="#374151" stroke-width="2" />
    <!-- Door Knob -->
    <circle cx="94" cy="148" r="1.5" fill="#111827" />

    <!-- Left Window -->
    <rect x="64" y="105" width="16" height="16" rx="2" class="window-glow" stroke="#374151" stroke-width="3" />
    <line x1="72" y1="105" x2="72" y2="121" stroke="#374151" stroke-width="2" />
    <line x1="64" y1="113" x2="80" y2="113" stroke="#374151" stroke-width="2" />

    <!-- Right Window -->
    <rect x="120" y="105" width="16" height="16" rx="2" class="window-glow" stroke="#374151" stroke-width="3" />
    <line x1="128" y1="105" x2="128" y2="121" stroke="#374151" stroke-width="2" />
    <line x1="120" y1="113" x2="136" y2="113" stroke="#374151" stroke-width="2" />

    <!-- Bushes at the base -->
    <circle cx="50" cy="155" r="12" fill="#4ade80" stroke="#374151" stroke-width="3" />
    <circle cx="64" cy="158" r="8" fill="#22c55e" stroke="#374151" stroke-width="3" />
    <circle cx="150" cy="155" r="12" fill="#4ade80" stroke="#374151" stroke-width="3" />
    <circle cx="136" cy="158" r="8" fill="#22c55e" stroke="#374151" stroke-width="3" />

    <!-- Ground Line -->
    <line x1="20" y1="160" x2="180" y2="160" stroke="#374151" stroke-width="4" stroke-linecap="round" />

  </g>
</svg>`,
  },
  {
    id: 3,
    name: "profile",
    tags: ["user", "profile", "account"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <!-- Gradient for background -->
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1a1a2e"/>
      <stop offset="100%" stop-color="#0f0f1a"/>
    </radialGradient>

    <!-- Gradient for the profile circle glow -->
    <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e94560" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#e94560" stop-opacity="0"/>
    </radialGradient>

    <!-- Gradient for skin -->
    <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f5c5a3"/>
      <stop offset="100%" stop-color="#e8a87c"/>
    </linearGradient>

    <!-- Hair gradient -->
    <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2c1810"/>
      <stop offset="100%" stop-color="#1a0e08"/>
    </linearGradient>

    <!-- Shirt gradient -->
    <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16213e"/>
      <stop offset="100%" stop-color="#0f3460"/>
    </linearGradient>

    <!-- Orbiting ring gradient -->
    <linearGradient id="ringGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e94560"/>
      <stop offset="50%" stop-color="#533483"/>
      <stop offset="100%" stop-color="#e94560"/>
    </linearGradient>

    <linearGradient id="ringGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0ead69"/>
      <stop offset="50%" stop-color="#16c2d5"/>
      <stop offset="100%" stop-color="#0ead69"/>
    </linearGradient>

    <!-- Clip path for avatar -->
    <clipPath id="avatarClip">
      <circle cx="250" cy="220" r="110"/>
    </clipPath>

    <!-- Filter for soft shadow -->
    <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
      <feOffset dx="0" dy="4"/>
      <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Glow filter -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Particle glow -->
    <filter id="particleGlow">
      <feGaussianBlur stdDeviation="2"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="500" height="500" fill="url(#bgGrad)" rx="20"/>

  <!-- Animated background particles -->
  <g opacity="0.5">
    <circle cx="80" cy="100" r="2" fill="#e94560">
      <animate attributeName="cy" values="100;80;100" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="420" cy="150" r="1.5" fill="#533483">
      <animate attributeName="cy" values="150;125;150" dur="3.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="130" cy="380" r="2.5" fill="#16c2d5">
      <animate attributeName="cy" values="380;355;380" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="370" cy="420" r="1.8" fill="#0ead69">
      <animate attributeName="cy" values="420;395;420" dur="4.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;1;0.4" dur="4.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="60" cy="300" r="1.2" fill="#e94560">
      <animate attributeName="cy" values="300;278;300" dur="3.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="440" cy="330" r="2" fill="#533483">
      <animate attributeName="cy" values="330;310;330" dur="4.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;1;0.4" dur="4.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="60" r="1.5" fill="#16c2d5">
      <animate attributeName="cy" values="60;42;60" dur="3.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="350" cy="70" r="2" fill="#e94560">
      <animate attributeName="cy" values="70;50;70" dur="4.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.2;0.9;0.2" dur="4.8s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- Outer glow pulse -->
  <circle cx="250" cy="220" r="130" fill="url(#glowGrad)">
    <animate attributeName="r" values="130;145;130" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- Orbiting ring 1 -->
  <g>
    <animateTransform attributeName="transform" type="rotate" from="0 250 220" to="360 250 220" dur="8s" repeatCount="indefinite"/>
    <ellipse cx="250" cy="220" rx="140" ry="30" fill="none" stroke="url(#ringGrad1)" stroke-width="1.5" opacity="0.6" stroke-dasharray="8 12">
      <animate attributeName="stroke-dashoffset" values="0;-40" dur="2s" repeatCount="indefinite"/>
    </ellipse>
  </g>

  <!-- Orbiting ring 2 -->
  <g transform="rotate(60 250 220)">
    <animateTransform attributeName="transform" type="rotate" from="60 250 220" to="-300 250 220" dur="12s" repeatCount="indefinite"/>
    <ellipse cx="250" cy="220" rx="150" ry="25" fill="none" stroke="url(#ringGrad2)" stroke-width="1" opacity="0.4" stroke-dasharray="5 15">
      <animate attributeName="stroke-dashoffset" values="0;40" dur="3s" repeatCount="indefinite"/>
    </ellipse>
  </g>

  <!-- Avatar border ring -->
  <circle cx="250" cy="220" r="114" fill="none" stroke="#e94560" stroke-width="2.5" opacity="0.8" filter="url(#glow)">
    <animate attributeName="stroke-dasharray" values="0 720;360 360;720 0;360 360;0 720" dur="6s" repeatCount="indefinite"/>
  </circle>

  <!-- Avatar clipped group -->
  <g clip-path="url(#avatarClip)">
    <!-- Avatar background -->
    <rect x="140" y="110" width="220" height="220" fill="#1e2a4a"/>

    <!-- Neck -->
    <rect x="225" y="280" width="50" height="40" fill="url(#skinGrad)" rx="5"/>

    <!-- Shirt / shoulders -->
    <ellipse cx="250" cy="345" rx="100" ry="55" fill="url(#shirtGrad)"/>
    <!-- Collar -->
    <path d="M230 310 L250 330 L270 310" fill="none" stroke="#0d2137" stroke-width="2"/>

    <!-- Head -->
    <ellipse cx="250" cy="230" rx="65" ry="75" fill="url(#skinGrad)"/>

    <!-- Hair -->
    <path d="M185 215 Q185 155 250 150 Q315 155 315 215 Q310 180 280 172 Q250 165 220 172 Q190 180 185 215Z" fill="url(#hairGrad)"/>
    <!-- Side hair -->
    <path d="M185 215 Q180 235 185 255 Q187 235 192 218Z" fill="url(#hairGrad)"/>
    <path d="M315 215 Q320 235 315 255 Q313 235 308 218Z" fill="url(#hairGrad)"/>

    <!-- Eyes -->
    <g>
      <!-- Left eye -->
      <ellipse cx="228" cy="228" rx="12" ry="8" fill="white"/>
      <circle cx="230" cy="228" r="5" fill="#2c1810">
        <animate attributeName="cx" values="230;228;230;232;230" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="232" cy="226" r="2" fill="white" opacity="0.8"/>

      <!-- Right eye -->
      <ellipse cx="272" cy="228" rx="12" ry="8" fill="white"/>
      <circle cx="274" cy="228" r="5" fill="#2c1810">
        <animate attributeName="cx" values="274;272;274;276;274" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="276" cy="226" r="2" fill="white" opacity="0.8"/>

      <!-- Blink animation -->
      <rect x="210" y="222" width="80" height="14" fill="url(#skinGrad)" opacity="0">
        <animate attributeName="opacity" values="0;0;0;1;0;0;0;0;0;0;0;0;1;0" dur="4s" repeatCount="indefinite"/>
      </rect>
    </g>

    <!-- Eyebrows -->
    <path d="M215 215 Q228 208 240 213" fill="none" stroke="#2c1810" stroke-width="2.5" stroke-linecap="round">
      <animate attributeName="d" values="M215 215 Q228 208 240 213;M215 212 Q228 205 240 210;M215 215 Q228 208 240 213" dur="5s" repeatCount="indefinite"/>
    </path>
    <path d="M260 213 Q272 208 285 215" fill="none" stroke="#2c1810" stroke-width="2.5" stroke-linecap="round">
      <animate attributeName="d" values="M260 213 Q272 208 285 215;M260 210 Q272 205 285 212;M260 213 Q272 208 285 215" dur="5s" repeatCount="indefinite"/>
    </path>

    <!-- Nose -->
    <path d="M250 238 Q245 250 242 255 Q250 258 258 255 Q255 250 250 238" fill="none" stroke="#d4a07a" stroke-width="1.5" stroke-linecap="round"/>

    <!-- Mouth - subtle smile -->
    <path d="M235 272 Q250 282 265 272" fill="none" stroke="#c47a5a" stroke-width="2" stroke-linecap="round">
      <animate attributeName="d" values="M235 272 Q250 282 265 272;M235 274 Q250 285 265 274;M235 272 Q250 282 265 272" dur="6s" repeatCount="indefinite"/>
    </path>

    <!-- Ears -->
    <ellipse cx="185" cy="235" rx="8" ry="14" fill="url(#skinGrad)"/>
    <ellipse cx="315" cy="235" rx="8" ry="14" fill="url(#skinGrad)"/>
  </g>

  <!-- Status indicator -->
  <circle cx="330" cy="310" r="10" fill="#0ead69" stroke="#1a1a2e" stroke-width="3">
    <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite"/>
  </circle>

  <!-- Name text with animation -->
  <text x="250" y="380" text-anchor="middle" font-family="'Segoe UI', sans-serif" font-size="28" font-weight="600" fill="white" letter-spacing="2">
    PROFILE
    <animate attributeName="opacity" values="0;1" dur="1.5s" fill="freeze"/>
    <animate attributeName="y" values="395;380" dur="1.5s" fill="freeze"/>
  </text>

  <!-- Subtitle -->
  <text x="250" y="408" text-anchor="middle" font-family="'Segoe UI', sans-serif" font-size="13" fill="#e94560" letter-spacing="4" opacity="0.8">
    DEVELOPER • WRITER • FILMMAKER
    <animate attributeName="opacity" values="0;0.8" dur="2s" fill="freeze"/>
    <animate attributeName="letter-spacing" values="8;4" dur="2s" fill="freeze"/>
  </text>

  <!-- Bottom decorative line -->
  <line x1="170" y1="435" x2="330" y2="435" stroke="#e94560" stroke-width="1" opacity="0.3">
    <animate attributeName="x1" values="250;170" dur="2s" fill="freeze"/>
    <animate attributeName="x2" values="250;330" dur="2s" fill="freeze"/>
    <animate attributeName="opacity" values="0;0.3" dur="2s" fill="freeze"/>
  </line>

  <!-- Social icons row -->
  <g opacity="0" transform="translate(250, 460)">
    <animate attributeName="opacity" values="0;0.7" dur="2.5s" fill="freeze"/>

    <!-- GitHub-like icon -->
    <circle cx="-40" cy="0" r="12" fill="none" stroke="#aaa" stroke-width="1.2">
      <animate attributeName="stroke" values="#aaa;#e94560;#aaa" dur="3s" begin="0s" repeatCount="indefinite"/>
    </circle>
    <circle cx="-40" cy="-2" r="5" fill="none" stroke="#aaa" stroke-width="1">
      <animate attributeName="stroke" values="#aaa;#e94560;#aaa" dur="3s" begin="0s" repeatCount="indefinite"/>
    </circle>

    <!-- Mail-like icon -->
    <rect x="-12" y="-8" width="24" height="16" rx="2" fill="none" stroke="#aaa" stroke-width="1.2">
      <animate attributeName="stroke" values="#aaa;#16c2d5;#aaa" dur="3s" begin="0.5s" repeatCount="indefinite"/>
    </rect>
    <path d="M-12 -8 L0 2 L12 -8" fill="none" stroke="#aaa" stroke-width="1">
      <animate attributeName="stroke" values="#aaa;#16c2d5;#aaa" dur="3s" begin="0.5s" repeatCount="indefinite"/>
    </path>

    <!-- Link-like icon -->
    <path d="M30 -5 Q38 -5 38 0 Q38 5 30 5" fill="none" stroke="#aaa" stroke-width="1.5" stroke-linecap="round">
      <animate attributeName="stroke" values="#aaa;#0ead69;#aaa" dur="3s" begin="1s" repeatCount="indefinite"/>
    </path>
    <path d="M50 -5 Q42 -5 42 0 Q42 5 50 5" fill="none" stroke="#aaa" stroke-width="1.5" stroke-linecap="round">
      <animate attributeName="stroke" values="#aaa;#0ead69;#aaa" dur="3s" begin="1s" repeatCount="indefinite"/>
    </path>
  </g>
</svg>`,
  },
  {
    id: 4,
    name: "baking",
    tags: ["baking"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .whisk-move { transform-origin: 100px 80px; animation: stir 1.5s ease-in-out infinite alternate; }
      @keyframes stir { 0% { transform: rotate(-15deg); } 100% { transform: rotate(15deg); } }
      .flour { animation: fall 4s linear infinite; opacity: 0; }
      @keyframes fall { 0% { transform: translateY(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(40px); opacity: 0; } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#fdf2f8" rx="24" />
  
  <!-- Flour Particles -->
  <circle cx="80" cy="60" r="2" fill="#fff" class="flour" style="animation-delay: 0s" />
  <circle cx="120" cy="50" r="1.5" fill="#fff" class="flour" style="animation-delay: 1s" />
  <circle cx="100" cy="55" r="2" fill="#fff" class="flour" style="animation-delay: 2s" />

  <!-- Bowl -->
  <path d="M 50 100 A 50 50 0 0 0 150 100 L 140 150 L 60 150 Z" fill="#ec4899" stroke="#9d174d" stroke-width="4" stroke-linejoin="round" />
  <rect x="45" y="95" width="110" height="8" rx="4" fill="#db2777" stroke="#9d174d" stroke-width="3" />

  <!-- Whisk -->
  <g class="whisk-move">
    <line x1="100" y1="40" x2="100" y2="90" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
    <ellipse cx="100" cy="105" rx="12" ry="20" fill="none" stroke="#94a3b8" stroke-width="3" />
    <ellipse cx="100" cy="105" rx="6" ry="18" fill="none" stroke="#94a3b8" stroke-width="2" />
  </g>
</svg>`,
  },
  {
    id: 5,
    name: "google search",
    tags: ["search", "google"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700">
  <defs>
    <filter id="barShadow" x="-5%" y="-30%" width="110%" height="180%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
      <feOffset dx="0" dy="4"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.1"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="barShadowFocus" x="-5%" y="-30%" width="110%" height="180%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="12"/>
      <feOffset dx="0" dy="6"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.15"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="textClip">
      <rect x="310" y="318" width="340" height="40"/>
    </clipPath>
    <clipPath id="pageClip">
      <rect x="0" y="0" width="1000" height="700" rx="14"/>
    </clipPath>
  </defs>

  <!-- 
    TIMELINE (18s loop):
    0.0s - 1.5s    : Static Google page, cursor appears
    1.5s - 2.2s    : Cursor moves to search bar
    2.2s - 2.5s    : Click on search bar (focus ring appears)
    2.5s - 3.5s    : Zoom into search bar area
    3.5s - 7.0s    : Typing "how to build an app"
    7.0s - 7.8s    : Autocomplete dropdown appears
    7.8s - 9.5s    : Cursor moves down through suggestions
    9.5s - 10.0s   : Click on suggestion (highlight)
    10.0s - 10.5s  : Loading bar
    10.5s - 13.0s  : Results page shown
    13.0s - 14.0s  : Fade out
    14.0s - 18.0s  : Reset & pause before loop
  -->

  <g clip-path="url(#pageClip)">

  <!-- ===== FULL PAGE (scales/translates for zoom) ===== -->
  <g>
    <!-- Zoom animation: normal → zoom into search bar → back to normal for results -->
    <animateTransform attributeName="transform" type="translate" 
      values="0 0;0 0;0 0;-200 -180;-200 -180;0 0;0 0;0 0" 
      dur="18s" repeatCount="indefinite" 
      keyTimes="0;0.13;0.14;0.19;0.39;0.44;0.56;1"/>
    <animateTransform attributeName="transform" type="scale" 
      values="1;1;1;1.5;1.5;1;1;1" 
      dur="18s" repeatCount="indefinite" 
      keyTimes="0;0.13;0.14;0.19;0.39;0.44;0.56;1"
      additive="sum"/>

    <!-- ===== WHITE BACKGROUND ===== -->
    <rect width="1000" height="700" fill="#ffffff" rx="14"/>

    <!-- ===== BROWSER CHROME ===== -->
    <rect x="0" y="0" width="1000" height="48" fill="#dee1e6" rx="14"/>
    <rect x="0" y="24" width="1000" height="24" fill="#dee1e6"/>

    <!-- Traffic lights -->
    <circle cx="24" cy="20" r="7" fill="#ff5f57"/>
    <circle cx="46" cy="20" r="7" fill="#ffbd2e"/>
    <circle cx="68" cy="20" r="7" fill="#28c840"/>

    <!-- Tab -->
    <rect x="95" y="6" width="200" height="36" rx="10" fill="#ffffff"/>
    <circle cx="114" cy="24" r="7" fill="#4285F4" opacity="0.8"/>
    <text x="130" y="28" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" fill="#5f6368">Google</text>

    <!-- Address bar -->
    <rect x="320" y="9" width="400" height="30" rx="15" fill="#f1f3f4"/>
    <g transform="translate(338, 18)" opacity="0.5">
      <circle cx="5" cy="5" r="4" fill="none" stroke="#5f6368" stroke-width="1.3"/>
      <line x1="8" y1="8" x2="11" y2="11" stroke="#5f6368" stroke-width="1.3" stroke-linecap="round"/>
    </g>
    <text x="358" y="29" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" fill="#5f6368">google.com</text>

    <!-- ===== GOOGLE LOGO ===== -->
    <g opacity="1">
      <animate attributeName="opacity" values="1;1;1;1;1;0;0;0;0;1" dur="18s" repeatCount="indefinite" keyTimes="0;0.13;0.55;0.555;0.56;0.565;0.57;0.77;0.78;1"/>
      <text text-anchor="middle" x="500" y="230" font-family="'Product Sans', 'Catamaran', Arial, sans-serif" font-size="92" font-weight="400" letter-spacing="-2">
        <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
      </text>
    </g>

    <!-- ===== SEARCH BAR ===== -->
    <g>
      <animate attributeName="opacity" values="1;1;1;1;1;0;0;0;0;1" dur="18s" repeatCount="indefinite" keyTimes="0;0.13;0.55;0.555;0.56;0.565;0.57;0.77;0.78;1"/>

      <!-- Search bar background -->
      <g filter="url(#barShadow)">
        <rect x="270" y="300" width="460" height="56" rx="28" fill="white" stroke="#dfe1e5" stroke-width="1.5">
          <!-- Focus: border changes to blue -->
          <animate attributeName="stroke" values="#dfe1e5;#dfe1e5;#4285F4;#4285F4;#4285F4;#dfe1e5" dur="18s" repeatCount="indefinite" keyTimes="0;0.12;0.14;0.55;0.56;1"/>
          <animate attributeName="stroke-width" values="1.5;1.5;2;2;2;1.5" dur="18s" repeatCount="indefinite" keyTimes="0;0.12;0.14;0.55;0.56;1"/>
        </rect>
      </g>

      <!-- Search icon (left side of bar) -->
      <g transform="translate(290, 318)" opacity="0.4">
        <circle cx="9" cy="9" r="8" fill="none" stroke="#9aa0a6" stroke-width="2"/>
        <line x1="15" y1="15" x2="20" y2="20" stroke="#9aa0a6" stroke-width="2" stroke-linecap="round"/>
      </g>

      <!-- Microphone icon (right side) -->
      <g transform="translate(690, 313)">
        <rect x="7" y="0" width="9" height="16" rx="4.5" fill="none" stroke="#4285F4" stroke-width="1.5"/>
        <path d="M2 12 Q2 22 11.5 22 Q21 22 21 12" fill="none" stroke="#EA4335" stroke-width="1.5"/>
        <line x1="11.5" y1="22" x2="11.5" y2="28" stroke="#34A853" stroke-width="1.5"/>
        <line x1="7" y1="28" x2="16" y2="28" stroke="#34A853" stroke-width="1.5" stroke-linecap="round"/>
      </g>

      <!-- ===== TYPING TEXT ===== -->
      <g clip-path="url(#textClip)">
        <text x="322" y="336" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="16" fill="#202124">
          <set attributeName="textContent" to="" begin="0s"/>
          <set attributeName="textContent" to="h" begin="3.5s"/>
          <set attributeName="textContent" to="ho" begin="3.65s"/>
          <set attributeName="textContent" to="how" begin="3.8s"/>
          <set attributeName="textContent" to="how " begin="4.0s"/>
          <set attributeName="textContent" to="how t" begin="4.2s"/>
          <set attributeName="textContent" to="how to" begin="4.35s"/>
          <set attributeName="textContent" to="how to " begin="4.55s"/>
          <set attributeName="textContent" to="how to b" begin="4.75s"/>
          <set attributeName="textContent" to="how to bu" begin="4.88s"/>
          <set attributeName="textContent" to="how to bui" begin="5.0s"/>
          <set attributeName="textContent" to="how to buil" begin="5.15s"/>
          <set attributeName="textContent" to="how to build" begin="5.3s"/>
          <set attributeName="textContent" to="how to build " begin="5.55s"/>
          <set attributeName="textContent" to="how to build a" begin="5.75s"/>
          <set attributeName="textContent" to="how to build an" begin="5.9s"/>
          <set attributeName="textContent" to="how to build an " begin="6.1s"/>
          <set attributeName="textContent" to="how to build an a" begin="6.3s"/>
          <set attributeName="textContent" to="how to build an ap" begin="6.45s"/>
          <set attributeName="textContent" to="how to build an app" begin="6.6s"/>
          <set attributeName="textContent" to="" begin="14s"/>
        </text>
      </g>

      <!-- Blinking cursor -->
      <rect x="322" y="316" width="1.5" height="24" fill="#202124">
        <!-- Blink -->
        <animate attributeName="opacity" values="1;1;0;0" dur="1s" repeatCount="indefinite" keyTimes="0;0.5;0.5001;1"/>
        <!-- Visibility: show only when search bar is focused -->
        <animate attributeName="fill-opacity" values="0;0;1;1;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.13;0.14;0.55;0.56;1"/>
        <!-- Move with typing -->
        <animate attributeName="x" 
          values="322;322;322;330;345;358;365;378;390;398;410;420;430;442;456;468;478;494;504;516;526;526;322" 
          dur="18s" repeatCount="indefinite" 
          keyTimes="0;0.19;0.194;0.203;0.211;0.222;0.233;0.244;0.264;0.271;0.278;0.286;0.294;0.308;0.319;0.328;0.339;0.350;0.358;0.367;0.378;0.55;0.78"/>
      </rect>
    </g>

    <!-- ===== BUTTONS (visible before dropdown) ===== -->
    <g>
      <animate attributeName="opacity" values="1;1;0;0;0;0;0;1" dur="18s" repeatCount="indefinite" keyTimes="0;0.38;0.39;0.40;0.55;0.56;0.77;0.78"/>
      <rect x="368" y="385" width="130" height="42" rx="4" fill="#f8f9fa"/>
      <text x="433" y="411" text-anchor="middle" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#5f6368">Google Search</text>
      <rect x="518" y="385" width="150" height="42" rx="4" fill="#f8f9fa"/>
      <text x="593" y="411" text-anchor="middle" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#5f6368">I'm Feeling Lucky</text>
    </g>

    <!-- ===== AUTOCOMPLETE DROPDOWN ===== -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;0;1;1;0;0;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.388;0.40;0.527;0.54;0.55;0.77;1"/>

      <!-- Dropdown shadow + bg -->
      <rect x="270" y="355" width="460" height="215" rx="0" fill="white" stroke="#e8eaed" stroke-width="1"/>
      <rect x="270" y="355" width="460" height="1" fill="#e8eaed"/>

      <!-- Suggestion 1 -->
      <g>
        <rect x="271" y="358" width="458" height="48" fill="transparent">
          <animate attributeName="fill" values="transparent;transparent;#f1f3f4;transparent;transparent;transparent" dur="18s" repeatCount="indefinite" keyTimes="0;0.44;0.46;0.48;0.50;1"/>
        </rect>
        <g transform="translate(290, 372)" opacity="0.35">
          <circle cx="7" cy="7" r="6" fill="none" stroke="#9aa0a6" stroke-width="1.5"/>
          <line x1="11.5" y1="11.5" x2="15" y2="15" stroke="#9aa0a6" stroke-width="1.5" stroke-linecap="round"/>
        </g>
        <text x="322" y="388" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="16" fill="#202124">how to build an app for free</text>
      </g>

      <!-- Suggestion 2 -->
      <g>
        <rect x="271" y="406" width="458" height="48" fill="transparent">
          <animate attributeName="fill" values="transparent;transparent;transparent;#f1f3f4;transparent;transparent" dur="18s" repeatCount="indefinite" keyTimes="0;0.46;0.48;0.50;0.505;1"/>
        </rect>
        <g transform="translate(290, 420)" opacity="0.35">
          <circle cx="7" cy="7" r="6" fill="none" stroke="#9aa0a6" stroke-width="1.5"/>
          <line x1="11.5" y1="11.5" x2="15" y2="15" stroke="#9aa0a6" stroke-width="1.5" stroke-linecap="round"/>
        </g>
        <text x="322" y="436" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="16" fill="#202124">how to build an app with no coding</text>
      </g>

      <!-- Suggestion 3 (will be "clicked") -->
      <g>
        <rect x="271" y="454" width="458" height="48" fill="transparent">
          <animate attributeName="fill" values="transparent;transparent;transparent;transparent;#e8eaed;#e8eaed;transparent" dur="18s" repeatCount="indefinite" keyTimes="0;0.48;0.50;0.505;0.51;0.527;0.54"/>
        </rect>
        <g transform="translate(290, 468)" opacity="0.35">
          <circle cx="7" cy="7" r="6" fill="none" stroke="#9aa0a6" stroke-width="1.5"/>
          <line x1="11.5" y1="11.5" x2="15" y2="15" stroke="#9aa0a6" stroke-width="1.5" stroke-linecap="round"/>
        </g>
        <text x="322" y="484" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="16" fill="#202124">how to build an app from scratch</text>
      </g>

      <!-- Suggestion 4 -->
      <g>
        <rect x="271" y="502" width="458" height="48" fill="transparent"/>
        <g transform="translate(290, 516)" opacity="0.35">
          <circle cx="7" cy="7" r="6" fill="none" stroke="#9aa0a6" stroke-width="1.5"/>
          <line x1="11.5" y1="11.5" x2="15" y2="15" stroke="#9aa0a6" stroke-width="1.5" stroke-linecap="round"/>
        </g>
        <text x="322" y="532" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="16" fill="#202124">how to build an app step by step</text>
      </g>

      <!-- Bottom rounded corners -->
      <rect x="270" y="550" width="460" height="20" rx="12" fill="white" stroke="#e8eaed" stroke-width="1"/>
      <rect x="271" y="550" width="458" height="8" fill="white"/>
    </g>

    <!-- ===== LOADING BAR ===== -->
    <rect x="0" y="48" width="0" height="3" fill="#4285F4" rx="1">
      <animate attributeName="width" values="0;0;500;1000;1000;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.54;0.57;0.58;0.585;0.59;1"/>
      <animate attributeName="opacity" values="0;0;1;1;0;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.54;0.545;0.57;0.59;0.60;1"/>
    </rect>

    <!-- ===== SEARCH RESULTS PAGE ===== -->
    <g opacity="0">
      <animate attributeName="opacity" values="0;0;0;1;1;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.56;0.58;0.61;0.72;0.77;1"/>

      <!-- White overlay to hide homepage -->
      <rect x="0" y="48" width="1000" height="652" fill="#ffffff"/>

      <!-- Results top bar -->
      <rect x="0" y="48" width="1000" height="60" fill="#ffffff"/>

      <!-- Mini logo -->
      <text x="36" y="90" font-family="'Product Sans', 'Catamaran', Arial, sans-serif" font-size="28" font-weight="400">
        <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
      </text>

      <!-- Results search bar -->
      <rect x="140" y="62" width="500" height="44" rx="22" fill="white" stroke="#dfe1e5" stroke-width="1.5"/>
      <text x="170" y="90" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="15" fill="#202124">how to build an app from scratch</text>

      <!-- Search icon in results bar -->
      <g transform="translate(610, 76)" opacity="0.5">
        <circle cx="6" cy="6" r="5.5" fill="none" stroke="#4285F4" stroke-width="1.8"/>
        <line x1="10" y1="10" x2="14" y2="14" stroke="#4285F4" stroke-width="1.8" stroke-linecap="round"/>
      </g>

      <!-- Tabs -->
      <g transform="translate(140, 128)">
        <text x="0" y="0" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" fill="#4285F4" font-weight="500">All</text>
        <line x1="-4" y1="7" x2="20" y2="7" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/>
        <text x="50" y="0" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" fill="#70757a">Images</text>
        <text x="112" y="0" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" fill="#70757a">Videos</text>
        <text x="170" y="0" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" fill="#70757a">News</text>
        <text x="220" y="0" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" fill="#70757a">Shopping</text>
      </g>
      <line x1="0" y1="140" x2="1000" y2="140" stroke="#e8eaed" stroke-width="1"/>

      <!-- Results count -->
      <text x="140" y="162" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" fill="#70757a">About 3,450,000,000 results (0.48 seconds)</text>

      <!-- Result 1 -->
      <g transform="translate(140, 190)" opacity="0">
        <animate attributeName="opacity" values="0;0;0;1;1;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.58;0.62;0.64;0.72;0.77;1"/>
        <text x="0" y="0" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" fill="#202124">developer.android.com</text>
        <text x="0" y="28" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="20" fill="#1a0dab">Build Your First App | Android Developers</text>
        <text x="0" y="52" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#4d5156">Learn how to build your first Android app from scratch. Get started</text>
        <text x="0" y="70" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#4d5156">with Android Studio, design your interface, and deploy to devices...</text>
      </g>

      <!-- Result 2 -->
      <g transform="translate(140, 290)" opacity="0">
        <animate attributeName="opacity" values="0;0;0;1;1;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.60;0.64;0.66;0.72;0.77;1"/>
        <text x="0" y="0" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" fill="#202124">www.codecademy.com › learn › build-apps</text>
        <text x="0" y="28" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="20" fill="#1a0dab">How to Build an App From Scratch (2025 Guide)</text>
        <text x="0" y="52" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#4d5156">A comprehensive step-by-step guide. Choose your tech stack,</text>
        <text x="0" y="70" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#4d5156">wireframe your UI, write clean code, and publish to app stores...</text>
      </g>

      <!-- Result 3 -->
      <g transform="translate(140, 390)" opacity="0">
        <animate attributeName="opacity" values="0;0;0;1;1;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.62;0.66;0.68;0.72;0.77;1"/>
        <text x="0" y="0" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="12" fill="#202124">www.freecodecamp.org › news</text>
        <text x="0" y="28" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="20" fill="#1a0dab">How to Make an App – Full Beginner Course</text>
        <text x="0" y="52" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#4d5156">Free tutorial covering React Native, Flutter, and Swift. Build</text>
        <text x="0" y="70" font-family="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="14" fill="#4d5156">cross-platform apps with hands-on projects and real examples...</text>
      </g>
    </g>

    <!-- ===== MOUSE CURSOR ===== -->
    <g>
      <!-- Cursor visibility -->
      <animate attributeName="opacity" values="0;1;1;1;1;1;0;0;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.06;0.08;0.12;0.527;0.54;0.545;0.56;0.77;1"/>

      <!-- Cursor shape (standard pointer arrow) -->
      <path d="M0 0 L0 17 L4.5 12.5 L9 20 L11.5 19 L7.5 11 L13 10 Z" fill="white" stroke="#333" stroke-width="0.8" stroke-linejoin="round">
        <!-- Phase 1: idle at bottom right → move to search bar center -->
        <!-- Phase 2: stay in bar while typing -->
        <!-- Phase 3: move down through suggestions -->
        <!-- Phase 4: click on suggestion 3 -->
        <animateMotion 
          dur="18s" 
          repeatCount="indefinite"
          keyTimes="0;0.06;0.08;0.12;0.13;0.19;0.39;0.43;0.46;0.48;0.50;0.505;0.51;0.527;1"
          keyPoints="0;0;0.15;0.3;0.3;0.3;0.3;0.45;0.55;0.65;0.75;0.78;0.82;0.82;0.82"
          path="M620 480 C620 480 550 380 500 340 C480 325 460 328 460 328 L460 328 L460 328 L460 328 L440 380 L440 410 L440 440 L430 468 L430 478 L430 478"/>
      </path>

      <!-- Click animation (small circle pulse on click moments) -->
      <circle r="0" fill="none" stroke="#4285F4" stroke-width="2" opacity="0">
        <!-- Click 1: on search bar -->
        <animate attributeName="r" values="0;0;12;0;0;0;12;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.12;0.13;0.14;0.50;0.505;0.515;0.527;1"/>
        <animate attributeName="opacity" values="0;0;0.6;0;0;0;0.6;0;0" dur="18s" repeatCount="indefinite" keyTimes="0;0.12;0.13;0.14;0.50;0.505;0.515;0.527;1"/>
        <animateMotion 
          dur="18s" 
          repeatCount="indefinite"
          keyTimes="0;0.12;0.13;0.505;0.515;1"
          keyPoints="0;0;0.5;0.5;1;1"
          path="M500 328 L500 328 L500 328 L500 328 L430 478 L430 478"/>
      </circle>
    </g>

  </g>
  </g>

  <!-- Outer border -->
  <rect width="1000" height="700" fill="none" stroke="#c8ccd0" stroke-width="1" rx="14"/>
</svg>`,
  },
  {
    id: 6,
    name: "coffe",
    tags: ["coffe"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .steam { transform-origin: center bottom; opacity: 0; animation: steam-rise 3s ease-out infinite; }
      .heart-pulse { transform-origin: 100px 125px; animation: heart-beat 2s ease-in-out infinite; }
      @keyframes steam-rise { 0% { transform: translateY(0) scaleX(1); opacity: 0; } 20% { opacity: 0.6; } 100% { transform: translateY(-40px) scaleX(1.5); opacity: 0; } }
      @keyframes heart-beat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#fed7aa" rx="24" />
  <g>
    <path d="M 85 70 Q 90 50 85 40" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" class="steam" style="animation-delay:0s" />
    <path d="M 100 75 Q 105 55 100 45" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" class="steam" style="animation-delay:1s" />
    <path d="M 115 70 Q 120 50 115 40" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" class="steam" style="animation-delay:2s" />
    <path d="M 140 100 A 25 25 0 0 1 140 140" fill="none" stroke="#374151" stroke-width="8" stroke-linecap="round" />
    <path d="M 140 100 A 25 25 0 0 1 140 140" fill="none" stroke="#f97316" stroke-width="4" stroke-linecap="round" />
    <path d="M 60 80 L 140 80 L 130 150 L 70 150 Z" fill="#f97316" stroke="#374151" stroke-width="3" stroke-linejoin="round" />
    <path d="M 100 130 C 100 130 90 120 90 112 A 5 5 0 0 1 100 112 A 5 5 0 0 1 110 112 C 110 120 100 130 100 130" fill="#fee2e2" stroke="#374151" stroke-width="2" class="heart-pulse" />
    <ellipse cx="100" cy="165" rx="60" ry="10" fill="#fff7ed" stroke="#374151" stroke-width="3" />
  </g>
</svg>`,
  },
  {
    id: 8,
    name: "Star",
    tags: ["star", "stargaze"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .star-twinkle { animation: twinkle 2s ease-in-out infinite alternate; }
      .moon-glow { animation: moon-pulse 4s ease-in-out infinite alternate; }
      .comet { animation: shoot 6s linear infinite; }
      @keyframes twinkle { 0% { opacity: 0.3; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1.2); } }
      @keyframes moon-pulse { 0% { filter: drop-shadow(0 0 2px #fef08a); } 100% { filter: drop-shadow(0 0 10px #fef08a); } }
      @keyframes shoot { 0% { transform: translate(-100px, -100px); opacity: 0; } 10% { opacity: 1; } 30% { transform: translate(300px, 300px); opacity: 0; } 100% { transform: translate(300px, 300px); opacity: 0; } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#1e1b4b" rx="24" />
  <circle cx="40" cy="40" r="2" fill="#fff" class="star-twinkle" />
  <circle cx="160" cy="50" r="1.5" fill="#fff" class="star-twinkle" style="animation-delay:0.5s" />
  <circle cx="120" cy="30" r="2.5" fill="#fff" class="star-twinkle" style="animation-delay:1.2s" />
  <circle cx="50" cy="150" r="1.8" fill="#fff" class="star-twinkle" style="animation-delay:0.8s" />
  <line x1="0" y1="0" x2="40" y2="40" stroke="#fff" stroke-width="2" stroke-linecap="round" class="comet" />
  <g>
    <path d="M 100 50 A 50 50 0 1 0 150 100 A 40 40 0 1 1 100 50" fill="#fef08a" stroke="#374151" stroke-width="3" class="moon-glow" />
    <g transform="rotate(-30 100 130)">
      <rect x="80" y="100" width="80" height="20" rx="4" fill="#6366f1" stroke="#374151" stroke-width="3" />
      <line x1="100" y1="120" x2="80" y2="170" stroke="#374151" stroke-width="4" stroke-linecap="round" />
      <line x1="100" y1="120" x2="120" y2="170" stroke="#374151" stroke-width="4" stroke-linecap="round" />
    </g>
  </g>
</svg>`,
  },
  {
    id: 9,
    name: "flower",
    tags: ["flower"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .flower-sway { transform-origin: 100px 140px; animation: sway 4s ease-in-out infinite alternate; }
      .bee-buzz { animation: buzz 3s ease-in-out infinite; }
      @keyframes sway { 0% { transform: rotate(-5deg); } 100% { transform: rotate(5deg); } }
      @keyframes buzz { 0% { transform: translate(0, 0); } 25% { transform: translate(10px, -10px); } 50% { transform: translate(0, -20px); } 75% { transform: translate(-10px, -10px); } 100% { transform: translate(0, 0); } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#dcfce7" rx="24" />
  <path d="M 70 140 L 130 140 L 120 180 L 80 180 Z" fill="#b45309" stroke="#374151" stroke-width="3" stroke-linejoin="round" />
  <rect x="65" y="135" width="70" height="10" rx="2" fill="#92400e" stroke="#374151" stroke-width="3" />
  <g class="flower-sway">
    <path d="M 100 140 Q 95 100 100 60" fill="none" stroke="#15803d" stroke-width="4" stroke-linecap="round" />
    <path d="M 100 110 Q 120 100 130 115" fill="#22c55e" stroke="#374151" stroke-width="2" />
    <path d="M 100 120 Q 80 110 70 125" fill="#22c55e" stroke="#374151" stroke-width="2" />
    <g transform="translate(100, 60)">
      <circle r="15" fill="#f472b6" stroke="#374151" stroke-width="2" />
      <circle r="6" fill="#facc15" stroke="#374151" stroke-width="2" />
    </g>
  </g>
  <g class="bee-buzz" transform="translate(150, 50)">
    <ellipse rx="8" ry="6" fill="#facc15" stroke="#374151" stroke-width="2" />
    <path d="M -4 -4 Q -10 -15 0 -10" fill="#bae6fd" stroke="#374151" stroke-width="1" />
    <path d="M 4 -4 Q 10 -15 0 -10" fill="#bae6fd" stroke="#374151" stroke-width="1" />
  </g>
</svg>`,
  },

  {
    id: 10,
    name: "rading",
    tags: ["reading", "book"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .lamp-glow { animation: glow-pulse 2s ease-in-out infinite alternate; }
      .page-flip { transform-origin: 100px 140px; animation: flip 3s ease-in-out infinite; }
      @keyframes glow-pulse { 0% { fill: rgba(250, 204, 21, 0.2); } 100% { fill: rgba(250, 204, 21, 0.5); } }
      @keyframes flip { 0%, 100% { transform: rotateY(0); } 50% { transform: rotateY(-20deg); } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#fef2f2" rx="24" />
  <path d="M 100 40 L 40 180 L 160 180 Z" class="lamp-glow" />
  <path d="M 80 40 L 120 40 L 130 70 L 70 70 Z" fill="#ef4444" stroke="#374151" stroke-width="3" />
  <line x1="100" y1="20" x2="100" y2="40" stroke="#374151" stroke-width="3" />
  <g class="page-flip">
    <path d="M 60 140 Q 100 130 140 140 L 140 170 Q 100 160 60 170 Z" fill="#fff" stroke="#374151" stroke-width="3" />
    <line x1="100" y1="135" x2="100" y2="165" stroke="#374151" stroke-width="2" />
  </g>
  <g transform="translate(100, 100)">
    <circle cx="-15" r="10" fill="none" stroke="#374151" stroke-width="3" />
    <circle cx="15" r="10" fill="none" stroke="#374151" stroke-width="3" />
    <path d="M -5 0 Q 0 -5 5 0" fill="none" stroke="#374151" stroke-width="3" />
  </g>
</svg>`,
  },

  {
    id: 11,
    name: "rainy window",
    tags: ["rain", "window"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .drop { animation: slide 3s linear infinite; opacity: 0; }
      @keyframes slide {
        0% { transform: translateY(-20px); opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translateY(60px); opacity: 0; }
      }
      .curtain-sway { transform-origin: top; animation: sway 5s ease-in-out infinite alternate; }
      @keyframes sway { 0% { transform: rotate(-2deg); } 100% { transform: rotate(2deg); } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#64748b" rx="24" />
  <!-- Window Pane -->
  <rect x="40" y="40" width="120" height="120" fill="#94a3b8" stroke="#334155" stroke-width="4" />
  <line x1="100" y1="40" x2="100" y2="160" stroke="#334155" stroke-width="4" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="#334155" stroke-width="4" />
  
  <!-- Rain Drops -->
  <g stroke="#e2e8f0" stroke-width="2" stroke-linecap="round">
    <line x1="60" y1="50" x2="60" y2="55" class="drop" style="animation-delay: 0s" />
    <line x1="85" y1="70" x2="85" y2="75" class="drop" style="animation-delay: 1s" />
    <line x1="120" y1="45" x2="120" y2="50" class="drop" style="animation-delay: 0.5s" />
    <line x1="145" y1="80" x2="145" y2="85" class="drop" style="animation-delay: 2s" />
    <line x1="70" y1="110" x2="70" y2="115" class="drop" style="animation-delay: 1.5s" />
  </g>

  <!-- Curtains -->
  <path d="M 40 40 Q 60 100 40 160 L 20 160 L 20 40 Z" fill="#f1f5f9" stroke="#334155" stroke-width="3" class="curtain-sway" />
  <path d="M 160 40 Q 140 100 160 160 L 180 160 L 180 40 Z" fill="#f1f5f9" stroke="#334155" stroke-width="3" class="curtain-sway" />
</svg>`,
  },

  {
    id: 13,
    name: "campfire",
    tags: ["campfire", "fire"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .flame { transform-origin: bottom; animation: flicker 0.6s ease-in-out infinite alternate; }
      @keyframes flicker {
        0% { transform: scaleY(1) scaleX(1); }
        100% { transform: scaleY(1.1) scaleX(0.95); }
      }
      .spark { animation: rise 2s ease-out infinite; opacity: 0; }
      @keyframes rise {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: translateY(-60px) translateX(10px); opacity: 0; }
      }
    </style>
  </defs>
  <rect width="200" height="200" fill="#1c1917" rx="24" />
  
  <!-- Logs -->
  <rect x="70" y="140" width="60" height="15" rx="4" fill="#78350f" stroke="#451a03" stroke-width="3" transform="rotate(-15 100 147)" />
  <rect x="70" y="140" width="60" height="15" rx="4" fill="#78350f" stroke="#451a03" stroke-width="3" transform="rotate(15 100 147)" />

  <!-- Sparks -->
  <circle cx="90" cy="120" r="2" fill="#fbbf24" class="spark" style="animation-delay: 0s" />
  <circle cx="110" cy="110" r="1.5" fill="#f59e0b" class="spark" style="animation-delay: 0.7s" />
  <circle cx="100" cy="115" r="2" fill="#fbbf24" class="spark" style="animation-delay: 1.4s" />

  <!-- Flames -->
  <path d="M 100 140 Q 130 110 100 60 Q 70 110 100 140" fill="#f97316" stroke="#ea580c" stroke-width="3" class="flame" />
  <path d="M 100 140 Q 115 120 100 90 Q 85 120 100 140" fill="#fbbf24" stroke="#f59e0b" stroke-width="2" class="flame" style="animation-delay: 0.2s" />
</svg>`,
  },

  {
    id: 14,
    name: "cat naping",
    tags: ["cat", "nap"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .breathing { transform-origin: center; animation: breath 4s ease-in-out infinite; }
      @keyframes breath { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
      .tail-twitch { transform-origin: 140px 130px; animation: twitch 3s ease-in-out infinite; }
      @keyframes twitch { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(10deg); } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#fef3c7" rx="24" />
  
  <!-- Rug -->
  <ellipse cx="100" cy="140" rx="70" ry="30" fill="#eab308" opacity="0.2" />

  <g class="breathing">
    <!-- Tail -->
    <path d="M 140 130 Q 170 130 160 100" fill="none" stroke="#d97706" stroke-width="12" stroke-linecap="round" class="tail-twitch" />
    
    <!-- Body -->
    <circle cx="100" cy="120" r="45" fill="#f59e0b" stroke="#d97706" stroke-width="4" />
    
    <!-- Head -->
    <circle cx="75" cy="110" r="25" fill="#f59e0b" stroke="#d97706" stroke-width="4" />
    
    <!-- Ears -->
    <path d="M 60 90 L 55 70 L 75 88" fill="#f59e0b" stroke="#d97706" stroke-width="3" />
    <path d="M 90 90 L 95 70 L 75 88" fill="#f59e0b" stroke="#d97706" stroke-width="3" />
    
    <!-- Closed Eyes -->
    <path d="M 65 110 Q 70 115 75 110" fill="none" stroke="#451a03" stroke-width="2" stroke-linecap="round" />
    <path d="M 85 110 Q 80 115 75 110" fill="none" stroke="#451a03" stroke-width="2" stroke-linecap="round" />
  </g>
</svg>`,
  },

  {
    id: 15,
    name: "retro record player",
    tags: ["retro", "record"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .spin { transform-origin: 100px 105px; animation: rotate 4s linear infinite; }
      @keyframes rotate { 100% { transform: rotate(360deg); } }
      .note { animation: float-note 3s ease-out infinite; opacity: 0; }
      @keyframes float-note {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: translateY(-50px) translateX(20px); opacity: 0; }
      }
      .arm-vibrate { transform-origin: 160px 60px; animation: vibrate 0.5s ease-in-out infinite alternate; }
      @keyframes vibrate { 0% { transform: rotate(0deg); } 100% { transform: rotate(1deg); } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#fef2f2" rx="24" />
  
  <!-- Record Player Base -->
  <rect x="30" y="60" width="140" height="100" rx="8" fill="#92400e" stroke="#451a03" stroke-width="4" />
  <rect x="40" y="70" width="120" height="70" rx="4" fill="#d97706" stroke="#451a03" stroke-width="2" />

  <!-- Spinning Record -->
  <g class="spin">
    <circle cx="100" cy="105" r="45" fill="#1c1917" stroke="#444" stroke-width="1" />
    <circle cx="100" cy="105" r="40" fill="none" stroke="#333" stroke-width="1" />
    <circle cx="100" cy="105" r="30" fill="none" stroke="#333" stroke-width="1" />
    <circle cx="100" cy="105" r="12" fill="#ef4444" />
    <circle cx="100" cy="105" r="3" fill="#1c1917" />
  </g>

  <!-- Tonearm -->
  <g class="arm-vibrate">
    <path d="M 160 60 L 160 100 L 110 105" fill="none" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
    <rect x="105" y="100" width="10" height="10" fill="#475569" />
  </g>

  <!-- Music Notes -->
  <text x="150" y="80" font-size="20" class="note" style="animation-delay: 0s">♪</text>
  <text x="170" y="100" font-size="16" class="note" style="animation-delay: 1.5s">♫</text>
</svg>`,
  },

  {
    id: 16,
    name: "hot air ballon",
    tags: ["air", "ballon"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .float { animation: float-up-down 4s ease-in-out infinite alternate; }
      @keyframes float-up-down { 0% { transform: translateY(0); } 100% { transform: translateY(-15px); } }
      .cloud-move { animation: drift 20s linear infinite; }
      @keyframes drift { 0% { transform: translateX(-100px); } 100% { transform: translateX(250px); } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#bae6fd" rx="24" />
  
  <!-- Clouds -->
  <path d="M 20 60 Q 40 40 60 60 Q 80 40 100 60" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity="0.5" class="cloud-move" />
  <path d="M 120 140 Q 140 120 160 140 Q 180 120 200 140" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity="0.3" class="cloud-move" style="animation-delay: -10s" />

  <g class="float">
    <!-- Ropes -->
    <line x1="85" y1="110" x2="90" y2="130" stroke="#78350f" stroke-width="2" />
    <line x1="115" y1="110" x2="110" y2="130" stroke="#78350f" stroke-width="2" />
    
    <!-- Basket -->
    <rect x="85" y="130" width="30" height="20" rx="4" fill="#92400e" stroke="#451a03" stroke-width="2" />
    
    <!-- Balloon -->
    <path d="M 100 30 C 60 30 60 110 100 110 C 140 110 140 30 100 30" fill="#f43f5e" stroke="#9f1239" stroke-width="3" />
    <path d="M 100 30 C 80 30 80 110 100 110" fill="none" stroke="#9f1239" stroke-width="2" />
    <path d="M 100 30 C 120 30 120 110 100 110" fill="none" stroke="#9f1239" stroke-width="2" />
    <rect x="75" y="50" width="50" height="15" fill="#fbbf24" opacity="0.8" />
  </g>
</svg>`,
  },

  {
    id: 17,
    name: "knit",
    tags: ["knit"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .needle-move { transform-origin: 100px 100px; animation: knit 2s ease-in-out infinite alternate; }
      @keyframes knit { 0% { transform: rotate(-5deg); } 100% { transform: rotate(5deg); } }
      .yarn-pulse { animation: pulse 3s ease-in-out infinite alternate; }
      @keyframes pulse { 0% { transform: scale(1); } 100% { transform: scale(1.02); } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#f5f5f4" rx="24" />
  
  <!-- Basket -->
  <path d="M 40 120 L 160 120 L 140 170 L 60 170 Z" fill="#d6d3d1" stroke="#78716c" stroke-width="4" stroke-linejoin="round" />
  <path d="M 40 120 Q 100 110 160 120" fill="none" stroke="#78716c" stroke-width="4" stroke-linecap="round" />

  <!-- Wool Balls -->
  <circle cx="75" cy="115" r="30" fill="#818cf8" stroke="#4338ca" stroke-width="3" class="yarn-pulse" />
  <circle cx="125" cy="115" r="35" fill="#fb7185" stroke="#e11d48" stroke-width="3" class="yarn-pulse" style="animation-delay: 1s" />
  
  <!-- Needles -->
  <g class="needle-move">
    <line x1="60" y1="60" x2="120" y2="140" stroke="#94a3b8" stroke-width="5" stroke-linecap="round" />
    <circle cx="60" cy="60" r="5" fill="#475569" />
    
    <line x1="140" y1="60" x2="80" y2="140" stroke="#94a3b8" stroke-width="5" stroke-linecap="round" />
    <circle cx="140" cy="60" r="5" fill="#475569" />
  </g>
</svg>`,
  },

  {
    id: 18,
    name: "lighthouse",
    tags: ["lighthouse"],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .beam { transform-origin: 100px 55px; animation: rotate-beam 6s linear infinite; }
      @keyframes rotate-beam { 0% { transform: rotate(0deg); opacity: 0.2; } 50% { opacity: 0.8; } 100% { transform: rotate(360deg); opacity: 0.2; } }
      .wave { animation: wave-move 3s ease-in-out infinite alternate; }
      @keyframes wave-move { 0% { transform: translateX(-10px); } 100% { transform: translateX(10px); } }
    </style>
  </defs>
  <rect width="200" height="200" fill="#0f172a" rx="24" />
  
  <!-- Rotating Beam -->
  <path d="M 100 55 L 250 -50 L 250 160 Z" fill="#fef08a" opacity="0.3" class="beam" />

  <!-- Lighthouse Body -->
  <path d="M 85 160 L 115 160 L 108 50 L 92 50 Z" fill="#f1f5f9" stroke="#334155" stroke-width="3" />
  <rect x="88" y="70" width="24" height="15" fill="#ef4444" />
  <rect x="90" y="110" width="20" height="15" fill="#ef4444" />
  
  <!-- Lantern Room -->
  <rect x="88" y="40" width="24" height="15" rx="2" fill="#334155" />
  <circle cx="100" cy="47" r="5" fill="#fef08a" />
  <path d="M 85 40 L 115 40 L 100 25 Z" fill="#ef4444" stroke="#334155" stroke-width="2" />

  <!-- Waves -->
  <path d="M 0 160 Q 25 150 50 160 Q 75 170 100 160 Q 125 150 150 160 Q 175 170 200 160 L 200 200 L 0 200 Z" fill="#1e40af" class="wave" />
  <path d="M 0 175 Q 25 165 50 175 Q 75 185 100 175 Q 125 165 150 175 Q 175 185 200 175 L 200 200 L 0 200 Z" fill="#1d4ed8" class="wave" style="animation-delay: -1.5s" />
</svg>`,
  },
];
