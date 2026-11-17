<script setup lang="ts">
defineProps<{ tags?: CafeDiet[] }>()

const labels: Record<CafeDiet, string> = { V: 'Vegetarian', VG: 'Vegan', GF: 'Gluten-free' }
</script>

<template>
  <span v-if="tags?.length" class="tags">
    <abbr v-for="tag in tags" :key="tag" :title="labels[tag]" class="tag" :class="`tag--${tag.toLowerCase()}`">
      {{ tag }}<span class="visually-hidden"> ({{ labels[tag] }})</span>
    </abbr>
  </span>
</template>

<style scoped>
.tags { display: inline-flex; gap: 5px; }
.tag {
  padding: 1px 8px;
  border-radius: 999px;
  background: #e1ebdc;
  color: #1f3529;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
}
.tag--gf { background: #f3dfc6; color: #6b3414; }
.tag--vg { background: #cfe0c8; }
</style>
