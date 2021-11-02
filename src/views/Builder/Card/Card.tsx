import Button from "components/Button/Button";
import { useState } from "react";
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
      <AiOutlineDelete className={styles.deleteIcon} onClick={() => deleteCard(card.id)}/>
      <div className={styles.cardFront} onClick={() => populateEditModal(card.id, false)}>
        <BiEdit className={styles.editIcon} />
        <p>{card.front}</p>
  
      </div>
      
      <div className={styles.cardBack} onClick={() => populateEditModal(card.id, false)} >
        <BiEdit className={styles.editIcon} />
        <p>{card.back}</p>
      </div>

  </li>
  )
}

export default Card;