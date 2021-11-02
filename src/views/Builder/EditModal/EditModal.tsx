import { FormEvent, useState } from "react"
import FormGroup from "components/forms/FormGroup/FormGroup"
import FormLabel from "components/forms/FormLabel/FormLabel"
import FormInput from "components/forms/FormInput/FormInput"
import SubmitButton from "components/forms/SubmitButton/SubmitButton"
import {ICard} from "../../../types/"
import styles from "../_styles/CardBuilder.module.scss"

interface PropTypes {
  cardToEdit: ICard
  updateCardStack: (card: ICard, isOpen: boolean) => void 
}

const EditModal = ({cardToEdit, updateCardStack}: PropTypes) => {
  const [editValues, setEditValues] = useState({
    id: cardToEdit.id,
    front: cardToEdit.front,
    back: cardToEdit.back
  })

  function updateInputValue(property: string, value: string) {
    setEditValues({
      ...editValues,
      [property]: value
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const card = editValues
    updateCardStack(card, true)

    setEditValues({
      id: "",
      front: "",
      back: ""
    })
  }

  return (
  <form onSubmit={handleSubmit} className={styles.editModal}>
    <FormGroup>
      <FormLabel inputID="front">Front</FormLabel>
      <FormInput
        type="text"
        name="front"
        id="front"
        value={editValues.front}
        required={false}
        onChange={updateInputValue}
      />
    </FormGroup>

     <FormGroup>
      <FormLabel inputID="back">Back</FormLabel>
      <FormInput
        type="text"
        name="back"
        id="back"
        value={editValues.back}
        required={false}
        onChange={updateInputValue}
      />
    </FormGroup>

    <SubmitButton>Save</SubmitButton>
  </form>
  )
}

export default EditModal