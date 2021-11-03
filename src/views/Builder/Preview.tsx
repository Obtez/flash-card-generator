import { useState, useEffect, useRef, ChangeEvent } from "react";
import FormLabel from "components/forms/FormLabel/FormLabel";
import Button from "components/Button/Button";
import ReactToPrint from "react-to-print";
import { v4 as uuidv4 } from 'uuid';
import { AiFillCloseCircle } from "react-icons/ai";
import { ICard } from "types";
import CardSide from './CardSide';
import styles from "./_styles/Preview.module.scss";

interface PropsType {
  cardStack: ICard[]
  togglePreview: () => void
}

const Preview = ({ togglePreview }: PropsType) => {
  const [cardStack, setCardStack] = useState<ICard[]>([])
  const [withBorder, setWithBorder] = useState(false)
  const printRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("cards")
    if (stored !== null) {
      const cards = JSON.parse(stored)
      setCardStack(cards)
    } 
  }, [withBorder])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "showBorder") {
      setWithBorder(!withBorder)
    }
  }
  
  let sortedPages: ICard[][] = []

   function sortCardsIntoPageArrays() {
     let cards: ICard[] = cardStack;
     let pagesArray: ICard[][] = []

     let i = cards.length
    while (i > 0) {
      if (cards.length >= 10) {

        // Exact amount needed for 1 page group (front + back)
        const pageSet = [cards.splice(0, 10)]
        pagesArray = [...pagesArray, pageSet[0]]
        i -= 10

      } else {

        // If there are less than 10 cards left
        const pageSet = [cards.splice(0, cards.length)]
        pagesArray = [...pagesArray, pageSet[0]]
        i = 0

      }
    }
     sortedPages = pagesArray;
   }
  
  
  // To enable easy 2-side print, the front and the back of each card need to be on different pages
  // and aligend correctly. 
  function generatePages() {
    // sortedPages [[page1 card fronts], [page2 card backs],...]
    // one array per page
    sortCardsIntoPageArrays()
    
    return sortedPages.map((cardPair) => {
       
      return (
        <div key={uuidv4()} className={styles.preview}>
          {/* page 1 with card fronts */}
          <div className={styles.pageInnerContainerFront} key={uuidv4()}>
            {cardPair.map(cardSide => <CardSide id={uuidv4()} cardSide={cardSide} isFront={true} withBorder={withBorder} />)}
          </div>

          {/* page 2 with card backs */}
          <div className={styles.pageInnerContainerBack} key={ uuidv4()}>
            {cardPair.map(cardSide => <CardSide id={uuidv4()} cardSide={cardSide} isFront={false} withBorder={withBorder} />)}
          </div>
        </div>
      )
    })
  }
  
  return (
    <div className={styles.previewLayout} ref={printRef}>
      <header>
        <AiFillCloseCircle className={styles.modalCloseBtn} onClick={() => togglePreview()} />
        <h1>Preview</h1>
        <p>Scroll to see next pages</p>
      </header>
      <div className={styles.previewBody}>
        <div className={styles.pageContainer}>
          {generatePages()}
        </div>

          <span className={styles.checkboxFormGroup}>
            <input type="checkbox" name="showBorder" onChange={handleChange} />
            <FormLabel inputID="front">Show Border</FormLabel>
          </span>

        <ReactToPrint
          trigger={() => <Button type="button">Print</Button>}
          content={() => printRef.current}
          documentTitle="Flash Cards"
          pageStyle="margin: 1.2cm 1cm"
        />
      </div>
    </div>
  )
}

export default Preview;