<script setup lang="ts">
definePageMeta({ layout: 'law' })
useSeoMeta({
  title: 'Contact · Hartwell & Moss',
  description:
    'Visit our Fenmouth office, call, or request a consultation online. First 30-minute consultation is $90.',
  ogTitle: 'Contact · Hartwell & Moss',
  ogDescription: 'Office address, hours and a consultation request form.'
})

const methods = [
  { value: 'Phone', label: 'Phone' },
  { value: 'Email', label: 'Email' },
  { value: 'Either', label: 'Either is fine' }
]

const { values, errors, status, onBlur, onInput, submit, reset } = useContactForm(
  { name: '', email: '', phone: '', area: '', method: 'Phone', message: '', consent: '' },
  {
    name: [rules.required('Please enter your name.')],
    email: [rules.required('Please enter your email address.'), rules.email()],
    phone: [rules.required('Please enter a phone number.'), rules.phone()],
    area: [rules.required('Please choose an area of law.')],
    message: [
      rules.required('Please briefly describe your matter.'),
      rules.minLength(20, 'Please write at least 20 characters so we can route your request.')
    ],
    consent: [rules.required('Please confirm that you understand before submitting.')]
  }
)

const consentChecked = computed({
  get: () => values.consent === 'yes',
  set: (v: boolean) => {
    values.consent = v ? 'yes' : ''
    onInput('consent')
  }
})

function onSubmit() {
  submit()
}
</script>

