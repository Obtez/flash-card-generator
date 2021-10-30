import { useState } from "react";
import {Link} from "react-router-dom";
import { ICard } from "types"
import BuilderForm from "../BuilderForm/BuilderForm"
import CardList from "../CardList/CardList";
import { AiOutlineFileSearch, AiFillCloseCircle } from "react-icons/ai";
import {IoIosArrowBack} from "react-icons/io"
import styles from "../_styles/CardBuilder.module.scss";
import Preview from "../Preview/Preview";

const BuilderPage = () => {
  const [cardStack, setCardStack] = useState<ICard[]>([])
  const [showPreview, setShowPreview] = useState(false)


  //! DEVELOPMENT ONLY
  function MOCKDATA() {
    let DATA: ICard[] = []

    while (DATA.length < 20) {
      DATA.push({
        id: `${DATA.length + 1}`,
        front: `f${DATA.length + 1}`,
        back: `b${DATA.length + 1}`
      })
    }

    setCardStack(DATA)
  }
  //! END

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
    <Link to="/" className={styles.backLink}><IoIosArrowBack /> Back Home</Link>
       {
        showPreview ? (
          <div className={styles.previewContainer}>
            <AiFillCloseCircle className={styles.modalCloseBtn} onClick={() => togglePreview()} />
            <Preview cardStack={cardStack} />
          </div>
        ) : ""
      }
      <div className={styles.noPrintContainer}>

        <h1>Card Builder</h1>
        {/* DEVELOPMENT ONLY */}
        {/* <button onClick={MOCKDATA}>MOCK DATA</button> */}
        {/* END */}
        <BuilderForm addCardToStack={(card: ICard) => addCardToStack(card)} />
        <button type="button" className={styles.primaryBtn} onClick={() => togglePreview()}><AiOutlineFileSearch /> Preview and Print</button>        
        {cardStack.length > 0 ? <CardList cardStack={cardStack} /> : null}

      </div>
    </main>
  )
}

export default BuilderPage;