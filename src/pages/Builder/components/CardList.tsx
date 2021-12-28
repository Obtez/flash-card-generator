import { ICard } from "types";
import Card from "./Card";
import styles from "./CardList.module.scss";

interface PropsType {
  cardStack: ICard[]
  deleteCard: (id: string) => void
  populateEditModal: (id: string, isOpen: boolean) => void
}

const CardList = ({ cardStack, deleteCard, populateEditModal }: PropsType) => {  
  return (
    <section className={styles.cardList}>
      <header className={styles.columnHeading}>
          <h3>Front</h3>
          <h3>Back</h3>
      </header>
      <ul>
        {
          cardStack.map(card => <Card
            key={card.id}
            card={card}
            deleteCard={deleteCard}
            populateEditModal={populateEditModal}
          />
          )
        }
      </ul>
      
    </section>  
  )
}

export default CardList;