import FormGroup from "components/forms/FormGroup/FormGroup";
import FormLabel from "components/forms/FormLabel/FormLabel";
import SubmitButton from "components/forms/SubmitButton/SubmitButton";
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react"
import styles from "../../../components/forms/Form.module.scss";

interface Message {
  name: string,
  email: string,
  message: string
}

const ContactForm = () => {
  const [messageDetails, setMessageDetails] = useState<Message>({
    name: "",
    email: "",
    message: "",
  })

  function updateInputValue(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    setMessageDetails({
      ...messageDetails,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setMessageDetails({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel inputID="name">Name</FormLabel>
        <input 
          type="text"
          name="name"
          id="name"
          value={messageDetails.name}
          required
          onChange={(e) => updateInputValue(e)}
          />
      </FormGroup>

      <FormGroup>
        <FormLabel inputID="email">Email</FormLabel>
        <input
          type="email"
          name="email"
          id="email"
          value={messageDetails.email}
          required
          onChange={(e) => updateInputValue(e)}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel inputID="message">Message</FormLabel>
        <textarea
          name="message"
          id="message"
          value={messageDetails.message}
          required
          onChange={(e) => updateInputValue(e)} 
          />
      </FormGroup>

      <SubmitButton>Send</SubmitButton>
    </form>
  )
}

export default ContactForm;