<template>
  <div>
    <LawPageHero
      eyebrow="Contact"
      title="Speak to an attorney."
      lead="Call us, call in, or send a short description below. We reply to every enquiry within two working days."
      image="/law/hero-library.jpg"
      position="center 60%"
    />

    <div class="wrap grid">
      <section class="details" aria-labelledby="visit-h">
        <h2 id="visit-h" class="h3">Visit or call</h2>
        <address class="addr">
          <span v-for="line in lawContact.address" :key="line">{{ line }}</span>
        </address>
        <ul class="list">
          <li>
            <span class="k">Phone</span>
            <a :href="`tel:${lawContact.phoneHref}`">{{ lawContact.phone }}</a>
          </li>
          <li>
            <span class="k">Email</span>
            <a :href="`mailto:${lawContact.email}`">{{ lawContact.email }}</a>
          </li>
        </ul>

        <h3 class="h4">Office hours</h3>
        <table class="hours">
          <tbody>
            <tr v-for="h in lawContact.hours" :key="h.days">
              <th scope="row">{{ h.days }}</th>
              <td>{{ h.time }}</td>
            </tr>
          </tbody>
        </table>
        <p class="small">Evening and weekend appointments are available by arrangement.</p>

        <figure class="map">
          <svg viewBox="0 0 400 300" role="img" aria-labelledby="map-t map-d">
            <title id="map-t">Map of the Hartwell &amp; Moss office</title>
            <desc id="map-d">
              Stylised street map. The office is on Calloway Street, one block north of Fenmouth Station and beside
              Harbour Park.
            </desc>
            <rect width="400" height="300" fill="#ece5d3" />
            <path d="M0 238 Q90 214 160 248 T400 232 V300 H0Z" fill="#c8d2de" />
            <rect x="238" y="30" width="120" height="84" fill="#d6dcc4" />
            <text x="298" y="76" text-anchor="middle" font-size="11" fill="#4c5a45" font-family="Source Sans 3, sans-serif" letter-spacing="1.5">HARBOUR PARK</text>
            <g stroke="#fffdf8" stroke-width="12" fill="none">
              <path d="M0 150 H400" />
              <path d="M130 0 V300" />
              <path d="M230 0 V300" />
              <path d="M0 70 H210" stroke-width="8" />
            </g>
            <g stroke="#b9ae93" stroke-width="0.8" fill="none">
              <path d="M0 150 H400" />
              <path d="M130 0 V300" />
              <path d="M230 0 V300" />
            </g>
            <g fill="#d9d0ba" stroke="#b9ae93" stroke-width="0.8">
              <rect x="20" y="20" width="90" height="36" />
              <rect x="20" y="84" width="90" height="50" />
              <rect x="150" y="20" width="62" height="34" />
              <rect x="150" y="84" width="62" height="50" />
              <rect x="20" y="170" width="90" height="46" />
              <rect x="150" y="170" width="62" height="46" />
              <rect x="250" y="170" width="120" height="46" />
            </g>
            <g font-family="Source Sans 3, sans-serif" font-size="10" fill="#546074" letter-spacing="1">
              <text x="136" y="294" transform="rotate(-90 136 294)">CALLOWAY STREET</text>
              <text x="250" y="144">HIGH STREET</text>
              <text x="252" y="196" font-size="9">FENMOUTH STATION</text>
            </g>
            <g transform="translate(130 150)">
              <circle r="18" fill="#c9a961" opacity="0.3" />
              <circle r="9" fill="#0f1b2d" stroke="#c9a961" stroke-width="2" />
            </g>
            <g font-family="Cormorant Garamond, Georgia, serif">
              <rect x="150" y="116" width="110" height="24" fill="#0f1b2d" />
              <text x="205" y="133" text-anchor="middle" font-size="14" fill="#fff" font-weight="600">Hartwell &amp; Moss</text>
            </g>
          </svg>
          <figcaption class="small">One block north of Fenmouth Station. Street parking and a public car park on High Street.</figcaption>
        </figure>
      </section>

      <section id="consultation" class="formwrap" aria-labelledby="form-h">
        <h2 id="form-h" class="h3">Request a consultation</h2>
        <p class="formwrap__intro">
          Tell us briefly what you need help with. A 30-minute consultation costs $90, credited against fees if you
          instruct us. Please do not include confidential details yet.
        </p>

        <div v-if="status === 'sent'" class="success" role="status" tabindex="-1">
          <h3 class="success__h">Thank you, {{ values.name.split(' ')[0] }}.</h3>
          <p>
            Your request has been received. One of our attorneys will contact you by {{ values.method.toLowerCase() === 'either' ? 'phone or email' : values.method.toLowerCase() }}
            within two working days to arrange a time.
          </p>
          <p class="small">(This is a demo, so nothing was actually sent.)</p>
          <button type="button" class="btn btn--outline" @click="reset">Send another request</button>
        </div>

        <form v-else class="form" novalidate @submit.prevent="onSubmit">
          <div class="field">
            <label for="name">Full name</label>
            <input
              id="name"
              v-model="values.name"
              type="text"
              autocomplete="name"
              :aria-invalid="!!errors.name"
              :aria-describedby="errors.name ? 'name-error' : undefined"
              @blur="onBlur('name')"
              @input="onInput('name')"
            />
            <p v-if="errors.name" id="name-error" class="error">{{ errors.name }}</p>
          </div>

          <div class="row">
            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="values.email"
                type="email"
                autocomplete="email"
                :aria-invalid="!!errors.email"
                :aria-describedby="errors.email ? 'email-error' : undefined"
                @blur="onBlur('email')"
                @input="onInput('email')"
              />
              <p v-if="errors.email" id="email-error" class="error">{{ errors.email }}</p>
            </div>
            <div class="field">
              <label for="phone">Phone</label>
              <input
                id="phone"
                v-model="values.phone"
                type="tel"
                autocomplete="tel"
                :aria-invalid="!!errors.phone"
                :aria-describedby="errors.phone ? 'phone-error' : undefined"
                @blur="onBlur('phone')"
                @input="onInput('phone')"
              />
              <p v-if="errors.phone" id="phone-error" class="error">{{ errors.phone }}</p>
            </div>
          </div>

          <div class="field">
            <label for="area">Area of law</label>
            <select
              id="area"
              v-model="values.area"
              :aria-invalid="!!errors.area"
              :aria-describedby="errors.area ? 'area-error' : undefined"
              @blur="onBlur('area')"
              @change="onInput('area')"
            >
              <option value="" disabled>Select an area…</option>
              <option v-for="a in lawAreas" :key="a.id" :value="a.name">{{ a.name }}</option>
              <option value="Not sure">I am not sure</option>
            </select>
            <p v-if="errors.area" id="area-error" class="error">{{ errors.area }}</p>
          </div>

          <fieldset class="field fieldset">
            <legend>Preferred contact method</legend>
            <div class="radios">
              <label v-for="(m, i) in methods" :key="m.value" class="radio">
                <input :id="i === 0 ? 'method' : `method-${i}`" v-model="values.method" type="radio" name="method" :value="m.value" />
                <span>{{ m.label }}</span>
              </label>
            </div>
          </fieldset>

          <div class="field">
            <label for="message">Brief description of your matter</label>
            <textarea
              id="message"
              v-model="values.message"
              rows="5"
              :aria-invalid="!!errors.message"
              :aria-describedby="errors.message ? 'message-error' : 'message-hint'"
              @blur="onBlur('message')"
              @input="onInput('message')"
            />
            <p id="message-hint" class="hint">At least 20 characters. A few sentences is plenty.</p>
            <p v-if="errors.message" id="message-error" class="error">{{ errors.message }}</p>
          </div>

          <div class="field">
            <label class="check">
              <input
                id="consent"
                v-model="consentChecked"
                type="checkbox"
                :aria-invalid="!!errors.consent"
                :aria-describedby="errors.consent ? 'consent-error' : undefined"
                @blur="onBlur('consent')"
              />
              <span>I understand that submitting this form does not create an attorney-client relationship.</span>
            </label>
            <p v-if="errors.consent" id="consent-error" class="error">{{ errors.consent }}</p>
          </div>

          <button type="submit" class="btn" :disabled="status === 'sending'">
            {{ status === 'sending' ? 'Sending...' : 'Request consultation' }}
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: clamp(48px, 7vw, 90px) var(--gutter);
}
.grid {
  display: grid;
  gap: 56px;
}
@media (min-width: 960px) {
  .grid {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 80px;
    align-items: start;
  }
}

