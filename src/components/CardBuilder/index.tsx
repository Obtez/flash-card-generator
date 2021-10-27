import { useState } from "react";
import { Card } from "../../types"
import CardForm from "./CardForm";
import CardList from "./CardList";


const CardBuilder = () => {
  const [cardStack, setCardStack] = useState<Card[]>([])

  function addCardToStack(card: any) {
    if (card.front) {
      console.log("front", card.front);
    }

    if (card.back) {
      console.log("back", card.back);
    }

    if (!card.front && !card.back) {
      console.log("Empty card sent");
    }

    if (cardStack.length === 0) {
      setCardStack([card])
    }
    setCardStack([...cardStack, card])

  }

  return (
    <>
      <p>CardBuilder</p>
      <CardForm addCardToStack={(card: Card) => addCardToStack(card)} />
      <a href="/preview">Preview</a>
      <a href="#">Download</a>
      {cardStack.length > 0 ? <CardList cardStack={cardStack} /> : null}
    </>
  )
}

export default CardBuilder;