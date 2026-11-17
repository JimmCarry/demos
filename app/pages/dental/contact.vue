<script setup lang="ts">
definePageMeta({ layout: 'dental' })
useSeoMeta({
  title: 'Contact & book · Linden Dental Studio',
  description:
    'Request an appointment at Linden Dental Studio, 42 Linden Row, Alderbrook. Opening hours, phone, email, parking and accessibility information.',
  ogTitle: 'Contact & book · Linden Dental Studio',
  ogDescription: 'Request an appointment or call us. New patients welcome.'
})

const details = [
  { icon: 'pin', label: 'Address', lines: [dentalContact.street, dentalContact.town] },
  { icon: 'phone', label: 'Phone', lines: [dentalContact.phone], href: dentalContact.phoneHref },
  { icon: 'mail', label: 'Email', lines: [dentalContact.email], href: `mailto:${dentalContact.email}` },
  { icon: 'bolt', label: 'Emergency line', lines: [dentalContact.emergencyPhone], href: dentalContact.emergencyHref }
]
</script>

<template>
  <div>
    <DentalPageHero
      eyebrow="Contact"
      title="Let’s find you a time"
      lead="Send us a request and we will reply within one working day. If something hurts right now, please call instead, and we will fit you in."
    />

    <section id="book" class="section book-section" aria-labelledby="book-title">
      <div class="container book">
        <div class="book__form">
          <h2 id="book-title" class="h2">Request an appointment</h2>
          <p class="lead">It takes about a minute. No payment details needed.</p>
          <DentalAppointmentForm />
        </div>

        <aside class="book__side" aria-label="Clinic details">
          <ul class="details">
            <li v-for="d in details" :key="d.label" class="detail">
              <span class="detail__icon"><DentalIcon :name="d.icon" /></span>
              <div>
                <h3>{{ d.label }}</h3>
                <p>
                  <template v-if="d.href">
                    <a :href="d.href">{{ d.lines[0] }}</a>
                  </template>
                  <template v-else>
                    <template v-for="(line, i) in d.lines" :key="line">{{ line }}<br v-if="i < d.lines.length - 1" /></template>
                  </template>
                </p>
              </div>
            </li>
          </ul>

          <div class="hours-card">
            <h3><DentalIcon name="clock" /> Opening hours</h3>
            <dl>
              <div v-for="h in dentalHours" :key="h.day">
                <dt>{{ h.day }}</dt>
                <dd>{{ h.time }}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>

    <section class="section section--tint" aria-labelledby="find-title">
      <div class="container find">
        <div>
          <span class="eyebrow">Getting here</span>
          <h2 id="find-title" class="h2">Easy to find, easy to reach</h2>
          <ul class="access">
            <li>
              <span class="access__icon"><DentalIcon name="car" /></span>
              <div>
                <h3>Parking</h3>
                <p>Free parking for patients behind the building, entered from Mill Lane. Six spaces, two of them for blue badge holders. Street parking on Linden Row is free after 5 pm.</p>
              </div>
            </li>
            <li>
              <span class="access__icon"><DentalIcon name="access" /></span>
              <div>
                <h3>Accessibility</h3>
                <p>Step-free entrance, a wide door and a ground-floor treatment room with wheelchair access. An accessible toilet is next to reception. Please tell us in advance if you need extra support.</p>
              </div>
            </li>
            <li>
              <span class="access__icon"><DentalIcon name="pin" /></span>
              <div>
                <h3>Public transport</h3>
                <p>Alderbrook Station is a two-minute walk. Bus lines 12 and 31 stop outside at Linden Row.</p>
              </div>
            </li>
          </ul>
        </div>
        <DentalClinicMap />
      </div>
    </section>
  </div>
</template>

<style scoped>
.book-section {
  scroll-margin-top: 72px;
  padding-top: 24px;
}

.book {
  display: grid;
  gap: 48px;
  align-items: start;
}

.book__form .lead {
  margin: 12px 0 28px;
}

.details {
  display: grid;
  gap: 20px;
  margin: 0 0 32px;
  padding: 0;
  list-style: none;
}

.detail {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.detail__icon,
.access__icon {
  display: grid;
  flex: none;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--teal-100);
  color: var(--teal-700);
}

.detail h3,
.access h3 {
  font-size: 1.05rem;
  letter-spacing: 0;
}

.detail p {
  color: var(--muted);
}

.detail a {
  color: var(--teal-700);
  font-weight: 700;
  overflow-wrap: anywhere;
}

.detail a:hover {
  text-decoration: underline !important;
}

.hours-card {
  padding: 24px;
  border-radius: var(--radius);
  background: var(--teal-50);
}

.hours-card h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.hours-card dl {
  display: grid;
  gap: 4px;
  margin: 0;
}

.hours-card dl div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2px 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--line);
}

.hours-card dl div:last-child {
  border-bottom: 0;
}

.hours-card dt {
  font-weight: 600;
}

.hours-card dd {
  margin: 0;
  color: var(--muted);
}

@media (min-width: 1000px) {
  .book {
    grid-template-columns: 1.35fr 0.65fr;
    gap: 64px;
  }
}

.find {
  display: grid;
  gap: 40px;
  align-items: center;
}

.access {
  display: grid;
  gap: 24px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
}

.access li {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.access p {
  margin-top: 2px;
  color: var(--muted);
}

@media (min-width: 1000px) {
  .find {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
}
</style>
