import { ReactChild } from "react";
import styles from "../Form.module.scss"

interface FormGroupTypes {
  children: ReactChild[]
}

const FormGroup = ({ children }: FormGroupTypes) => {
  return (
    <div className={styles.formGroup}>
      {children}
    </div>
  )
}

export default FormGroup