<template>
  <figure class="map">
    <svg viewBox="0 0 600 380" role="img" aria-labelledby="map-title map-desc">
      <title id="map-title">Map showing Linden Dental Studio</title>
      <desc id="map-desc">
        Stylised map: the clinic is on Linden Row, one block north of Alderbrook Station, next to Alder Park.
        Parking is behind the building, entered from Mill Lane.
      </desc>
      <rect width="600" height="380" fill="#eef6f5" />
      <rect x="360" y="40" width="190" height="100" rx="22" fill="#d5ebdc" />
      <circle cx="410" cy="85" r="12" fill="#b5dbc2" />
      <circle cx="455" cy="100" r="16" fill="#b5dbc2" />
      <circle cx="505" cy="70" r="10" fill="#b5dbc2" />
      <path d="M0 335c90-30 170 10 260-12s150-50 340-10v67H0Z" fill="#d3e8f1" />
      <g fill="#fff">
        <rect x="30" y="40" width="140" height="90" rx="12" />
        <rect x="200" y="40" width="130" height="90" rx="12" />
        <rect x="30" y="190" width="140" height="90" rx="12" />
        <rect x="200" y="190" width="130" height="90" rx="12" />
        <rect x="360" y="190" width="190" height="90" rx="12" />
      </g>
      <g fill="none" stroke="#fff" stroke-linecap="round">
        <path d="M0 160H600" stroke-width="26" />
        <path d="M185 0V320" stroke-width="22" />
        <path d="M345 0V320" stroke-width="22" />
      </g>
      <g fill="none" stroke="#c9dcda" stroke-width="2" stroke-dasharray="10 12">
        <path d="M0 160H600" />
        <path d="M185 0V320" />
        <path d="M345 0V320" />
      </g>
      <g font-family="Plus Jakarta Sans, system-ui, sans-serif" font-size="13" font-weight="600" fill="#4c6361">
        <text x="40" y="165">Linden Row</text>
        <text x="372" y="236">Mill Lane (parking)</text>
        <text x="380" y="130" fill="#2e7d5a">Alder Park</text>
        <text x="230" y="362" fill="#3f7389">Alder River</text>
        <text x="50" y="258">Alderbrook Station</text>
      </g>
      <g transform="translate(95 205)">
        <rect width="28" height="28" rx="8" fill="#17655f" />
        <text x="14" y="20" text-anchor="middle" font-size="15" font-weight="800" fill="#fff" font-family="system-ui, sans-serif">S</text>
      </g>
      <g transform="translate(375 200)">
        <rect width="28" height="28" rx="8" fill="#9b4320" />
        <text x="14" y="20" text-anchor="middle" font-size="16" font-weight="800" fill="#fff" font-family="system-ui, sans-serif">P</text>
      </g>
      <g transform="translate(265 98)">
        <path d="M0 40C-26 20-30-8-14-22a24 24 0 0 1 28 0C30-8 26 20 0 40Z" fill="#f0956a" stroke="#fff" stroke-width="3" />
        <circle cx="0" cy="-8" r="8" fill="#fff" />
      </g>
      <g transform="translate(265 22)">
        <rect x="-76" y="-15" width="152" height="28" rx="14" fill="#fff" />
        <text y="4" text-anchor="middle" font-size="13" font-weight="800" fill="#0f3f3b" font-family="Plus Jakarta Sans, system-ui, sans-serif">Linden Dental Studio</text>
      </g>
    </svg>
    <figcaption class="visually-hidden">Stylised map, not to scale.</figcaption>
  </figure>
</template>

<style scoped>
.map {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #eef6f5;
}

svg {
  width: 100%;
  height: auto;
}
</style>
