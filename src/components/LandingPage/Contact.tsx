import ContactForm from "../ContactForm/ContactForm";
import styles from "./LandingPage.module.scss"

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <h2>Contact</h2>
      <ContactForm />
    </section>
  )
}

export default Contact;