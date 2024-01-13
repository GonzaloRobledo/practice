import { FormRegister } from '@/components/Main/Register/FormRegister'

const RegisterPage = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <FormRegister />
    </main>
  )
}

export default RegisterPage
