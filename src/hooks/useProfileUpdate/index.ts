import { Profile } from '@prisma/client'
import { useState } from 'react'

export default function useProfileUpdate() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  async function updateProfile(data: Profile) {
    setLoading(true)
    setError('')
    const response = await fetch('/api/profile', { method: 'POST', body: JSON.stringify(data) })
    const json = await response.json()
    if (json.error) {
      setError(json.error)
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  return { error, loading, success, updateProfile }
}
