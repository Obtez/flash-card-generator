import { ICard } from "types";
import Card from "./Card";
import styles from "./_styles/CardBuilder.module.scss";

interface PropsType {
  cardStack: ICard[]
  deleteCard: (id: string) => void
  populateEditModal: (id: string, isOpen: boolean) => void
}

const CardList = ({ cardStack, deleteCard, populateEditModal }: PropsType) => {  
  return (
    <section className={styles.cardList}>
      <ul>
        {cardStack.map(card => {
        return (
          <Card card={card} key={card.id} deleteCard={deleteCard} populateEditModal={populateEditModal} />
          )
        })}
      </ul>
      
    </section>  
  )
}

export default CardList;