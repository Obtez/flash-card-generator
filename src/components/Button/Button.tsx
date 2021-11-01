import styles from "./Button.module.scss"

interface ButtonTypes {
  children: string
  type: "button" | "submit" | "reset"
  onClick: () => void
}

const Button = ({ children, type, onClick }: ButtonTypes) => {
  function handleClick() {
    onClick()
  }

  return <button className={`${styles.btn} ${styles.primary}`} type={type} onClick={() => handleClick()}>{children}</button>
}

export default Button;