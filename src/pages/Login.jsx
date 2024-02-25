import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Logo from '@/assets/react.svg'
import { loginUserServices } from '@/sevices/useServices'
import { useAuthContext } from '@/hooks/useAuth'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserServices(data)
      if (response.status === 200) {
        login(response.data.token)
        navigate('/')
      }
      console.log('response', response)
    } catch (error) {
      console.log('error', error.message)
    }
  }

  return (
    <>
      <>
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <img
            className='mb-4'
            src={Logo}
            alt=''
            width={72}
            height={57}
          />
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              name='email'
              id='floatingInput'
              placeholder='name@example.com'
              style={{ fontSize: '16px', padding: '10px', marginBottom: '10px' }}
              {...register('email', { required: true })}
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>
          {errors.email && <span className='text-danger'>this field is required</span>}

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              name='password'
              id='floatingPassword'
              placeholder='Password'
              style={{ fontSize: '16px', padding: '10px', marginBottom: '10px' }}
              {...register('password', { required: true })}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          {errors.password && <span className='text-danger'>this field is required</span>}

          <button className='btn btn-primary w-100 py-2' type='submit'>
            Login
          </button>
          <p className='mt-5 mb-3 text-body-secondary'>© 2017–2024</p>
        </form>

        <div
          style={{ maxWidth: '200px', margin: '0 auto' }}
        >
          <p>No tienes cuenta?<a href='/signup'>Registrate</a></p>
        </div>

      </>

    </>
  )
}

export default Login
