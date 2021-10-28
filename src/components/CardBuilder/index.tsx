import { useState } from "react";
import { Card } from "../../types"
import CardForm from "./CardForm";
import CardList from "./CardList";
import { AiOutlineFileSearch, AiOutlineDownload } from "react-icons/ai";
import styles from "./_styles/CardBuilder.module.scss";
import Preview from "./Preview";


const CardBuilder = () => {
  const [cardStack, setCardStack] = useState<Card[]>([])
  const [showPreview, setShowPreview] = useState(false)

  // DELETE ME
  function MOCKDATA() {
    let DATA: Card[] = []

    while (DATA.length < 20) {
      DATA.push({
        id: `${DATA.length + 1}`,
        front: `f${DATA.length + 1}`,
        back: `b${DATA.length + 1}`
      })
    }

    setCardStack(DATA)
  }
  // DELETE ME

  function addCardToStack(card: any) {
    if (card.front) {
    }

    if (card.back) {
    }

    if (!card.front && !card.back) {
    }

    if (cardStack.length === 0) {
      setCardStack([card])
    }
    setCardStack([...cardStack, card])

  }

  function togglePreview() {
    setShowPreview(!showPreview)
  }

  return (
    <main className={styles.cardBuilderContainer}>
      <div className={styles.noPrintContainer}>
        <h1>CardBuilder</h1>
        <button onClick={MOCKDATA}>MOCK DATA</button>
        <CardForm addCardToStack={(card: Card) => addCardToStack(card)} />
        <button type="button" className={styles.primaryBtn} onClick={() => togglePreview()}><AiOutlineFileSearch /> Preview</button>
        <button type="button" className={styles.primaryBtn}><AiOutlineDownload/> Download</button>
        {cardStack.length > 0 ? <CardList cardStack={cardStack} /> : null}
      </div>
      {
        showPreview ? <Preview cardStack={cardStack} /> : ""
      }
    </main>
  )
}

export default CardBuilder;