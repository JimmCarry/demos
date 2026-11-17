// Shared logic for the demo contact / booking forms: validation and a fake submit.
// The sites are static, so nothing is sent anywhere; the form just shows a success state.
// Each site builds its own markup and styles on top of this.

export type FieldRule = (value: string) => string | null

export const rules = {
  required:
    (message = 'This field is required.'): FieldRule =>
    (value) =>
      value.trim() ? null : message,
  email:
    (message = 'Please enter a valid email address.'): FieldRule =>
    (value) =>
      !value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? null : message,
  phone:
    (message = 'Please enter a valid phone number.'): FieldRule =>
    (value) =>
      !value.trim() || /^[+\d][\d\s()-]{6,}$/.test(value.trim()) ? null : message,
  minLength:
    (length: number, message = `Please write at least ${length} characters.`): FieldRule =>
    (value) =>
      !value.trim() || value.trim().length >= length ? null : message,
  futureDate:
    (message = 'Please choose a date from today onwards.'): FieldRule =>
    (value) => {
      if (!value) return null
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return new Date(`${value}T00:00:00`) >= today ? null : message
    }
}

export function useContactForm<T extends Record<string, string>>(
  initial: T,
  fieldRules: Partial<Record<keyof T & string, FieldRule[]>>
) {
  type Field = keyof T & string
  const values = reactive({ ...initial }) as T
  const errors = reactive<Record<string, string>>({}) as Partial<Record<Field, string>>
  const touched: Record<string, boolean> = reactive({})
  const status = ref<'idle' | 'sending' | 'sent'>('idle')

  function validateField(field: Field): boolean {
    const message = (fieldRules[field] ?? []).map((rule) => rule(String(values[field] ?? ''))).find(Boolean)
    if (message) errors[field] = message
    else delete errors[field]
    return !message
  }

  // Validate on blur, then live while the user fixes the field.
  function onBlur(field: Field) {
    touched[field] = true
    validateField(field)
  }

  function onInput(field: Field) {
    if (touched[field]) validateField(field)
  }

  async function submit(): Promise<boolean> {
    const fields = Object.keys(values) as Field[]
    fields.forEach((field) => (touched[field] = true))
    const valid = fields.map(validateField).every(Boolean)
    if (!valid) {
      // Move focus to the first invalid field so keyboard and screen reader users find it.
      const first = fields.find((field) => errors[field])
      if (first && import.meta.client) document.getElementById(String(first))?.focus()
      return false
    }
    status.value = 'sending'
    await new Promise((resolve) => setTimeout(resolve, 700))
    status.value = 'sent'
    return true
  }

  function reset() {
    Object.assign(values, initial)
    ;(Object.keys(errors) as Field[]).forEach((field) => delete errors[field])
    ;(Object.keys(touched) as Field[]).forEach((field) => delete touched[field])
    status.value = 'idle'
  }

  return { values, errors, status, onBlur, onInput, submit, reset }
}
