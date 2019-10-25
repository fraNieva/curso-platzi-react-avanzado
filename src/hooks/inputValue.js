import { useState } from 'react'

export const inputValues = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
}
