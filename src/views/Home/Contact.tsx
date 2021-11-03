import ContactForm from "./ContactForm/ContactForm";
import styles from "./LandingPage.module.scss"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <header>
        <h2>Contact</h2>
      </header>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
    </section>
  )
}

export default Contact;