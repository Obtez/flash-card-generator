import { Card } from "../../types";
import CardItem from "./CardItem";
import styles from "./CardBuilder.module.scss"

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
    <section className={styles.cardList}>
      <h2>Your Cards</h2>
      <ul>
        {cards}
      </ul>
    </section>  
  )
}

export default CardList;