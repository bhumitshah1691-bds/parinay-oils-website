'use server'

export async function submitInquiry(formData: FormData): Promise<{ success: boolean; message: string }> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, message: 'All fields are required.' }
  }

  if (!email.includes('@')) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  try {
    // Placeholder for email sending - currently logs to console
    // In production, replace with actual SMTP/email service
    console.log('=== NEW INQUIRY RECEIVED ===')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('============================')

    // Simulate a small delay as if sending email
    await new Promise(resolve => setTimeout(resolve, 500))

    return { success: true, message: 'Thank you for your inquiry. We will get back to you soon.' }
  } catch (error) {
    console.error('Error processing inquiry:', error)
    return { success: false, message: 'An error occurred. Please try again later.' }
  }
}
