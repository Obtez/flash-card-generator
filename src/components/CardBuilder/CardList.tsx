import { Card } from "../../types";
import CardItem from "./CardItem";

interface PropsType {
  cardStack: Card[]
}

const CardList = ({cardStack}: PropsType) => {
  const cards = cardStack.map(card => {
  return (
    <CardItem card={card} key={card.id} />
    )
  })
  
  return (
    <>
      <h2>Your Cards</h2>
      <ul>
        {cards}
      </ul>
    </>  
  )
}

export default CardList;