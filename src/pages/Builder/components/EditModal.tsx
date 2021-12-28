import { FormEvent, useState } from "react"
import {ChangeEvent} from "react"
import FormGroup from "components/forms/FormGroup/FormGroup"
import FormLabel from "components/forms/FormLabel/FormLabel"
import SubmitButton from "components/forms/SubmitButton/SubmitButton"
import {ICard} from "../../../types"
import styles from "../_styles/CardBuilder.module.scss"

interface PropTypes {
  cardToEdit: ICard
  updateCardStack: (card: ICard, isOpen: boolean) => void 
}

const EditModal = ({cardToEdit, updateCardStack}: PropTypes) => {
  const [editValues, setEditValues] = useState({
    id: cardToEdit.id,
    front: cardToEdit.front,
    back: cardToEdit.back,
    footerFront: cardToEdit.footerFront,
    footerBack: cardToEdit.footerBack
  })

  function updateInputValue(e: ChangeEvent<HTMLInputElement>) {
    setEditValues({
      ...editValues,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const card = editValues
    updateCardStack(card, true)

    setEditValues({
      id: "",
      front: "",
      back: "",
      footerFront: "",
      footerBack: ""
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.editForm}>
      <h3>EDIT</h3>
    <div className={styles.formGroup}>
      <FormLabel inputID="front">Front</FormLabel>
      <input
        type="text"
        name="front"
        id="front"
        value={editValues.front}
        onChange={(e) => updateInputValue(e)}
      />
    </div>

     <div className={styles.formGroup}>
      <FormLabel inputID="back">Back</FormLabel>
      <input
        type="text"
        name="back"
        id="back"
        value={editValues.back}
        onChange={(e) => updateInputValue(e)}
      />
      </div>
      
      <div className={styles.formGroup}>
        <FormLabel inputID="footerFront">Footer Front</FormLabel>
        <input
          type="text"
          name="footerFront"
          id="footerFront"
          value={editValues.footerFront}
          onChange={(e) => updateInputValue(e)}
        />
      </div>

     <div className={styles.formGroup}>
      <FormLabel inputID="footerBack">Footer Back</FormLabel>
      <input
        type="text"
        name="footerBack"
        id="footerBack"
        value={editValues.footerBack}
        onChange={(e) => updateInputValue(e)}
      />
    </div>

    <input type="submit" value="Save" />
  </form>
  )
}

export default EditModal