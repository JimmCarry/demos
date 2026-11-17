<script setup lang="ts">
// Fades its content in once it scrolls into view. Content stays visible without JS
// and when the visitor prefers reduced motion.
const props = withDefaults(defineProps<{ tag?: string; delay?: number }>(), { tag: 'div', delay: 0 })

const el = ref<HTMLElement | null>(null)
const pending = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const node = el.value
  if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  // Only animate things that start below the fold.
  if (node.getBoundingClientRect().top < window.innerHeight * 0.9) return
  pending.value = true
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        pending.value = false
        observer?.disconnect()
      }
    },
    { threshold: 0.12 }
  )
  observer.observe(node)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <component :is="props.tag" ref="el" class="reveal" :class="{ 'is-pending': pending }" :style="{ transitionDelay: `${props.delay}ms` }">
    <slot />
  </component>
</template>

<style scoped>
.reveal {
  transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.reveal.is-pending {
  opacity: 0;
  transform: translateY(22px);
}
</style>
