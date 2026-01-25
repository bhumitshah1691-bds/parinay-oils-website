'use client'

import { useState } from 'react'
import { submitInquiry } from './actions'

export default function InquiryForm() {
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    const result = await submitInquiry(formData)

    if (result.success) {
      setStatus({ type: 'success', message: result.message })
      // Reset form on success
      const form = document.getElementById('inquiry-form') as HTMLFormElement
      form?.reset()
    } else {
      setStatus({ type: 'error', message: result.message })
    }

    setIsSubmitting(false)
  }

  return (
    <form id="inquiry-form" action={handleSubmit} style={{ maxWidth: '600px' }}>
      {/* Name */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '500', fontSize: '0.875rem' }}>
          Name <span style={{ color: '#c00' }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            fontSize: '1rem'
          }}
        />
      </div>

      {/* Email */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '500', fontSize: '0.875rem' }}>
          Email <span style={{ color: '#c00' }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            fontSize: '1rem'
          }}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: '500', fontSize: '0.875rem' }}>
          Message <span style={{ color: '#c00' }}>*</span>
        </label>
        <textarea
          name="message"
          required
          placeholder="Your message..."
          rows={5}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            fontSize: '1rem',
            resize: 'vertical'
          }}
        />
      </div>

      {/* Status Message */}
      {status.type !== 'idle' && (
        <div style={{
          marginBottom: '1rem',
          padding: '0.75rem',
          backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
          color: status.type === 'success' ? '#155724' : '#721c24',
          border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {status.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          padding: '0.75rem 2rem',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          fontSize: '1rem',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          opacity: isSubmitting ? 0.6 : 1
        }}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  )
}
