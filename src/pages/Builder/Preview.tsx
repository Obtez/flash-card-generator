import { v4 as uuidv4 } from 'uuid';
import { ICard } from "types";
import CardSide from './components/CardSide';
import styles from "./_styles/Preview.module.scss";


interface PropsType {
  cardStack: ICard[]
  togglePreview: () => void
}

const Preview = ({ cardStack, togglePreview }: PropsType) => {

  let sortedPages: ICard[][] = []

   function sortCardsIntoPageArrays() {
     let cards: ICard[] = cardStack.slice();
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
  // and aligned correctly. 
  function generatePages() {
    // sortedPages [[page1 card fronts], [page2 card backs],...]
    // one array per page
    sortCardsIntoPageArrays()
    
    return sortedPages.map((cardPair) => {
       
      return (
        <div key={uuidv4()} className={styles.preview}>
          {/* page 1 with card fronts */}
          <div className={styles.pageInnerContainerFront} key={uuidv4()}>
            {cardPair.map(cardSide => <CardSide id={uuidv4()} cardSide={cardSide} isFront={true} />)}
          </div>

          {/* page 2 with card backs */}
          <div className={styles.pageInnerContainerBack} key={ uuidv4()}>
            {cardPair.map(cardSide => <CardSide id={uuidv4()} cardSide={cardSide} isFront={false} />)}
          </div>
        </div>
      )
    })
  }
  
  return (
        <div className={styles.pageContainer}>
          {generatePages()}
        </div>
  )
}

export default Preview;