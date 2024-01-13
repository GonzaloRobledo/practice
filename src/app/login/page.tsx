import { FormLogin } from '@/components/Main/Login/FormLogin'

const LoginPage = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <FormLogin />
    </main>
  )
}

export default LoginPage
