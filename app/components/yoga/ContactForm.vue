<script setup lang="ts">
const { values, errors, status, onBlur, onInput, submit, reset } = useContactForm(
  { name: '', email: '', phone: '', interest: '', level: 'beginner', message: '' },
  {
    name: [rules.required('Please tell us your name.')],
    email: [rules.required('Please enter your email address.'), rules.email()],
    phone: [rules.phone()],
    interest: [rules.required('Please choose what you are interested in.')],
    message: [rules.required('Please write us a short message.'), rules.minLength(10)]
  }
)

const levels = [
  { value: 'beginner', label: 'Brand new', hint: 'Never tried it' },
  { value: 'some', label: 'Some experience', hint: 'A few classes' },
  { value: 'regular', label: 'Regular practice', hint: 'Weekly or more' }
]

const describe = (field: keyof typeof errors) => (errors[field] ? `${String(field)}-error` : undefined)
</script>

<template>
  <div class="form-card">
    <div v-if="status === 'sent'" class="done" role="status">
      <svg viewBox="0 0 48 48" width="52" height="52" aria-hidden="true" focusable="false">
        <circle cx="24" cy="24" r="22" fill="#e2e9dd" />
        <path d="M14 25l7 7 13-15" fill="none" stroke="#46634a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <h3>Thank you, {{ values.name.split(' ')[0] }}.</h3>
      <p>We have your message and will reply within one working day, usually sooner. (This is a demo, so nothing was actually sent.)</p>
      <button type="button" class="btn btn--ghost" @click="reset">Send another message</button>
    </div>

    <form v-else novalidate @submit.prevent="submit">
      <div class="field">
        <label for="name">Your name</label>
        <input
          id="name"
          v-model="values.name"
          type="text"
          autocomplete="name"
          :aria-invalid="errors.name ? 'true' : undefined"
          :aria-describedby="describe('name')"
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
            :aria-invalid="errors.email ? 'true' : undefined"
            :aria-describedby="describe('email')"
            @blur="onBlur('email')"
            @input="onInput('email')"
          />
          <p v-if="errors.email" id="email-error" class="error">{{ errors.email }}</p>
        </div>
        <div class="field">
          <label for="phone">Phone <span class="opt">(optional)</span></label>
          <input
            id="phone"
            v-model="values.phone"
            type="tel"
            autocomplete="tel"
            :aria-invalid="errors.phone ? 'true' : undefined"
            :aria-describedby="describe('phone')"
            @blur="onBlur('phone')"
            @input="onInput('phone')"
          />
          <p v-if="errors.phone" id="phone-error" class="error">{{ errors.phone }}</p>
        </div>
      </div>

      <div class="field">
        <label for="interest">I'm interested in</label>
        <select
          id="interest"
          v-model="values.interest"
          :aria-invalid="errors.interest ? 'true' : undefined"
          :aria-describedby="describe('interest')"
          @blur="onBlur('interest')"
          @change="onInput('interest')"
        >
          <option value="" disabled>Choose one</option>
          <option v-for="o in yogaInterests" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
        <p v-if="errors.interest" id="interest-error" class="error">{{ errors.interest }}</p>
      </div>

      <fieldset class="field levels">
        <legend>Your experience</legend>
        <div class="levels__grid">
          <label v-for="(l, i) in levels" :key="l.value" class="level" :class="{ 'is-checked': values.level === l.value }">
            <input :id="i === 0 ? 'level' : undefined" v-model="values.level" type="radio" name="level" :value="l.value" />
            <span class="level__label">{{ l.label }}</span>
            <span class="level__hint">{{ l.hint }}</span>
          </label>
        </div>
      </fieldset>

      <div class="field">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="values.message"
          rows="5"
          :aria-invalid="errors.message ? 'true' : undefined"
          :aria-describedby="describe('message')"
          @blur="onBlur('message')"
          @input="onInput('message')"
        />
        <p v-if="errors.message" id="message-error" class="error">{{ errors.message }}</p>
      </div>

      <button type="submit" class="btn" :disabled="status === 'sending'">
        {{ status === 'sending' ? 'Sending...' : 'Send message' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-card {
  padding: clamp(24px, 4vw, 40px);
  border-radius: var(--radius-lg);
  background: var(--paper);
  box-shadow: var(--shadow);
}
form {
  display: grid;
  gap: 20px;
}
.row {
  display: grid;
  gap: 20px;
}
@media (min-width: 560px) {
  .row {
    grid-template-columns: 1fr 1fr;
  }
}
.field {
  display: grid;
  gap: 6px;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
}
label,
legend {
  padding: 0;
  font-weight: 500;
  font-size: 0.95rem;
}
.opt {
  color: var(--muted);
  font-weight: 400;
}
input[type='text'],
input[type='email'],
input[type='tel'],
select,
textarea {
  width: 100%;
  padding: 13px 16px;
  border: 1.5px solid #cdbfa9;
  border-radius: 14px;
  background: var(--sand);
  transition: border-color 0.2s, box-shadow 0.2s;
}
textarea {
  resize: vertical;
  min-height: 130px;
}
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  border-color: var(--sage-deep);
  outline: 3px solid rgb(70 99 74 / 0.3);
  outline-offset: 0;
}
[aria-invalid='true'] {
  border-color: #b3321f;
  background: #fdf1ee;
}
.error {
  color: #a32b19;
  font-size: 0.9rem;
}
.levels legend {
  margin-bottom: 8px;
}
.levels__grid {
  display: grid;
  gap: 10px;
}
@media (min-width: 560px) {
  .levels__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.level {
  position: relative;
  display: grid;
  gap: 0;
  padding: 12px 16px 12px 44px;
  border: 1.5px solid #cdbfa9;
  border-radius: 14px;
  background: var(--sand);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.level.is-checked {
  border-color: var(--sage-deep);
  background: var(--sage-soft);
}
.level:has(input:focus-visible) {
  outline: 3px solid var(--clay-deep);
  outline-offset: 2px;
}
.level input {
  position: absolute;
  left: 16px;
  top: 16px;
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: var(--sage-deep);
}
.level__label {
  font-weight: 500;
}
.level__hint {
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 400;
}
form .btn {
  justify-self: start;
}
.done {
  display: grid;
  justify-items: start;
  gap: 14px;
  padding-block: 12px;
}
.done h3 {
  font-size: 2rem;
}
.done p {
  color: var(--muted);
}
</style>
