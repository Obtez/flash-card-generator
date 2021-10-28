import {Card} from "../../types"
import styles from "./PdfPreview.module.scss";

interface PropsType {
  card: Card
}

const PrintCard = ({card}: PropsType) => {
  return (
    <div className={styles.card}>
    <div className={styles.cardBody}>
        <p>{card.front}</p>
    </div>
    <div className={styles.cardFooter}>
      <p>{card.back}</p>
    </div>
    </div>
  )
}

export default PrintCard