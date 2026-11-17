<script setup lang="ts">
// Weekly timetable with filters. One markup, two layouts: a list grouped by day on
// small screens and a seven-column week grid on wide screens.
const typeFilter = ref<YogaTypeId | 'all'>('all')
const levelFilter = ref<YogaLevel | 'all'>('all')

// Same value on server and client (useState), corrected to the visitor's real day on mount.
const todayIndex = useState('yoga-today', () => yogaTodayIndex())
onMounted(() => (todayIndex.value = yogaTodayIndex()))

const filtered = computed(() =>
  yogaSchedule.filter(
    (c) => (typeFilter.value === 'all' || c.type === typeFilter.value) && (levelFilter.value === 'all' || c.level === levelFilter.value)
  )
)

const days = computed(() =>
  yogaDays.map((name, index) => ({
    name,
    index,
    classes: filtered.value.filter((c) => c.day === index).sort((a, b) => a.start.localeCompare(b.start))
  }))
)

const typeOptions = [{ id: 'all' as const, name: 'All classes' }, ...yogaClassTypes.map((t) => ({ id: t.id, name: t.name }))]
const levelOptions = [{ id: 'all' as const, name: 'Any level' }, ...yogaLevels.map((l) => ({ id: l, name: l }))]

const endTime = (c: YogaClass) => {
  const [h = 0, m = 0] = c.start.split(':').map(Number)
  const total = h * 60 + m + c.minutes
  return yogaFormatTime(`${Math.floor(total / 60)}:${total % 60}`)
}

function reset() {
  typeFilter.value = 'all'
  levelFilter.value = 'all'
}
</script>

<template>
  <div class="tt">
    <div class="tt__filters">
      <div class="tt__group" role="group" aria-labelledby="tt-type-label">
        <p id="tt-type-label" class="tt__label">Class type</p>
        <div class="tt__chips">
          <button
            v-for="o in typeOptions"
            :key="o.id"
            type="button"
            class="chip"
            :aria-pressed="typeFilter === o.id"
            @click="typeFilter = o.id"
          >
            {{ o.name }}
          </button>
        </div>
      </div>
      <div class="tt__group" role="group" aria-labelledby="tt-level-label">
        <p id="tt-level-label" class="tt__label">Level</p>
        <div class="tt__chips">
          <button
            v-for="o in levelOptions"
            :key="o.id"
            type="button"
            class="chip"
            :aria-pressed="levelFilter === o.id"
            @click="levelFilter = o.id"
          >
            {{ o.name }}
          </button>
        </div>
      </div>
    </div>

    <p class="tt__status" role="status" aria-live="polite">
      {{ filtered.length }} {{ filtered.length === 1 ? 'class' : 'classes' }} a week
      <template v-if="typeFilter !== 'all' || levelFilter !== 'all'">
        &middot; <button type="button" class="tt__reset" @click="reset">Clear filters</button>
      </template>
    </p>

    <div v-if="filtered.length === 0" class="tt__empty">
      <p>
        No classes match those filters. Try a different level or
        <button type="button" class="tt__reset" @click="reset">clear the filters</button>.
      </p>
    </div>

    <div v-else class="tt__week">
      <section v-for="d in days" :key="d.name" class="day" :class="{ 'is-today': d.index === todayIndex }" :aria-labelledby="`day-${d.index}`">
        <h3 :id="`day-${d.index}`" class="day__name">
          {{ d.name }}
          <span v-if="d.index === todayIndex" class="day__today">Today</span>
        </h3>
        <ul v-if="d.classes.length" class="day__list">
          <li v-for="c in d.classes" :key="c.id" class="slot" :class="`slot--${c.type}`">
            <p class="slot__time">
              <time>{{ yogaFormatTime(c.start) }}</time>
              <span class="slot__dur">{{ c.minutes }} min</span>
            </p>
            <p class="slot__name">{{ yogaTypeById(c.type).name }}</p>
            <p class="slot__meta">{{ yogaTeacherById(c.teacher).name }}</p>
            <p class="slot__level">{{ c.level }}</p>
            <span class="visually-hidden">Ends at {{ endTime(c) }}</span>
          </li>
        </ul>
        <p v-else class="day__none">No matching classes</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.tt__filters {
  display: grid;
  gap: 20px;
  padding: 24px;
  border-radius: var(--radius);
  background: var(--paper);
  box-shadow: var(--shadow);
}
@media (min-width: 900px) {
  .tt__filters {
    grid-template-columns: 1.6fr 1fr;
    gap: 40px;
  }
}
.tt__label {
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.tt__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  padding: 8px 16px;
  border: 1.5px solid var(--line);
  border-radius: 999px;
  background: var(--sand);
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.chip:hover {
  border-color: var(--sage);
}
.chip[aria-pressed='true'] {
  border-color: var(--sage-deep);
  background: var(--sage-deep);
  color: #fff;
}
.tt__status {
  margin: 20px 4px;
  color: var(--muted);
  font-size: 0.95rem;
}
.tt__reset {
  padding: 0;
  border: 0;
  background: none;
  color: var(--clay-deep);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
.tt__empty {
  padding: 48px 24px;
  border: 1.5px dashed var(--sage);
  border-radius: var(--radius);
  text-align: center;
  color: var(--muted);
}

.tt__week {
  display: grid;
  gap: 18px;
}
.day {
  padding: 20px;
  border: 1.5px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper);
}
.day.is-today {
  border-color: var(--clay);
  box-shadow: 0 0 0 4px rgb(201 139 116 / 0.14);
}
.day__name {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 1.5rem;
}
.day__today {
  padding: 2px 10px;
  border-radius: 999px;
  background: var(--blush);
  color: var(--clay-deep);
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.day__list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.day__none {
  color: var(--muted);
  font-size: 0.92rem;
}
.slot {
  display: grid;
  gap: 2px;
  padding: 12px 14px 12px 16px;
  border-left: 4px solid var(--sage);
  border-radius: 6px 14px 14px 6px;
  background: var(--sand);
}
.slot--mat-pilates,
.slot--reformer {
  border-left-color: var(--clay);
}
.slot--yin,
.slot--restorative {
  border-left-color: #b9a58a;
}
.slot__time {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0 8px;
  color: var(--sage-deep);
  font-weight: 600;
  font-size: 0.95rem;
}
.slot__dur {
  color: var(--muted);
  font-weight: 400;
  font-size: 0.85rem;
}
.slot__name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  line-height: 1.2;
}
.slot__meta {
  color: var(--muted);
  font-size: 0.92rem;
}
.slot__level {
  width: fit-content;
  margin-top: 6px;
  padding: 1px 10px;
  border-radius: 999px;
  background: var(--paper);
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 500;
}

@media (min-width: 640px) {
  .tt__week {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1000px) {
  .tt__week {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 1280px) {
  .tt__week {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 10px;
  }
  .day {
    padding: 14px 10px;
  }
  .day__name {
    flex-wrap: wrap;
    font-size: 1.15rem;
  }
  .slot__name {
    font-size: 1.05rem;
  }
}
</style>
