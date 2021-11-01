import FormGroup from "components/forms/FormGroup/FormGroup";
import FormLabel from "components/forms/FormLabel/FormLabel";
import FormInput from "components/forms/FormInput/FormInput";
import FormTextArea from "components/forms/FormTextArea/FormTextArea";
import SubmitButton from "components/forms/SubmitButton/SubmitButton";
import { FormEvent, useState } from "react";
import styles from "../../../../components/forms/Form.module.scss";

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

  function updateInputValue(property: string, value: string) {
    setMessageDetails({
      ...messageDetails,
      [property]: value
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
        <FormInput
          type="text"
          name="name"
          id="name"
          value={messageDetails.name}
          required={true}
          onChange={updateInputValue}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel inputID="email">Email</FormLabel>
        <FormInput
          type="email"
          name="email"
          id="email"
          value={messageDetails.email}
          required={true}
          onChange={updateInputValue}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel inputID="message">Message</FormLabel>
        <FormTextArea
          name="message"
          id="message"
          value={messageDetails.message}
          required={true}
          onChange={updateInputValue} />
      </FormGroup>

      <SubmitButton>Send</SubmitButton>
    </form>
  )
}

export default ContactForm;