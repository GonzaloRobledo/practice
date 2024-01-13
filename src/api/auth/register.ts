import { server } from '@/globals/baseUrl'

export const register = async ({
  email,
  password,
  name
}: {
  email: string
  password: string
  name: string
}) => {
  try {
    const res = await fetch(`${server.local}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ email, password, name })
    })

    if(!res.ok) throw new Error('Error in register.ts')

    const data = await res.json()

    return data
  } catch (e) {
    console.log(e)
  }
}
