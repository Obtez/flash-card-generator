import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Card } from "../../types"

interface PropsType {
  addCardToStack: (card: Card) => void;
}

const CardForm = ({addCardToStack}: PropsType) => {
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="front">
        <input type="text" id="front" value={front} onChange={(e) => setFront(e.target.value)} />
      </label>
      <label htmlFor="back">
        <input type="text" id="front" value={back} onChange={(e) => setBack(e.target.value)} />
      </label>

      <input type="submit" />
    </form>
  )
}

export default CardForm;