<script setup lang="ts">
definePageMeta({ layout: 'cafe' })
useSeoMeta({
  title: 'Contact & booking · Bramble & Bean',
  description: 'Find Bramble & Bean on Alder Lane, see our opening hours and book a table online.',
  ogTitle: 'Contact & booking · Bramble & Bean',
  ogDescription: 'Find us on Alder Lane, see our opening hours and book a table.'
})

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
const guestOptions = Array.from({ length: 8 }, (_, i) => String(i + 1))

const { values, errors, status, onBlur, onInput, submit, reset } = useContactForm(
  { name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' },
  {
    name: [rules.required('Please tell us your name.'), rules.minLength(2)],
    email: [rules.required('Please enter your email address.'), rules.email()],
    phone: [rules.required('Please enter a phone number in case we need to reach you.'), rules.phone()],
    date: [rules.required('Please choose a date.'), rules.futureDate()],
    time: [rules.required('Please choose a time.')],
    guests: [rules.required('Please choose the number of guests.')]
  }
)

const minDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)

const confirmation = ref({ name: '', date: '', time: '', guests: '' })
async function onSubmit() {
  const snapshot = { name: values.name, date: values.date, time: values.time, guests: values.guests }
  if (await submit()) confirmation.value = snapshot
}
function newBooking() {
  reset()
}
</script>

