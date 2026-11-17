<script setup lang="ts">
definePageMeta({ layout: 'builders' })
useSeoMeta({
  title: 'Contact & free quote · Ironbark Builders',
  description: 'Request a free, no-obligation quote from Ironbark Builders, or find our address, opening hours and service area.',
  ogTitle: 'Contact & free quote · Ironbark Builders',
  ogDescription: 'Request a free quote. Fixed-price quotes within 5 working days.'
})

const projectTypes = ['Home renovation', 'Extension or loft', 'Kitchen', 'Bathroom', 'Roofing', 'Commercial fit-out', 'Something else']
const budgets = ['Under $10,000', '$10,000 – $30,000', '$30,000 – $75,000', '$75,000 – $150,000', 'Over $150,000', 'Not sure yet']
const starts = ['ASAP', '1-3 months', 'Later']

const { values, errors, status, onBlur, onInput, submit, reset } = useContactForm(
  { name: '', email: '', phone: '', type: '', budget: '', zip: '', start: '', message: '' },
  {
    name: [rules.required('Please tell us your name.')],
    email: [rules.required('Please enter your email address.'), rules.email()],
    phone: [rules.required('Please enter a phone number.'), rules.phone()],
    type: [rules.required('Please choose a project type.')],
    budget: [rules.required('Please choose a budget range.')],
    zip: [
      rules.required('Please enter your ZIP code.'),
      (v) => (!v.trim() || /^\d{5}$/.test(v.trim()) ? null : 'Please enter a 5-digit ZIP code.')
    ],
    start: [rules.required('Please choose a preferred start.')],
    message: [rules.required('Please describe your project.'), rules.minLength(20, 'Please write at least 20 characters so we can quote properly.')]
  }
)

</script>

<template>
  <div>
    <BuildersPageHero
      eyebrow="Contact"
      title="Let's talk about your build"
      text="Send us the details below, or just call. Quotes are free, fixed-price and back within 5 working days."
    />

    <section class="section" aria-labelledby="quote">
      <div class="container layout">
        <div id="quote" class="formwrap">
          <p class="eyebrow">Free quote</p>
          <h2 class="h2">Request a quote</h2>

          <div v-if="status === 'sent'" class="success" role="status" tabindex="-1">
            <h3>Thanks, {{ values.name.split(' ')[0] }}.</h3>
            <p>
              We have your request and will call you within one working day to book a site visit.
              (This is a demo, so nothing was actually sent.)
            </p>
            <button type="button" class="btn btn--dark btn--small" @click="reset">Send another request</button>
          </div>

          <form v-else novalidate class="form" @submit.prevent="submit">
            <div class="field">
              <label for="name">Full name</label>
              <input
                id="name"
                v-model="values.name"
                type="text"
                autocomplete="name"
                :aria-invalid="!!errors.name"
                :aria-describedby="errors.name ? 'name-err' : undefined"
                @blur="onBlur('name')"
                @input="onInput('name')"
              />
              <p v-if="errors.name" id="name-err" class="err">{{ errors.name }}</p>
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
                  :aria-describedby="errors.email ? 'email-err' : undefined"
                  @blur="onBlur('email')"
                  @input="onInput('email')"
                />
                <p v-if="errors.email" id="email-err" class="err">{{ errors.email }}</p>
              </div>
              <div class="field">
                <label for="phone">Phone</label>
                <input
                  id="phone"
                  v-model="values.phone"
                  type="tel"
                  autocomplete="tel"
                  :aria-invalid="!!errors.phone"
                  :aria-describedby="errors.phone ? 'phone-err' : undefined"
                  @blur="onBlur('phone')"
                  @input="onInput('phone')"
                />
                <p v-if="errors.phone" id="phone-err" class="err">{{ errors.phone }}</p>
              </div>
            </div>

            <div class="row">
              <div class="field">
                <label for="type">Project type</label>
                <select
                  id="type"
                  v-model="values.type"
                  :aria-invalid="!!errors.type"
                  :aria-describedby="errors.type ? 'type-err' : undefined"
                  @blur="onBlur('type')"
                  @change="onInput('type')"
                >
                  <option value="" disabled>Select…</option>
                  <option v-for="t in projectTypes" :key="t">{{ t }}</option>
                </select>
                <p v-if="errors.type" id="type-err" class="err">{{ errors.type }}</p>
              </div>
              <div class="field">
                <label for="budget">Budget range</label>
                <select
                  id="budget"
                  v-model="values.budget"
                  :aria-invalid="!!errors.budget"
                  :aria-describedby="errors.budget ? 'budget-err' : undefined"
                  @blur="onBlur('budget')"
                  @change="onInput('budget')"
                >
                  <option value="" disabled>Select…</option>
                  <option v-for="b in budgets" :key="b">{{ b }}</option>
                </select>
                <p v-if="errors.budget" id="budget-err" class="err">{{ errors.budget }}</p>
              </div>
            </div>

            <div class="row">
              <div class="field">
                <label for="zip">Project ZIP code</label>
                <input
                  id="zip"
                  v-model="values.zip"
                  type="text"
                  inputmode="numeric"
                  autocomplete="postal-code"
                  maxlength="5"
                  :aria-invalid="!!errors.zip"
                  :aria-describedby="errors.zip ? 'zip-err' : undefined"
                  @blur="onBlur('zip')"
                  @input="onInput('zip')"
                />
                <p v-if="errors.zip" id="zip-err" class="err">{{ errors.zip }}</p>
              </div>
              <div class="field">
                <label for="start">Preferred start</label>
                <select
                  id="start"
                  v-model="values.start"
                  :aria-invalid="!!errors.start"
                  :aria-describedby="errors.start ? 'start-err' : undefined"
                  @blur="onBlur('start')"
                  @change="onInput('start')"
                >
                  <option value="" disabled>Select…</option>
                  <option v-for="s in starts" :key="s">{{ s }}</option>
                </select>
                <p v-if="errors.start" id="start-err" class="err">{{ errors.start }}</p>
              </div>
            </div>

            <div class="field">
              <label for="message">Tell us about the project</label>
              <textarea
                id="message"
                v-model="values.message"
                rows="6"
                :aria-invalid="!!errors.message"
                :aria-describedby="errors.message ? 'message-err message-hint' : 'message-hint'"
                @blur="onBlur('message')"
                @input="onInput('message')"
              />
              <p id="message-hint" class="hint">What needs doing, roughly what size, anything that worries you. At least 20 characters.</p>
              <p v-if="errors.message" id="message-err" class="err">{{ errors.message }}</p>
            </div>

            <button type="submit" class="btn" :disabled="status === 'sending'">
              {{ status === 'sending' ? 'Sending...' : 'Request my free quote' }}
            </button>
          </form>
        </div>

        <aside class="info" aria-label="Contact details">
          <h2 class="info__h">Visit or call</h2>
          <p>
            {{ buildersContact.address[0] }}<br />{{ buildersContact.address[1] }}
          </p>
          <p>
            <a :href="buildersContact.phoneHref" class="info__big">{{ buildersContact.phone }}</a><br />
            <a :href="`mailto:${buildersContact.email}`">{{ buildersContact.email }}</a>
          </p>

          <h2 class="info__h">Office hours</h2>
          <dl class="hours">
            <div v-for="h in buildersContact.hours" :key="h.days">
              <dt>{{ h.days }}</dt>
              <dd>{{ h.time }}</dd>
            </div>
          </dl>

          <h2 class="info__h">Service area</h2>
          <p>{{ buildersContact.area }}</p>

          <svg
            class="map"
            viewBox="0 0 400 300"
            role="img"
            aria-label="Stylised map showing the Ironbark Builders yard on Foundry Lane in Harlow Falls, with a 40 mile service area"
          >
            <rect width="400" height="300" fill="#2b3034" />
            <circle cx="210" cy="150" r="130" fill="#ffc20e" fill-opacity="0.1" stroke="#ffc20e" stroke-dasharray="6 6" stroke-width="2" />
            <g stroke="#454b50" stroke-width="10" fill="none">
              <path d="M0 80h400M0 210h400M90 0v300M300 0v300" />
              <path d="M0 270L400 20" stroke-width="14" />
            </g>
            <path d="M0 150h400" stroke="#ffc20e" stroke-width="5" />
            <path d="M120 300q40-100 120-120t160-80" fill="none" stroke="#3b6f8c" stroke-width="12" opacity="0.7" />
            <g fill="#454b50">
              <rect x="105" y="95" width="40" height="30" />
              <rect x="320" y="105" width="50" height="35" />
              <rect x="320" y="225" width="40" height="30" />
              <rect x="30" y="225" width="45" height="30" />
            </g>
            <g transform="translate(210 150)">
              <path d="M0 0C-16-22-22-30-22-42a22 22 0 0144 0C22-30 16-22 0 0z" fill="#ffc20e" stroke="#16181a" stroke-width="3" />
              <circle cy="-42" r="8" fill="#16181a" />
            </g>
            <g font-family="Barlow Condensed, Arial Narrow, sans-serif" font-weight="700" fill="#e4e4e0" font-size="16" letter-spacing="1.5">
              <text x="222" y="146">IRONBARK YARD</text>
              <text x="12" y="144" font-size="13" fill="#b3b7ba">FOUNDRY LANE</text>
              <text x="40" y="70" font-size="13" fill="#b3b7ba">CEDAR BEND</text>
              <text x="318" y="70" font-size="13" fill="#b3b7ba">MARLOW</text>
              <text x="40" y="290" font-size="13" fill="#b3b7ba">PINE HOLLOW</text>
            </g>
          </svg>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  gap: 56px;
}

