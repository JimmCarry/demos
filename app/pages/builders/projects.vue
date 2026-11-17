<script setup lang="ts">
import type { BuildersProject } from '~/utils/builders'

definePageMeta({ layout: 'builders' })
useSeoMeta({
  title: 'Projects · Ironbark Builders',
  description: 'A gallery of recent renovations, extensions, kitchens, bathrooms and commercial fit-outs by Ironbark Builders.',
  ogTitle: 'Projects · Ironbark Builders',
  ogDescription: 'Recent work: renovations, extensions, kitchens and bathrooms, and commercial fit-outs.'
})

const active = ref<(typeof buildersCategories)[number]>('All')
const visible = computed(() =>
  active.value === 'All' ? buildersProjects : buildersProjects.filter((p) => p.category === active.value)
)

const dialog = ref<HTMLDialogElement | null>(null)
const selected = ref<BuildersProject | null>(null)
let opener: HTMLElement | null = null

function openProject(p: BuildersProject, e: Event) {
  opener = e.currentTarget as HTMLElement
  selected.value = p
  nextTick(() => dialog.value?.showModal())
}

function closeDialog() {
  dialog.value?.close()
}

function onClose() {
  selected.value = null
  opener?.focus()
}

function onDialogClick(e: MouseEvent) {
  if (e.target === dialog.value) closeDialog()
}
</script>

<template>
  <div>
    <BuildersPageHero
      eyebrow="Projects"
      title="Work we're proud of"
      text="A small selection of recent jobs. Every one was finished on the agreed price. Filter by type or open a project for the details."
    />

    <section class="section" aria-labelledby="gallery-title">
      <div class="container">
        <h2 id="gallery-title" class="visually-hidden">Project gallery</h2>

        <div class="filters" role="group" aria-label="Filter projects by category">
          <button
            v-for="c in buildersCategories"
            :key="c"
            type="button"
            class="filters__btn"
            :aria-pressed="active === c"
            @click="active = c"
          >
            {{ c }}
          </button>
        </div>
        <p class="count" role="status">Showing {{ visible.length }} {{ visible.length === 1 ? 'project' : 'projects' }}</p>

        <ul class="grid">
          <li v-for="p in visible" :key="p.id">
            <article class="card">
              <img :src="p.image" :alt="p.alt" width="800" height="600" loading="lazy" />
              <div class="card__body">
                <p class="card__cat">{{ p.category }}</p>
                <h3>{{ p.title }}</h3>
                <p class="card__meta">
                  <span>{{ p.location }}</span>
                  <span>{{ p.duration }}</span>
                </p>
                <p>{{ p.summary }}</p>
                <button type="button" class="card__more" @click="openProject(p, $event)">
                  View details<span class="visually-hidden">: {{ p.title }}</span>
                </button>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>

    <dialog
      ref="dialog"
      class="modal"
      aria-labelledby="modal-title"
      @close="onClose"
      @click="onDialogClick"
    >
      <div v-if="selected" class="modal__inner">
        <img :src="selected.image" :alt="selected.alt" width="800" height="600" />
        <div class="modal__body">
          <p class="eyebrow">{{ selected.category }}</p>
          <h2 id="modal-title">{{ selected.title }}</h2>
          <p class="modal__meta">{{ selected.location }} · {{ selected.duration }}</p>
          <p>{{ selected.details }}</p>
          <div class="modal__actions">
            <NuxtLink to="/builders/contact#quote" class="btn btn--dark btn--small">Quote a similar job</NuxtLink>
            <button type="button" class="btn btn--small modal__close" @click="closeDialog">Close</button>
          </div>
        </div>
      </div>
    </dialog>

    <BuildersCtaBand />
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filters__btn {
  padding: 12px 20px;
  border: 3px solid var(--b-ink);
  background: var(--b-white);
  color: var(--b-ink);
  font-family: var(--b-font-head);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
}

.filters__btn:hover {
  background: var(--b-concrete);
}

.filters__btn[aria-pressed='true'] {
  background: var(--b-ink);
  color: var(--b-accent);
}

.count {
  margin: 18px 0 24px;
  color: var(--b-muted);
  font-weight: 500;
}

.grid {
  display: grid;
  gap: 28px;
}

@media (min-width: 700px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1050px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--b-concrete);
  border-bottom: 6px solid var(--b-ink);
}

.card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 22px 22px;
}

.card__cat {
  align-self: flex-start;
  margin-bottom: 10px;
  padding: 2px 8px;
  background: var(--b-ink);
  color: var(--b-accent);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.card h3 {
  font-size: 1.8rem;
  line-height: 1.05;
}

.card__meta {
  display: flex;
  gap: 16px;
  margin: 10px 0 12px;
  font-weight: 600;
}

.card__meta span + span::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 16px;
  background: var(--b-accent-dark);
}

.card__more {
  margin-top: auto;
  align-self: flex-start;
  padding: 0;
  border: 0;
  border-bottom: 3px solid var(--b-accent-dark);
  background: none;
  color: var(--b-ink);
  font-family: var(--b-font-head);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
}

.card__more:hover {
  background: var(--b-accent);
}

.modal {
  width: min(960px, calc(100vw - 24px));
  max-height: calc(100vh - 24px);
  padding: 0;
  border: 0;
  border-top: 8px solid var(--b-accent);
  background: var(--b-white);
  color: var(--b-ink);
  overflow: auto;
}

.modal::backdrop {
  background: rgb(22 24 26 / 0.82);
}

.modal__inner {
  display: grid;
}

.modal__inner img {
  width: 100%;
  height: 100%;
  max-height: 320px;
  object-fit: cover;
}

.modal__body {
  padding: 28px;
}

.modal h2 {
  font-size: clamp(2rem, 5vw, 3rem);
}

.modal__meta {
  margin: 10px 0 16px;
  font-weight: 600;
  color: var(--b-muted);
}

.modal__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.modal .modal__close {
  background: transparent;
  border-color: var(--b-ink);
}

@media (min-width: 800px) {
  .modal__inner {
    grid-template-columns: 1fr 1fr;
  }

  .modal__inner img {
    max-height: none;
  }
}
</style>
