import styles from "./LinkButton.module.scss"

interface LinkButtonTypes {
  children: string
  href: string
  type: "primary" | "secondary"
}

const LinkButton = ({ children, href, type }: LinkButtonTypes) => {
  return <a href={href} className={`${styles.linkBtn} ${styles[type]}`}>{children}</a>
}

export default LinkButton