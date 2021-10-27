import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./ContactForm.module.scss";

interface Message {
  name: string,
  email: string,
  message: string
}

type ContactFormEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>

const ContactForm = () => {
  const [messageDetails, setMessageDetails] = useState<Message>({
    name: "",
    email: "",
    message: "",
  })

  function handleChange(e: ContactFormEvent) {
    if (!e.target.name) {
      return null
    }

    if (!e.target.value) {
      return null
    }

    setMessageDetails({
      ...messageDetails,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log("name", messageDetails.name);
    console.log("email", messageDetails.email);
    console.log("message", messageDetails.message);
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required onChange={(e) => handleChange(e)} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required onChange={(e) => handleChange(e)} />
      

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" required onChange={(e) => handleChange(e)}></textarea>

      <input type="submit" value="Send" />
    </form>
  )
}

export default ContactForm;