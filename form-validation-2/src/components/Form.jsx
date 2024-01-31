import { useEffect, useState } from 'react'

const Form = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // Error States
  const [errorMsg, setErrorMsg] = useState({
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !values.username.trim() ||
      !values.email.trim() ||
      !values.password.trim() ||
      !values.confirmPassword.trim() ||
      errorMsg.username ||
      errorMsg.email ||
      errorMsg.password ||
      errorMsg.confirmPassword
    ) {
      return
    }

    console.log(values)
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })

    validateValues(e.target.name, e.target.value)
  }

  useEffect(() => {
    if (values.confirmPassword !== '') {
      validateValues('confirmPassword', values.confirmPassword)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.password])

  const validateValues = (name, value) => {
    if (name === 'username') {
      if (/^[a-zA-Z0-9_]{5,16}$/.test(value)) {
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          username: null,
        }))
      } else {
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          username:
            'Username should be 3-16 characters and should not include any special characters.',
        }))
      }
    } else if (name === 'email') {
      if (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          email: null,
        }))
      } else {
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          email: 'Please enter a valid email address.',
        }))
      }
    } else if (name === 'password') {
      if (
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
          value
        )
      ) {
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          password: null,
        }))
      } else {
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          password:
            'Password should be 8-20 characters and include at least 1 letter 1 number and 1 special character.',
        }))
      }
    } else if (name === 'confirmPassword') {
      if (values.password === value) {
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          confirmPassword: null,
        }))
      } else {
        setErrorMsg((prevErrors) => ({
          ...prevErrors,
          confirmPassword: "Password don't match.",
        }))
      }
    }
  }

  return (
    <main className='container'>
      <p className='heading'>Create Account</p>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Username</label>
          <input
            type='text'
            id='text'
            placeholder='John Doe'
            name='username'
            value={values.username}
            onChange={onChange}
          />
          <p className='errorMsg'> {errorMsg.username}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='eg. john@example.com'
            name='email'
            value={values.email}
            onChange={onChange}
          />
          <p className='errorMsg'> {errorMsg.email}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='pws'>Password</label>
          <input
            type='password'
            id='pws'
            placeholder='********'
            name='password'
            value={values.password}
            onChange={onChange}
          />
          <p className='errorMsg'> {errorMsg.password}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='cPws'>Confirm Password</label>
          <input
            type='password'
            id='cPws'
            placeholder='********'
            name='confirmPassword'
            value={values.confirmPassword}
            onChange={onChange}
          />
          <p className='errorMsg'> {errorMsg.confirmPassword}</p>
        </div>
        <div className='form-control'>
          <button type='submit'>Create Account</button>
        </div>
      </form>
    </main>
  )
}

export default Form
