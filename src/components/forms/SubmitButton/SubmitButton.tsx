import { ReactElement } from "react"
import styles from "../Form.module.scss"

interface SubmitButtonTypes {
  children: string
}

const SubmitButton = ({children}: SubmitButtonTypes) => {
  return <input className={styles.submitButton} type={"submit"} value={ children }/>
}

export default SubmitButton