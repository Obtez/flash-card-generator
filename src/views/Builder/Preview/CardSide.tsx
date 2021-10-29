import { ICard } from "types";
import styles from "../_styles/Preview.module.scss";

interface PropsTypes {
  id: string,
  cardSide: ICard,
  isFront: boolean
}

const CardSide = ({id, cardSide, isFront}: PropsTypes) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.cardBody}>
        <p>{isFront ? cardSide.front : cardSide.back}</p>
      </div>
    </div>
  )
}

export default CardSide;