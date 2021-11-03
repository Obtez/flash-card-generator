import { ICard } from "types";
import styles from "./_styles/Preview.module.scss";

interface PropsTypes {
  id: string
  cardSide: ICard
  isFront: boolean
  withBorder: boolean
}

const CardSide = ({ id, cardSide, isFront, withBorder }: PropsTypes) => {
  return (
    <>
      {
        withBorder? (
          <div className={styles.card} key={id}>
            <div className={`${styles.cardBody} ${styles.withBorder}`}>
              <p>{isFront ? cardSide.front : cardSide.back}</p>
            </div>
          </div>
      ) : (
        <div className={styles.card} key={id}>
          <div className={styles.cardBody}>
            <p>{isFront ? cardSide.front : cardSide.back}</p>
          </div>
        </div>
      )
        }
    </>
  )
}

export default CardSide;