import FormGroup from "components/forms/FormGroup/FormGroup";
import FormLabel from "components/forms/FormLabel/FormLabel";
import { FormEvent, useState, useEffect, useRef } from "react";
import { ChangeEvent } from "react"
import { v4 as uuidv4 } from 'uuid';
import { ICard } from "types";
import styles from "../_styles/CardBuilder.module.scss";

interface PropsType {
  addCardToStack: (card: ICard) => void
}

interface ICharsLeft {
  front: number,
  back: number,
  footerFront: number,
  footerBack: number
}

const CardForm = ({addCardToStack}: PropsType) => {
  const [newCard, setNewCard] = useState<ICard>({
    id: "",
    front: "",
    back: "",
    footerFront: "",
    footerBack: ""
  })

  const [charsLeft, setCharsLeft] = useState<ICharsLeft>({
    front: 140,
    back: 140,
    footerFront: 140,
    footerBack: 140
  })

  useEffect(() => {
    const maxChars = 140
    setCharsLeft({
      front: maxChars - newCard.front.length,
      back: maxChars - newCard.back.length,
      footerFront: maxChars - newCard.footerFront.length,
      footerBack: maxChars - newCard.footerBack.length,
    })

  }, [newCard])

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
      <div className={styles.formGroup}>
        <FormLabel inputID="front">Front</FormLabel>
      <input 
      type="text" 
      name="front" id="front" 
      value={newCard.front} 
      ref={inputRef} 
      onChange={(e) => updateInputValue(e)}
      maxLength={140}  
      required
        />
        <small className={styles.charsLeft}>{charsLeft.front} left</small>
      </div>


       <div className={styles.formGroup}>
        <FormLabel inputID="back">Back</FormLabel>
        <input 
        type="text" 
        name="back" 
        id="back" 
        value={newCard.back} 
        onChange={(e) => updateInputValue(e)}
        maxLength={140}
        required 
        />
        <small className={styles.charsLeft}>{charsLeft.back} left</small>
      </div>

      <div className={styles.formGroup}>
        <FormLabel inputID="footerFront">Footer Front</FormLabel>
        <input 
        type="text" 
        name="footerFront" 
        id="footerFront" 
        value={newCard.footerFront} 
        onChange={(e) => updateInputValue(e)}
        maxLength={140}  
        />
        <small className={styles.charsLeft}>{charsLeft.footerFront} left</small>
      </div>

      <div className={styles.formGroup}>
        <FormLabel inputID="footerFront">Footer Back</FormLabel>
        <input 
        type="text" 
        name="footerBack" 
        id="footerBack" 
        value={newCard.footerBack} 
        onChange={(e) => updateInputValue(e)}
        maxLength={140}  
        />
        <small className={styles.charsLeft}>{charsLeft.footerBack} left</small>
      </div>

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