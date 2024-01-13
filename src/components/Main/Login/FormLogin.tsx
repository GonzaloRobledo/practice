'use client'

import Link from 'next/link'
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import styles from '@/styles/Main/Login/formAccess.module.css'
import { AiTwotoneEye, AiTwotoneEyeInvisible } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { login } from '@/api/auth/login'
import { GlobalContext } from '@/context/global'

const initialForm = {
  email: '',
  password: ''
}

export const FormLogin = () => {
  const [viewPassword, setViewPassword] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<any>(null)
  const router = useRouter()
  const { setSessionActive, sessionActive, themeLight } =
    useContext(GlobalContext)

  useEffect(() => {
    if (sessionActive) router.push('/')
  }, [sessionActive])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const res = await login(form)

    console.log({ res })

    setResponse(res)

    if (res?.ok) setForm(initialForm)

    setTimeout(() => {
      setResponse(null)
      if (res?.ok) {
        localStorage.setItem('token', res.token)
        setSessionActive(true)
        router.push('/')
      }
    }, 1000)

    setLoading(false)
  }

  return (
    <form
      className={`${styles.form_container} ${
        !themeLight ? styles.form_container_dark : ''
      }`}
      onSubmit={handleSubmit}
    >
      <h1>Login</h1>

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
        <p>Not a member yet?</p> <Link href='/register'>Register</Link>
      </div>
    </form>
  )
}
