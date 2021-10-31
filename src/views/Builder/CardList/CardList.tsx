import { ICard } from "types";
import Card from "../Card/Card";
import styles from "../_styles/CardBuilder.module.scss";

interface PropsType {
  cardStack: ICard[]
}

const CardList = ({ cardStack }: PropsType) => {
  
  const cards = cardStack.map(card => {
  return (
    <Card card={card} key={card.id} />
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