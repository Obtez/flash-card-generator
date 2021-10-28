import { Card } from "../../types";
import styles from "./_styles/CardBuilder.module.scss";

interface PropsType {
  card: Card
}

const CardItem = ({card}: PropsType) => {
  return (
  <li className={styles.cardItem}>
    <div className={styles.cardFront}>
        <p>{card.front}</p>
    </div>
     <div className={styles.cardBack}>
        <p>{card.back}</p>
      </div>
  </li>
  )
}

export default CardItem;