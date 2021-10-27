import styles from "./PdfPreview.module.scss";

interface testCard {
  text: string,
  footer: string,
}

interface PropsType {
  card: testCard
}

const PrintCard = ({card}: PropsType) => {
  return (
    <div className={styles.card}>
    <div className={styles.cardBody}>
        <p>{card.text}</p>
    </div>
    <div className={styles.cardFooter}>
      <p>{card.footer}</p>
    </div>
    </div>
  )
}

export default PrintCard