@media (min-width: 1000px) {
  .layout {
    grid-template-columns: 1.4fr 1fr;
    gap: 72px;
    align-items: start;
  }
}

.formwrap {
  scroll-margin-top: 100px;
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

.field label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

.field input,
.field select,
.field textarea {
  display: block;
  width: 100%;
  padding: 14px 14px;
  border: 3px solid var(--b-ink);
  border-radius: 0;
  background: var(--b-white);
  color: var(--b-ink);
  font: inherit;
}

.field textarea {
  resize: vertical;
  min-height: 140px;
}

.field [aria-invalid='true'] {
  border-color: #b3261e;
  background: #fff4f3;
}

.hint {
  margin: 6px 0 0;
  color: var(--b-muted);
  font-size: 0.95rem;
}

.err {
  margin: 6px 0 0;
  color: #b3261e;
  font-weight: 600;
  font-size: 0.95rem;
}

.form .btn {
  justify-self: start;
}

.success {
  padding: 32px;
  background: var(--b-concrete);
  border-left: 10px solid var(--b-accent);
}

.success h3 {
  margin-bottom: 14px;
  font-size: 2.4rem;
}

.info {
  padding: 28px;
  background: var(--b-ink);
  color: var(--b-white);
}

.info__h {
  margin: 0 0 10px;
  color: var(--b-accent);
  font-size: 1.3rem;
  letter-spacing: 0.12em;
}

.info p {
  margin-bottom: 24px;
}

.info__big {
  font-family: var(--b-font-head);
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
}

.hours {
  margin: 0 0 24px;
}

.hours div {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #3a3f43;
}

.hours dt,
.hours dd {
  margin: 0;
}

.map {
  display: block;
  width: 100%;
  height: auto;
  border: 3px solid var(--b-accent);
}
</style>
