import { ChangeEvent } from "react"
import styles from "../Form.module.scss"

interface FormInputTypes {
  type: "text" | "email" | "tel" | "checkbox"
  name: string
  id: string
  value: string
  required: boolean
  onChange: (property: string, value: string) => void
}



const FormInput = ({ type, name, id, value, required = false, onChange }: FormInputTypes) => {

  function handleChange(e: ChangeEvent<HTMLInputElement> ) {
    onChange(e.target.name, e.target.value)
  }

  if (required) {
    return <input className={styles.formInput} type={type} name={name} id={id} value={value} onChange={e => handleChange(e)} required />
  } else {
    return <input className={styles.formInput} type={type} name={name} id={id} value={value} onChange={e => handleChange(e)} />
  }
}

export default FormInput