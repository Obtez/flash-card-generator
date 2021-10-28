import { FormEvent, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Card } from "../../types";
import styles from "./_styles/CardBuilder.module.scss";

interface PropsType {
  addCardToStack: (card: Card) => void;
}

const CardForm = ({addCardToStack}: PropsType) => {
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  const [charCountFront, setCharCountFront] = useState(140)
  const [charCountBack, setCharCountBack] = useState(140)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!front) {
      // caution message
    }

    if (!back) {
      // caution message
    }

    if (!front && !back) {
      return null
    }

    const card: Card = {
      id: uuidv4(),
      front,
      back
    }

    addCardToStack(card)

    setFront("")
    setBack("")
  }

  useEffect(() => {
    setCharCountFront(140 - front.length)
    setCharCountBack(140-back.length)
  }, [front, back])

  return (
    <form onSubmit={handleSubmit} className={styles.cardBuilderForm}>
      <label htmlFor="front">Front</label>
      <div className={styles.inputGroup}>
        <input type="text" id="front" maxLength={140} value={front} onChange={(e) => setFront(e.target.value)} />
        <small className={styles.charCounter}>{charCountFront}</small>
      </div>
      <label htmlFor="back">Back</label>
      <div className={styles.inputGroup}>
      <input type="text" maxLength={140} id="front" value={back} onChange={(e) => setBack(e.target.value)} />
        <small className={styles.charCounter}>{charCountBack}</small>
      </div>
      <input type="submit" value="Add" />
    </form>
  )
}

export default CardForm;