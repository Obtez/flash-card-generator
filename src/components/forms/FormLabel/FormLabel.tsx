import styles from "../Form.module.scss"

interface FormLabelTypes {
  children: string
  inputID: string
}

const FormLabel = ({ children, inputID }: FormLabelTypes) => {
  return <label className={styles.formLabel} htmlFor={inputID}>{children}</label>
}

export default FormLabel