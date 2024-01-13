'use client'

import Link from 'next/link'
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import styles from '@/styles/Main/Login/formAccess.module.css'
import { AiTwotoneEye, AiTwotoneEyeInvisible } from 'react-icons/ai'
import { register } from '@/api/auth/register'
import { useRouter } from 'next/navigation'
import { GlobalContext } from '@/context/global'

const initialForm = {
  name: '',
  email: '',
  password: ''
}

export const FormRegister = () => {
  const [viewPassword, setViewPassword] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<any>(null)
  const router = useRouter()
  const { sessionActive, themeLight } = useContext(GlobalContext)

  useEffect(() => {
    if (sessionActive) router.push('/')
  }, [sessionActive])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const res = await register(form)

    console.log({ res })

    setResponse(res)

    if (res?.ok) setForm(initialForm)

    setTimeout(() => {
      setResponse(null)
      if (res?.ok) router.push('/login')
    }, 3000)

    setLoading(false)
  }

  return (
    <form
      className={`${styles.form_container} ${
        !themeLight ? styles.form_container_dark : ''
      }`}
      onSubmit={handleSubmit}
    >
      <h1>Register</h1>

      <label>Username</label>
      <input
        type='text'
        required
        onChange={handleChange}
        name='name'
        value={form.name}
      />

      <label>Email</label>
      <input
        type='email'
        required
        onChange={handleChange}
        name='email'
        value={form.email}
      />

      <label>Password</label>
      {!viewPassword ? (
        <div style={{ position: 'relative' }}>
          <input
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={form.password}
          />
          <AiTwotoneEye
            className={styles.icon_view_password}
            onClick={() => setViewPassword(true)}
          />
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          <input
            type='text'
            required
            onChange={handleChange}
            name='password'
            value={form.password}
          />
          <AiTwotoneEyeInvisible
            className={styles.icon_view_password}
            onClick={() => setViewPassword(false)}
          />
        </div>
      )}

      <input
        type='submit'
        className={!themeLight ? 'button_2' : 'button_1'}
        value={
          response === null
            ? !loading
              ? 'Register'
              : 'Loading...'
            : response?.ok
            ? 'Successful!'
            : response.error || 'Error!'
        }
        style={{
          backgroundColor:
            response !== null ? (!response?.ok ? 'red' : 'green') : '',
          marginTop: 30
        }}
      />

      <div className={styles.change_method}>
        <p>Already a member?</p> <Link href='/login'>Login</Link>
      </div>
    </form>
  )
}
