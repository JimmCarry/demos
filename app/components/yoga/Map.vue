<template>
  <figure class="map">
    <svg viewBox="0 0 600 420" role="img" aria-labelledby="yoga-map-title yoga-map-desc" preserveAspectRatio="xMidYMid slice">
      <title id="yoga-map-title">Map of Still Water Yoga</title>
      <desc id="yoga-map-desc">
        A simplified map. The studio is at 14 Alder Lane, one block north of Millbrook Park and two minutes from the river
        footbridge and the Mill Street bus stop.
      </desc>
      <rect width="600" height="420" fill="#efe6d8" />
      <!-- park -->
      <path d="M40 250h210v140H40z" fill="#dbe5d3" rx="24" />
      <circle cx="90" cy="300" r="14" fill="#c4d3bb" />
      <circle cx="150" cy="340" r="18" fill="#c4d3bb" />
      <circle cx="205" cy="290" r="12" fill="#c4d3bb" />
      <!-- river -->
      <path d="M-10 70C120 40 180 120 300 100S520 30 620 80V135C520 90 430 160 300 160S110 90 -10 125Z" fill="#cfe0e0" />
      <!-- streets -->
      <g fill="none" stroke="#fffbf5" stroke-linecap="round">
        <path d="M0 215H600" stroke-width="16" />
        <path d="M330 0V420" stroke-width="16" />
        <path d="M120 150V420" stroke-width="10" />
        <path d="M470 150V420" stroke-width="10" />
        <path d="M330 310H600" stroke-width="10" />
        <path d="M120 215L330 140" stroke-width="0" />
      </g>
      <!-- footbridge -->
      <path d="M330 80V160" stroke="#c98b74" stroke-width="6" stroke-dasharray="2 8" stroke-linecap="round" />
      <!-- blocks -->
      <g fill="#e6dac7">
        <rect x="350" y="235" width="95" height="55" rx="10" />
        <rect x="490" y="235" width="90" height="55" rx="10" />
        <rect x="350" y="330" width="95" height="70" rx="10" />
        <rect x="490" y="330" width="90" height="70" rx="10" />
        <rect x="350" y="170" width="95" height="28" rx="10" />
        <rect x="490" y="170" width="90" height="28" rx="10" />
        <rect x="140" y="170" width="170" height="28" rx="10" />
      </g>
      <!-- street labels -->
      <g font-family="Jost, sans-serif" font-size="13" fill="#655e54" letter-spacing="1">
        <text x="20" y="211">MILL STREET</text>
        <text x="338" y="395" transform="rotate(-90 338 395)">ALDER LANE</text>
        <text x="50" y="270" fill="#46634a">Millbrook Park</text>
        <text x="420" y="75" fill="#5d8483" font-style="italic">Little Weir river</text>
      </g>
      <!-- bus stop -->
      <g transform="translate(240 190)">
        <circle r="11" fill="#46634a" />
        <text y="4" text-anchor="middle" font-family="Jost, sans-serif" font-size="11" font-weight="600" fill="#fff">B</text>
      </g>
      <!-- pin -->
      <g transform="translate(330 215)">
        <circle r="30" fill="#c98b74" opacity=".22" />
        <path d="M0 0c-13-17-19-26-19-35a19 19 0 0 1 38 0c0 9-6 18-19 35z" transform="translate(0 -2)" fill="#9b533a" />
        <circle cy="-37" r="7" fill="#fffbf5" />
      </g>
      <g transform="translate(350 160)">
        <rect width="138" height="30" rx="15" fill="#fffbf5" stroke="#e3d8c7" />
        <text x="69" y="20" text-anchor="middle" font-family="Jost, sans-serif" font-size="13" font-weight="600" fill="#34302b">Still Water Yoga</text>
      </g>
    </svg>
    <figcaption>Stylised map, not to scale. Bus stop B is 2 minutes away on Mill Street.</figcaption>
  </figure>
</template>

<style scoped>
.map {
  overflow: hidden;
  border: 1.5px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper);
}
svg {
  width: 100%;
  height: auto;
  aspect-ratio: 600 / 420;
}
figcaption {
  padding: 12px 18px;
  color: var(--muted);
  font-size: 0.88rem;
}
</style>
