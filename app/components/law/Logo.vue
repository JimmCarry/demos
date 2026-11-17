<template>
  <span class="logo">
    <svg class="logo__mark" width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="32" height="32" stroke="#c9a961" stroke-width="1" />
      <rect x="4.5" y="4.5" width="25" height="25" stroke="#c9a961" stroke-width="0.5" opacity="0.6" />
      <path d="M10 24V10M24 24V10M10 17h14" stroke="#c9a961" stroke-width="1.6" stroke-linecap="square" />
    </svg>
    <span class="logo__text">
      <span class="logo__name">Hartwell &amp; Moss</span>
      <span class="logo__sub">Attorneys at Law</span>
    </span>
  </span>
</template>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #fff;
}
.logo__text {
  display: grid;
  line-height: 1.1;
}
.logo__name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.55rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.logo__sub {
  margin-top: 3px;
  font-family: 'Source Sans 3', system-ui, sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #c9a961;
}
</style>
