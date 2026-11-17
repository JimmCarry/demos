<script setup lang="ts">
definePageMeta({ layout: 'cafe' })
useSeoMeta({
  title: 'Menu · Bramble & Bean',
  description: 'Coffee and tea, breakfast and brunch, lunch, and cakes baked in-house. Prices and dietary information.',
  ogTitle: 'Menu · Bramble & Bean',
  ogDescription: 'Coffee and tea, breakfast and brunch, lunch, and cakes baked in-house.'
})

const active = ref<string>('all')
const visible = computed(() => (active.value === 'all' ? cafeMenu : cafeMenu.filter((c) => c.id === active.value)))
const tabs = [{ id: 'all', title: 'Everything' }, ...cafeMenu.map((c) => ({ id: c.id, title: c.title }))]

const photos: Record<string, { src: string; alt: string }> = {
  coffee: { src: '/cafe/latte.jpg', alt: 'A flat white with leaf latte art' },
  brunch: { src: '/cafe/brunch.jpg', alt: 'Poached eggs on avocado toast' },
  lunch: { src: '/cafe/shelves.jpg', alt: 'Shelves of jars, bottles and tea tins behind the counter' },
  cakes: { src: '/cafe/cake-flatlay.jpg', alt: 'A slice of layered sponge cake with a cup of coffee' }
}
</script>

<template>
  <div>
    <CafePageHeader
      eyebrow="Our menu"
      title="Made here, every morning."
      intro="A short menu that changes with the seasons. Prices in US dollars, tax included. Ask us about allergens, we are happy to help."
    />

    <section class="section menu">
      <div class="container">
        <div class="toolbar">
          <div class="tabs" role="group" aria-label="Filter menu by category">
            <button
              v-for="t in tabs"
              :key="t.id"
              type="button"
              class="tab"
              :class="{ 'is-active': active === t.id }"
              :aria-pressed="active === t.id"
              @click="active = t.id"
            >
              {{ t.title }}
            </button>
          </div>
          <ul class="legend" aria-label="Dietary key">
            <li v-for="d in cafeDietLegend" :key="d.code"><CafeDietTags :tags="[d.code]" /> {{ d.label }}</li>
          </ul>
        </div>

        <section v-for="cat in visible" :id="cat.id" :key="cat.id" class="category" :aria-labelledby="`${cat.id}-title`">
          <div class="category__intro">
            <img :src="photos[cat.id]?.src" :alt="photos[cat.id]?.alt" width="600" height="400" loading="lazy" />
            <h2 :id="`${cat.id}-title`">{{ cat.title }}</h2>
            <p>{{ cat.note }}</p>
          </div>
          <ul class="items">
            <li v-for="item in cat.items" :key="item.name" class="item">
              <div class="item__top">
                <h3>{{ item.name }}</h3>
                <span class="item__dots" aria-hidden="true"></span>
                <span class="item__price">{{ cafePrice(item.price) }}</span>
              </div>
              <p>{{ item.description }} <CafeDietTags :tags="item.diet" /></p>
            </li>
          </ul>
        </section>

        <p class="fine-print">
          Please tell us about any allergies when you order. Our kitchen handles gluten, nuts, eggs and dairy, so we can’t
          guarantee a completely allergen-free environment.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.toolbar { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px; margin-bottom: 40px; }
.tabs { display: flex; flex-wrap: wrap; gap: 10px; }
.tab {
  padding: 10px 20px;
  border: 2px solid var(--c-green);
  border-radius: 999px;
  background: transparent;
  color: var(--c-green);
  font: 700 0.95rem var(--font-body);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}
.tab:hover { background: #e3dcc7; }
.tab.is-active { background: var(--c-green); color: #fff; }
.legend { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 18px; font-size: 0.9rem; color: var(--c-muted); }
.legend li { display: flex; align-items: center; gap: 6px; }

.category { display: grid; gap: 28px; padding-block: 36px; border-top: 1px solid var(--c-line); scroll-margin-top: 90px; }
.category__intro img { width: 100%; aspect-ratio: 3 / 2; object-fit: cover; border-radius: var(--radius-organic); margin-bottom: 20px; box-shadow: var(--shadow); }
.category__intro h2 { margin: 0 0 8px; }
.category__intro p { color: var(--c-muted); margin: 0; }
.items { display: grid; gap: 22px; align-content: start; }
.item__top { display: flex; align-items: baseline; gap: 10px; }
.item h3 { margin: 0; font-size: 1.2rem; }
.item__dots { flex: 1; border-bottom: 2px dotted var(--c-line); transform: translateY(-4px); }
.item__price { font: 700 1.1rem var(--font-heading); color: var(--c-terracotta-dark); }
.item p { margin: 4px 0 0; color: var(--c-muted); font-size: 0.98rem; }
.fine-print { margin-top: 24px; padding: 20px 24px; background: var(--c-oat); border-radius: var(--radius); font-size: 0.92rem; color: var(--c-muted); }

@media (min-width: 900px) {
  .category { grid-template-columns: 340px 1fr; gap: 64px; }
  .category__intro { position: sticky; top: 100px; align-self: start; }
  .items { grid-template-columns: 1fr; }
}
</style>
