<svg xmlns="http://www.w3.org/2000/svg" width="450" height="90">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500&amp;family=Maple+Mono&amp;display=swap');
      .mainText { font-family: 'Cormorant Garamond', 'Maple Mono', serif; font-style: italic; }
      .subText { font-family: 'Maple Mono', monospace; }
    </style>
    <linearGradient id="atriumSky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDECFE">
        <animate attributeName="stop-color" values="#FDECFE; #E6F5FF; #FFF0F5; #FDECFE" dur="15s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#E6F5FF">
        <animate attributeName="stop-color" values="#E6F5FF; #FFF0F5; #FDECFE; #E6F5FF" dur="15s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
    <filter id="crystalLake" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="softGlow"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="2" result="ripple">
        <animate attributeName="baseFrequency" values="0.02 0.05; 0.03 0.06; 0.02 0.05" dur="10s" repeatCount="indefinite"/>
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="ripple" scale="4" xChannelSelector="R" yChannelSelector="G" result="waterEffect"/>
      <feMerge>
        <feMergeNode in="softGlow"/>
        <feMergeNode in="waterEffect"/>
      </feMerge>
    </filter>
    <symbol id="timeHeart" viewBox="0 0 50 50">
      <g>
        <path d="M25,2 A23,23 0 0 1 48,25 A23,23 0 0 1 25,48 A23,23 0 0 1 2,25 A23,23 0 0 1 25,2 Z" fill="none" stroke="#D8BFD8" stroke-width="1.5" opacity="0.6">
          <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="20s" repeatCount="indefinite" />
        </path>
        <path d="M25,10 L30,20 L25,30 L20,20 Z M25,10 L35,25 L25,30 L15,25 Z" fill="#FFE4E1" opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" from="360 25 25" to="0 25 25" dur="30s" repeatCount="indefinite" />
        </path>
        <circle cx="25" cy="25" r="8" fill="#FFF0F5">
          <animate attributeName="r" values="8; 9; 8" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8; 1; 0.8" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </symbol>
    <symbol id="guidingSpirit" viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="2" fill="white"/>
      <path d="M5,5 Q10,0 15,5 T25,5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.5">
        <animate attributeName="d" values="M5,5 Q10,0 15,5 T25,5; M5,5 Q10,10 15,5 T25,5; M5,5 Q10,0 15,5 T25,5" dur="2s" repeatCount="indefinite" />
      </path>
    </symbol>
    <path id="orbitPath" d="M 80,45 C 150,20 300,70 430,45" fill="none"/>
  </defs>
  <rect x="5" y="15" width="440" height="60" rx="30" ry="30" fill="url(#atriumSky)"/>
  <rect x="5" y="15" width="440" height="60" rx="30" ry="30" fill="url(#atriumSky)" opacity="0.5" filter="url(#crystalLake)"/>
  <use href="#timeHeart" x="20" y="20" width="50" height="50"/>
  <use href="#guidingSpirit" width="10" height="10" opacity="0.7">
    <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
      <mpath href="#orbitPath"/>
    </animateMotion>
  </use>
  <g transform="translate(85, 48)">
    <text class="mainText" font-size="20" fill="#6D28D9" opacity="0.9">Have a wonderful day!</text>
    <text class="subText" y="18" font-size="11" fill="#A78BFA" opacity="0.8">✧ 心情愉快，万事顺遂 ✧</text>
  </g>
</svg>