<template>
  <div>
    <CafePageHeader
      eyebrow="Contact & booking"
      title="Come by, call, or save a table."
      intro="We keep most tables free for walk-ins, but booking is a good idea for weekend brunch and groups of four or more."
    />

    <section class="section">
      <div class="container contact__grid">
        <div class="info">
          <h2 class="info__title">Find us</h2>
          <address>
            <strong>Bramble &amp; Bean</strong><br />
            {{ cafeContact.street }}<br />
            {{ cafeContact.town }}
          </address>
          <p class="info__links">
            <a :href="cafeContact.phoneHref">{{ cafeContact.phone }}</a><br />
            <a :href="cafeContact.emailHref">{{ cafeContact.email }}</a>
          </p>

          <h2 class="info__title">Opening hours</h2>
          <CafeHoursList />

          <figure class="map">
            <svg viewBox="0 0 400 280" role="img" aria-label="Stylised map: Bramble & Bean on Alder Lane, a two minute walk from Millbrook station">
              <rect width="400" height="280" fill="#ebe0cb" />
              <path d="M0 210c60-10 90-50 170-50s120 40 230 20v100H0z" fill="#d6dfc6" />
              <ellipse cx="318" cy="64" rx="58" ry="36" fill="#cfe0c8" />
              <text x="318" y="68" text-anchor="middle" font-size="11" fill="#2c4a3a" font-family="DM Sans, sans-serif">Millbrook Green</text>
              <g fill="none" stroke="#fcf8ef" stroke-width="16" stroke-linecap="round">
                <path d="M-10 120H410" />
                <path d="M150 -10V290" />
                <path d="M270 120c10 40 40 70 80 90" />
              </g>
              <g fill="none" stroke="#c9b99a" stroke-width="1.5" stroke-dasharray="5 6">
                <path d="M-10 120H410" />
                <path d="M150 -10V290" />
              </g>
              <text x="190" y="108" font-size="12" fill="#5e564a" font-family="DM Sans, sans-serif" font-weight="700">ALDER LANE</text>
              <text x="12" y="150" font-size="11" fill="#5e564a" font-family="DM Sans, sans-serif">Mill Street</text>
              <rect x="40" y="60" width="70" height="38" rx="6" fill="#d9ccb3" />
              <rect x="190" y="136" width="70" height="40" rx="6" fill="#d9ccb3" />
              <rect x="40" y="150" width="60" height="36" rx="6" fill="#d9ccb3" />
              <g transform="translate(115 85)">
                <path d="M0 0c-14 0-22 10-22 22 0 16 22 36 22 36s22-20 22-36C22 10 14 0 0 0z" fill="#b04f2c" />
                <circle cx="0" cy="21" r="8" fill="#fcf8ef" />
              </g>
              <text x="115" y="160" text-anchor="middle" font-size="13" font-weight="700" fill="#2c4a3a" font-family="DM Sans, sans-serif">Bramble &amp; Bean</text>
              <g transform="translate(325 170)">
                <rect width="46" height="24" rx="6" fill="#2c4a3a" />
                <text x="23" y="16" text-anchor="middle" font-size="10" fill="#fcf8ef" font-family="DM Sans, sans-serif">Station</text>
              </g>
            </svg>
            <figcaption>Two minutes’ walk from Millbrook station. Free bike racks outside.</figcaption>
          </figure>
        </div>

        <div id="booking" class="booking">
          <h2>Book a table</h2>

          <div v-if="status === 'sent'" class="success" role="status">
            <h3>Thank you, {{ confirmation.name }}!</h3>
            <p>
              We’ve noted your request for {{ confirmation.guests }}
              {{ confirmation.guests === '1' ? 'guest' : 'guests' }} on {{ confirmation.date }} at {{ confirmation.time }}.
              A confirmation will arrive in your inbox shortly. (This is a demo, so nothing was actually sent.)
            </p>
            <button type="button" class="btn btn--outline" @click="newBooking">Make another booking</button>
          </div>

          <form v-else novalidate @submit.prevent="onSubmit">
            <div class="field">
              <label for="name">Name</label>
              <input id="name" v-model="values.name" type="text" autocomplete="name" :aria-invalid="!!errors.name" :aria-describedby="errors.name ? 'name-error' : undefined" @blur="onBlur('name')" @input="onInput('name')" />
              <p v-if="errors.name" id="name-error" class="error">{{ errors.name }}</p>
            </div>

            <div class="row">
              <div class="field">
                <label for="email">Email</label>
                <input id="email" v-model="values.email" type="email" autocomplete="email" :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'email-error' : undefined" @blur="onBlur('email')" @input="onInput('email')" />
                <p v-if="errors.email" id="email-error" class="error">{{ errors.email }}</p>
              </div>
              <div class="field">
                <label for="phone">Phone</label>
                <input id="phone" v-model="values.phone" type="tel" autocomplete="tel" :aria-invalid="!!errors.phone" :aria-describedby="errors.phone ? 'phone-error' : undefined" @blur="onBlur('phone')" @input="onInput('phone')" />
                <p v-if="errors.phone" id="phone-error" class="error">{{ errors.phone }}</p>
              </div>
            </div>

            <div class="row row--3">
              <div class="field">
                <label for="date">Date</label>
                <input id="date" v-model="values.date" type="date" :min="minDate" :aria-invalid="!!errors.date" :aria-describedby="errors.date ? 'date-error' : undefined" @blur="onBlur('date')" @input="onInput('date')" @change="onInput('date')" />
                <p v-if="errors.date" id="date-error" class="error">{{ errors.date }}</p>
              </div>
              <div class="field">
                <label for="time">Time</label>
                <select id="time" v-model="values.time" :aria-invalid="!!errors.time" :aria-describedby="errors.time ? 'time-error' : undefined" @blur="onBlur('time')" @change="onInput('time')">
                  <option value="" disabled>Choose a time</option>
                  <option v-for="t in timeSlots" :key="t" :value="t">{{ t }}</option>
                </select>
                <p v-if="errors.time" id="time-error" class="error">{{ errors.time }}</p>
              </div>
              <div class="field">
                <label for="guests">Guests</label>
                <select id="guests" v-model="values.guests" :aria-invalid="!!errors.guests" :aria-describedby="errors.guests ? 'guests-error' : undefined" @blur="onBlur('guests')" @change="onInput('guests')">
                  <option v-for="g in guestOptions" :key="g" :value="g">{{ g }} {{ g === '1' ? 'guest' : 'guests' }}</option>
                </select>
                <p v-if="errors.guests" id="guests-error" class="error">{{ errors.guests }}</p>
              </div>
            </div>

            <div class="field">
              <label for="notes">Notes <span class="optional">(optional)</span></label>
              <textarea id="notes" v-model="values.notes" rows="3" placeholder="High chair, allergies, a birthday cake…"></textarea>
            </div>

            <p class="hint">Bigger group? Call us on {{ cafeContact.phone }}.</p>
            <button type="submit" class="btn btn--primary" :disabled="status === 'sending'">
              {{ status === 'sending' ? 'Sending...' : 'Request a table' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact__grid { display: grid; gap: 48px; align-items: start; }
@media (min-width: 960px) { .contact__grid { grid-template-columns: 1fr 1.1fr; gap: 72px; } }

.info__title { font-size: 1.5rem; margin: 0 0 12px; }
.info address { margin-bottom: 12px; }
.info__links { margin-bottom: 36px; }
.info__links a, .info address a { color: var(--c-terracotta-dark); font-weight: 700; }
.map { margin: 36px 0 0; }
.map svg { width: 100%; height: auto; border-radius: var(--radius); border: 1px solid var(--c-line); display: block; }
.map figcaption { margin-top: 8px; font-size: 0.9rem; color: var(--c-muted); }

.booking { padding: clamp(24px, 4vw, 40px); background: var(--c-paper); border: 1px solid var(--c-line); border-radius: 28px; box-shadow: var(--shadow); scroll-margin-top: 96px; }
.booking h2 { margin: 0 0 20px; }
.row { display: grid; gap: 0 16px; }
.field { margin-bottom: 18px; }
label { display: block; margin-bottom: 6px; font-weight: 700; color: var(--c-green); font-size: 0.95rem; }
.optional { font-weight: 400; color: var(--c-muted); }
input, select, textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid #a89a7e;
  border-radius: 12px;
  background: #fff;
  color: var(--c-ink);
  font: inherit;
}
textarea { resize: vertical; }
input[aria-invalid='true'], select[aria-invalid='true'] { border-color: #b3261e; background: #fff6f4; }
.error { margin: 6px 0 0; color: #a3231b; font-size: 0.9rem; font-weight: 500; }
.hint { color: var(--c-muted); font-size: 0.92rem; }
@media (min-width: 560px) {
  .row { grid-template-columns: 1fr 1fr; }
  .row--3 { grid-template-columns: 1.2fr 1fr 1fr; }
}
.success { padding: 8px 0; }
.success h3 { margin: 0 0 12px; }
</style>
