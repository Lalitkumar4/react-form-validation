import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Form = () => {
  // Initial state
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')
  const [confirmPsw, setConfirmPsw] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  // Error States
  const [usernameError, setUsernameError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [pswError, setPswError] = useState(null)
  const [confirmPswError, setConfirmPswError] = useState(null)
  const [termError, setTermError] = useState(null)

  // Eye icons state
  const [showPsw, setShowPsw] = useState(false)
  const [showConfirmPsw, setConfirmShowPsw] = useState(false)

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate username
    if (username === '') {
      setUsernameError('Username is required.')
    } else if (/^[a-zA-Z0-9_]{5,16}$/.test(username)) {
      setUsernameError(null)
    } else {
      setUsernameError(
        'Username should be 5-16 characters and should not include any special characters and spaces.'
      )
    }

    // Validate email
    if (email === '') {
      setEmailError('Email is required.')
    } else if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailError(null)
    } else {
      setEmailError('Please enter a valid email address.')
    }

    // Validate password
    if (psw === '') {
      setPswError('Password is required.')
    } else if (
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
        psw
      )
    ) {
      setPswError(null)
    } else {
      setPswError(
        'Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character.'
      )
    }

    // Validate confirm
    if (confirmPsw === '') {
      setConfirmPswError('Confirm Password is required.')
    } else if (psw === confirmPsw) {
      setConfirmPswError(null)
    } else {
      setConfirmPswError("Passwords don't match.")
    }

    // Validate term
    if (isChecked) {
      setTermError(null)
    } else {
      setTermError('Please accept term and conditions.')
    }

    if (!username || !email || !psw || !confirmPsw || !isChecked) {
      return
    }

    // clear form field after successfully submitted form
    setUsername('')
    setEmail('')
    setPsw('')
    setConfirmPsw('')
    setIsChecked(false)

    // console the data
    console.log(
      `Username: ${username}, \nEmail: ${email}, \nPassword: ${psw}, \nTerm&conditions: ${
        isChecked && 'Accept'
      }`
    )
  }

  return (
    <main className='container'>
      <p className='heading'>Create Account</p>
      <form onSubmit={handleSubmit}>
        {/* Username field */}
        <div className='form-control'>
          <label htmlFor='text'>Username</label>
          <input
            type='text'
            id='text'
            placeholder='John Doe'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
        </div>
        {/* Error msg */}
        {usernameError && <p className='errorMsg'>{usernameError}</p>}

        {/* Email field */}
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='eg. john@example.com'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Error msg */}
        {emailError && <p className='errorMsg'>{emailError}</p>}

        {/* Psw Field */}
        <div className='form-control'>
          <label htmlFor='pws'>Password</label>
          <input
            type={showPsw ? 'text' : 'password'}
            id='pws'
            placeholder='********'
            name='password'
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
          />

          {/* Toggle eye icon */}
          {psw.length > 0 && (
            <div className='eyeBtn' onClick={() => setShowPsw(!showPsw)}>
              {showPsw ? <FaEye /> : <FaEyeSlash />}
            </div>
          )}
        </div>
        {/* Error msg */}
        {pswError && <p className='errorMsg'>{pswError}</p>}

        {/* Confirm Psw field */}
        <div className='form-control'>
          <label htmlFor='cPws'>Confirm Password</label>
          <input
            type={showConfirmPsw ? 'text' : 'password'}
            id='cPws'
            placeholder='********'
            name='confirmPassword'
            value={confirmPsw}
            onChange={(e) => setConfirmPsw(e.target.value)}
          />
          {/* Toggle eye icon */}
          {confirmPsw.length > 0 && (
            <div
              className='eyeBtn'
              onClick={() => setConfirmShowPsw(!showConfirmPsw)}
            >
              {showConfirmPsw ? <FaEye /> : <FaEyeSlash />}
            </div>
          )}
        </div>
        {/* Error msg */}
        {confirmPswError && <p className='errorMsg'>{confirmPswError}</p>}

        <div className='form-control checkbox'>
          <div>
            <input
              type='checkbox'
              name='checkbox'
              id='checkbox'
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor='checkbox'>I accept the terms and conditions</label>
          </div>
        </div>
        {/* Error msg */}
        {termError && <p className='term errorMsg'>{termError}</p>}

        {/* Submit Button */}
        <div className='form-control'>
          <button className='submitBtn' type='submit'>
            Create Account
          </button>
        </div>
      </form>
    </main>
  )
}

export default Form
