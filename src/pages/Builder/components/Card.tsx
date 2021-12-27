import { AiOutlineDelete } from "react-icons/ai"
import { BiEdit } from "react-icons/bi"
import { ICard } from "types";
import styles from "../_styles/CardBuilder.module.scss";

interface PropsType {
  card: ICard
  deleteCard: (id: string) => void
  populateEditModal: (id: string, isOpen: boolean) => void
}

const Card = ({ card, deleteCard, populateEditModal }: PropsType) => {
  return (
    <li className={styles.cardItem}>
      <div className={styles.cardFront} onClick={() => populateEditModal(card.id, false)}>
        <p className={styles.cardBody}>{card.front}</p>
        {
          card.footerFront ? (
          <small className={styles.cardFooter}>{card.footerFront}</small>
          ) : null
        }
  
      </div>
      
      <div className={styles.cardBack} onClick={() => populateEditModal(card.id, false)} >
        <p className={styles.cardBody}>{card.back}</p>
         {
          card.footerBack ? (
          <small className={styles.cardFooter}>{card.footerBack}</small>
          ) : null
        }
      </div>

      <div className={styles.btnContainer}>
        <BiEdit className={styles.editIcon} onClick={() => populateEditModal(card.id, false)} />
        <AiOutlineDelete className={styles.deleteIcon} onClick={() => deleteCard(card.id)}/>
      </div>

  </li>
  )
}

export default Card;