/* eslint-disable react/prop-types */
import { useState } from 'react'
import './formInput.css'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const { label, onChange, errorMessage, id, ...inputProps } = props

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
