import FormGroup from "components/forms/FormGroup/FormGroup";
import FormLabel from "components/forms/FormLabel/FormLabel";
import { FormEvent, useState, useRef } from "react";
import { ChangeEvent } from "react"
import { v4 as uuidv4 } from 'uuid';
import { ICard } from "types";
import styles from "./_styles/CardBuilder.module.scss";

interface PropsType {
  addCardToStack: (card: ICard) => void
}

const CardForm = ({addCardToStack}: PropsType) => {
  const [newCard, setNewCard] = useState<ICard>({
    id: "",
    front: "",
    back: "",
    footerFront: "",
    footerBack: ""
  })

  const inputRef = useRef<any>(null)

  function updateInputValue(e: ChangeEvent<HTMLInputElement>) {
    setNewCard({
      ...newCard,
      [e.target.name]: e.target.value
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
      back: "",
      footerFront: "",
      footerBack: ""
    })
    if (inputRef.current) {
    inputRef.current.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <FormGroup>
        <FormLabel inputID="front">Front</FormLabel>
      <input 
      type="text" 
      name="front" id="front" 
      value={newCard.front} 
      ref={inputRef} 
      onChange={(e) => updateInputValue(e)} 
      required
      />
      </FormGroup>


       <FormGroup>
        <FormLabel inputID="back">Back</FormLabel>
        <input 
        type="text" 
        name="back" 
        id="back" 
        value={newCard.back} 
        onChange={(e) => updateInputValue(e)} 
        required 
        />
      </FormGroup>

      <FormGroup>
        <FormLabel inputID="footerFront">Footer Front</FormLabel>
        <input 
        type="text" 
        name="footerFront" 
        id="footerFront" 
        value={newCard.footerFront} 
        onChange={(e) => updateInputValue(e)} 
        />
      </FormGroup>

      <FormGroup>
        <FormLabel inputID="footerFront">Footer Back</FormLabel>
        <input 
        type="text" 
        name="footerBack" 
        id="footerBack" 
        value={newCard.footerBack} 
        onChange={(e) => updateInputValue(e)} 
        />
      </FormGroup>

      <span className={styles.submitContainer}>
        <input 
        type="submit" 
        value=" + " 
        className={styles.submitBtn} 
        />
      </span>
    </form>
  )
}

export default CardForm;