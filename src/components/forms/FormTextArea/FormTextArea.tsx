import { ChangeEvent } from "react"
import styles from "../Form.module.scss"

interface FormTextAreaTypes {
  name: string
  id: string
  value: string
  required: boolean
  onChange: (property: string, value: string) => void
}

const FormTextArea = ({ name, id, value, required = false, onChange }: FormTextAreaTypes) => {

  function handleChange(e: ChangeEvent<HTMLTextAreaElement> ) {
    onChange(e.target.name, e.target.value)
  }

  if (required) {
    return <textarea className={styles.formTextArea} name={name} id={id} value={value} required onChange={e => handleChange(e)} rows={5}></textarea>
  } else {
    return <textarea className={styles.formTextArea} name={name} id={id} value={value} onChange={e => handleChange(e)} rows={5}></textarea>
  }
}

export default FormTextArea