.h3 {
  margin-bottom: 18px;
  font-family: var(--font-head);
  font-size: clamp(1.9rem, 3.5vw, 2.5rem);
  font-weight: 500;
  line-height: 1.1;
  color: var(--navy);
}
.h4 {
  margin: 32px 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--brass);
}
.small {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--muted);
}

.addr {
  display: grid;
  font-style: normal;
  font-size: 1.15rem;
}
.list {
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
  display: grid;
  gap: 8px;
}
.list li {
  display: flex;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--rule);
}
.k {
  width: 64px;
  flex: none;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  padding-top: 3px;
}
.list a {
  color: var(--navy);
  font-weight: 600;
  overflow-wrap: anywhere;
}
.hours {
  width: 100%;
  border-collapse: collapse;
}
.hours th,
.hours td {
  padding: 8px 0;
  border-bottom: 1px solid var(--rule);
  text-align: left;
  font-weight: 400;
}
.hours td {
  text-align: right;
}

.map {
  margin-top: 36px;
}
.map svg {
  width: 100%;
  height: auto;
  border: 1px solid var(--rule);
}

.formwrap {
  scroll-margin-top: 96px;
  padding: clamp(24px, 4vw, 44px);
  background: var(--paper);
  border: 1px solid var(--rule);
  border-top: 3px solid var(--navy);
}
.formwrap__intro {
  margin-bottom: 28px;
  color: var(--muted);
}

.form {
  display: grid;
  gap: 22px;
}
.row {
  display: grid;
  gap: 22px;
}
@media (min-width: 640px) {
  .row {
    grid-template-columns: 1fr 1fr;
  }
}
.field {
  display: grid;
  gap: 6px;
  min-width: 0;
}
label,
legend {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--navy);
}
input[type='text'],
input[type='email'],
input[type='tel'],
select,
textarea {
  width: 100%;
  padding: 12px 14px;
  background: #fff;
  border: 1px solid #8b93a1;
  border-radius: var(--radius);
  color: var(--ink);
}
textarea {
  resize: vertical;
  min-height: 120px;
}
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--brass-bright);
  outline-offset: 1px;
  border-color: var(--navy);
}
[aria-invalid='true'] {
  border-color: #a4262c;
}
.error {
  font-size: 0.9rem;
  font-weight: 600;
  color: #a4262c;
}
.hint {
  font-size: 0.85rem;
  color: var(--muted);
}

.fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}
.radios {
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
}
.radio,
.check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-weight: 400;
  font-size: 1rem;
  color: var(--ink);
  cursor: pointer;
}
.radio input,
.check input {
  flex: none;
  width: 18px;
  height: 18px;
  margin: 3px 0 0;
  accent-color: var(--navy);
}

.btn {
  justify-self: start;
  padding: 14px 30px;
  background: var(--navy);
  color: #fff;
  border: 1px solid var(--navy);
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
}
.btn:hover:not(:disabled) {
  background: var(--navy-2);
}
.btn:disabled {
  opacity: 0.65;
  cursor: progress;
}
.btn--outline {
  margin-top: 20px;
  background: none;
  color: var(--navy);
}
.btn--outline:hover {
  background: var(--ivory) !important;
}

.success {
  padding: 28px;
  border-left: 3px solid var(--brass-bright);
  background: var(--ivory);
}
.success__h {
  margin-bottom: 10px;
  font-family: var(--font-head);
  font-size: 2rem;
  font-weight: 600;
  color: var(--navy);
}
</style>
