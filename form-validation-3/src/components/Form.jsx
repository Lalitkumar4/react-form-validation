import { useEffect, useState } from 'react'

const Form = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')
  const [confirmPsw, setConfirmPsw] = useState('')

  // Error States
  const [usernameError, setUsernameError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [pswError, setPswError] = useState(null)
  const [confirmPswError, setConfirmPswError] = useState(null)

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !username.trim() ||
      !email.trim() ||
      !psw.trim() ||
      !confirmPsw.trim() ||
      usernameError ||
      emailError ||
      pswError ||
      confirmPswError
    ) {
      return
    }

    console.log(username, email, psw, confirmPsw)
  }

  // Handle username
  const handleUsername = (e) => {
    setUsername(e.target.value)
    setUsernameError(validateUsername(e.target.value))
  }

  // Handle email
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError(validateEmail(e.target.value))
  }

  useEffect(() => {
    if (confirmPsw !== '') {
      setConfirmPswError(validateConfirmPsw(confirmPsw))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmPsw, psw])

  // Handle psw
  const handlePsw = (e) => {
    setPsw(e.target.value)
    setPswError(validatePsw(e.target.value))
  }

  // Handle confirm psw
  const handleConfirmPsw = (e) => {
    setConfirmPsw(e.target.value)
    setConfirmPswError(validateConfirmPsw(e.target.value))
  }

  // Validation of username
  const validateUsername = (username) => {
    if (/^[a-zA-Z0-9_]{5,16}$/.test(username)) {
      return null
    } else {
      return 'Username should be 5-16 characters and should not include any special characters and spaces.'
    }
  }

  // Validation of email
  const validateEmail = (email) => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return null
    } else {
      return 'Please enter a valid email address.'
    }
  }

  // Validation of psw
  const validatePsw = (psw) => {
    if (
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
        psw
      )
    ) {
      return null
    } else {
      return 'Password should be 8-20 characters and include at least 1 letter 1 number and 1 special character.'
    }
  }

  // Validation of confirm psw
  const validateConfirmPsw = (confirmPsw) => {
    if (psw === confirmPsw) {
      return null
    } else {
      return "Password don't match."
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
            value={username}
            onChange={handleUsername}
          />
          <p className='errorMsg'> {usernameError}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='eg. john@example.com'
            name='email'
            value={email}
            onChange={handleEmail}
          />
          <p className='errorMsg'> {emailError}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='pws'>Password</label>
          <input
            type='password'
            id='pws'
            placeholder='********'
            name='password'
            value={psw}
            onChange={handlePsw}
          />
          <p className='errorMsg'> {pswError}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='cPws'>Confirm Password</label>
          <input
            type='password'
            id='cPws'
            placeholder='********'
            name='confirmPassword'
            value={confirmPsw}
            onChange={handleConfirmPsw}
          />
          <p className='errorMsg'> {confirmPswError}</p>
        </div>
        <div className='form-control'>
          <button type='submit'>Create Account</button>
        </div>
      </form>
    </main>
  )
}

export default Form
