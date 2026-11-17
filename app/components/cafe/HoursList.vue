<template>
  <dl class="hours">
    <template v-for="h in cafeHours" :key="h.days">
      <dt>{{ h.days }}</dt>
      <dd>{{ h.time }}</dd>
    </template>
  </dl>
</template>

<style scoped>
.hours { display: grid; grid-template-columns: 1fr auto; gap: 0; margin: 0; }
.hours dt, .hours dd { margin: 0; padding: 12px 0; border-bottom: 1px dashed var(--c-line); }
.hours dt { font-weight: 700; color: var(--c-green); }
.hours dd { text-align: right; }
</style>
