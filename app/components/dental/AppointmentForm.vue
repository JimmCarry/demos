<script setup lang="ts">
const treatmentOptions = [
  'New patient exam & X-rays',
  'Routine check-up',
  'Hygiene clean',
  'Filling or toothache',
  'Whitening',
  'Veneers or bonding',
  'Clear aligners or braces',
  'Emergency',
  'Something else / not sure'
]

const timesOfDay = [
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'any', label: 'No preference' }
]

const { values, errors, status, onBlur, onInput, submit, reset } = useContactForm(
  { name: '', email: '', phone: '', treatment: '', date: '', time: 'any', newPatient: '', message: '' },
  {
    name: [rules.required('Please tell us your name.')],
    email: [rules.required('Please enter your email address.'), rules.email()],
    phone: [rules.required('Please enter a phone number.'), rules.phone()],
    treatment: [rules.required('Please choose a treatment.')],
    date: [rules.required('Please choose a preferred date.'), rules.futureDate()],
    message: [rules.minLength(10)]
  }
)

// Set on the client only, so server and browser render the same HTML.
const minDate = ref('')
onMounted(() => {
  const now = new Date()
  minDate.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
})

const newPatientChecked = computed({
  get: () => values.newPatient === 'yes',
  set: (checked: boolean) => (values.newPatient = checked ? 'yes' : '')
})

const sending = computed(() => status.value === 'sending')
</script>

<template>
  <div class="booking">
    <div v-if="status === 'sent'" class="success" role="status" tabindex="-1">
      <span class="success__icon"><DentalIcon name="check" /></span>
      <h3>Thank you, {{ values.name.split(' ')[0] }}.</h3>
      <p>
        We have your appointment request and will reply to {{ values.email }} within one working day to confirm a time.
        If it is urgent, please call us on {{ dentalContact.phone }}.
      </p>
      <p class="success__demo">(This is a demo, so nothing was actually sent.)</p>
      <button type="button" class="btn btn--ghost" @click="reset">Send another request</button>
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

      <div class="row">
        <div class="field">
          <label for="treatment">Treatment</label>
          <select
            id="treatment"
            v-model="values.treatment"
            :aria-invalid="!!errors.treatment"
            :aria-describedby="errors.treatment ? 'treatment-error' : undefined"
            @blur="onBlur('treatment')"
            @change="onInput('treatment')"
          >
            <option value="" disabled>Choose a treatment</option>
            <option v-for="option in treatmentOptions" :key="option" :value="option">{{ option }}</option>
          </select>
          <p v-if="errors.treatment" id="treatment-error" class="error">{{ errors.treatment }}</p>
        </div>
        <div class="field">
          <label for="date">Preferred date</label>
          <input
            id="date"
            v-model="values.date"
            type="date"
            :min="minDate || undefined"
            :aria-invalid="!!errors.date"
            :aria-describedby="errors.date ? 'date-error' : undefined"
            @blur="onBlur('date')"
            @input="onInput('date')"
          />
          <p v-if="errors.date" id="date-error" class="error">{{ errors.date }}</p>
        </div>
      </div>

      <fieldset class="field fieldset">
        <legend>Preferred time of day</legend>
        <div class="radios">
          <label v-for="(option, i) in timesOfDay" :key="option.value" class="radio">
            <input :id="i === 0 ? 'time' : `time-${option.value}`" v-model="values.time" type="radio" name="time" :value="option.value" />
            <span>{{ option.label }}</span>
          </label>
        </div>
      </fieldset>

      <label class="check" for="newPatient">
        <input id="newPatient" v-model="newPatientChecked" type="checkbox" />
        <span>I’m a new patient</span>
      </label>

      <div class="field">
        <label for="message">Anything we should know? <span class="optional">(optional)</span></label>
        <textarea
          id="message"
          v-model="values.message"
          rows="4"
          :aria-invalid="!!errors.message"
          :aria-describedby="errors.message ? 'message-error' : undefined"
          @blur="onBlur('message')"
          @input="onInput('message')"
        />
        <p v-if="errors.message" id="message-error" class="error">{{ errors.message }}</p>
      </div>

      <button type="submit" class="btn btn--primary submit" :disabled="sending">
        {{ sending ? 'Sending...' : 'Request appointment' }}
      </button>
      <p class="note">This is a request, not a confirmed booking. We will reply to confirm a time.</p>
    </form>
  </div>
</template>

<style scoped>
.booking {
  padding: 28px 22px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: #fff;
  box-shadow: var(--shadow);
}

.form {
  display: grid;
  gap: 20px;
}

.row {
  display: grid;
  gap: 20px;
}

.field {
  display: grid;
  gap: 6px;
  min-width: 0;
}

label,
legend {
  color: var(--teal-900);
  font-weight: 700;
  font-size: 0.95rem;
}

.optional {
  color: var(--muted);
  font-weight: 500;
}

input[type='text'],
input[type='email'],
input[type='tel'],
input[type='date'],
select,
textarea {
  width: 100%;
  min-height: 50px;
  padding: 12px 14px;
  border: 1.5px solid #b9cfcc;
  border-radius: var(--radius-sm);
  background: #fff;
  color: var(--ink);
}

textarea {
  resize: vertical;
}

input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  border-color: var(--teal-700);
  outline: 3px solid var(--teal-200);
  outline-offset: 0;
}

[aria-invalid='true'] {
  border-color: #b3261e !important;
  background: #fff8f7;
}

.error {
  color: #a6261e;
  font-size: 0.875rem;
  font-weight: 600;
}

.fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}

.radios {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
}

.radio {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 1.5px solid #b9cfcc;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}

.radio input {
  width: 18px;
  height: 18px;
  accent-color: var(--teal-700);
}

.radio:has(input:checked) {
  border-color: var(--teal-700);
  background: var(--teal-100);
}

.radio:has(input:focus-visible) {
  outline: 3px solid var(--teal-500);
  outline-offset: 2px;
}

.check {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.check input {
  width: 22px;
  height: 22px;
  accent-color: var(--teal-700);
}

.submit {
  width: 100%;
}

.submit:disabled {
  opacity: 0.7;
  cursor: progress;
}

.note {
  color: var(--muted);
  font-size: 0.875rem;
  text-align: center;
}

.success {
  display: grid;
  justify-items: start;
  gap: 14px;
  padding-block: 12px;
}

.success__icon {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--teal-100);
  color: var(--teal-700);
}

.success h3 {
  font-size: 1.6rem;
}

.success__demo {
  color: var(--muted);
  font-style: italic;
}

@media (min-width: 700px) {
  .booking {
    padding: 40px;
  }

  .row {
    grid-template-columns: 1fr 1fr;
  }

  .submit {
    width: auto;
    justify-self: start;
  }

  .note {
    text-align: left;
  }
}
</style>
