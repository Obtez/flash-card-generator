import FormGroup from "components/forms/FormGroup/FormGroup";
import FormLabel from "components/forms/FormLabel/FormLabel";
import FormInput from "components/forms/FormInput/FormInput";
import SubmitButton from "components/forms/SubmitButton/SubmitButton";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ICard } from "types";
import styles from "../_styles/CardBuilder.module.scss";

interface PropsType {
  addCardToStack: (card: ICard) => void;
}

const CardForm = ({addCardToStack}: PropsType) => {
  const [newCard, setNewCard] = useState<ICard>({
    id: "",
    front: "",
    back: ""
  })


  function updateInputValue(property: string, value: string) {
    setNewCard({
      ...newCard,
      [property]: value
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const card: ICard = {
      ...newCard,
      id: uuidv4()
    }

    addCardToStack(card)

    setNewCard({
      id: "",
      front: "",
      back: ""
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <FormGroup>
        <FormLabel inputID="front">Front</FormLabel>
        <FormInput
          type="text"
          name="front"
          id="front"
          value={newCard.front}
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
          value={newCard.back}
          required={false}
          onChange={updateInputValue}
        />
      </FormGroup>

      <SubmitButton>Add</SubmitButton>
    </form>
  )
}

export default CardForm;