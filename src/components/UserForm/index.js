import React from 'react'
import { Form, Input, Button, Title } from './styles'
import { inputValues } from '../../hooks/inputValue'

export const UserForm = ({ onSubmit, title }) => {
  const email = inputValues('')
  const password = inputValues('')

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
