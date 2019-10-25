import React from 'react'
import { inputValues } from '../../hooks/inputValue'

export const UserForm = ({ onSubmit }) => {
  const email = inputValues('')
  const password = inputValues('')

  return (
    <form onSubmit={onSubmit}>
      <input placeholder='Email' {...email} />
      <input placeholder='Password' type='password' {...password} />
      <button>Autorizar</button>
    </form>
  )
}
