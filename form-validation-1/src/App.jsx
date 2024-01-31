import { useState } from 'react'
import FormInput from './components/FormInput'
import './App.css'

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'John Doe',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character.",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      require: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'eg.john@gmail.com',
      errorMessage: 'It should be a valid email address.',
      label: 'Email',
      require: true,
    },
    {
      id: 3,
      name: 'DOB',
      type: 'date',
      label: 'DOB',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: '********',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.',
      label: 'Password',
      pattern:
        '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      require: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: '********',
      errorMessage: "Password don't match.",
      label: 'Confirm Password',
      pattern: values.password,
      require: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !values.username ||
      !values.email ||
      !values.password ||
      !values.confirmPassword
    ) {
      return
    } else {
      console.log(values)
    }
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className='app'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
