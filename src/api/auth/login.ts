import { server } from '@/globals/baseUrl'

export const login = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const res = await fetch(`${server.local}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ email, password })
    })

    if(!res.ok) throw new Error('Error in register.ts')

    const data = await res.json()

    return data
  } catch (e) {
    console.log(e)
  }
}
