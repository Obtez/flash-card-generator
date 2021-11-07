import styles from "./Button.module.scss"

interface ButtonTypes {
  children: string
  type: "button" | "submit" | "reset"
  isPrimary: boolean
  onClick?: () => void
}

const Button = ({ children, type, isPrimary, onClick }: ButtonTypes) => {
  function handleClick() {
    if (onClick) {
      onClick()
    }
  }

  if (isPrimary) {
    return <button className={`${styles.btn} ${styles.btnPrimary}`} type={type} onClick={() => handleClick()}>{children}</button>
  } else {
    return <button className={`${styles.btn} ${styles.btnSecondary}`} type={type} onClick={() => handleClick()}>{children}</button>
  }
}

export default Button;