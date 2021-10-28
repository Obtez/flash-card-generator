import { v4 as uuidv4 } from 'uuid';
import { Card } from "../../types";
import styles from "./_styles/Preview.module.scss";

interface PropsType {
  cardStack: Card[]
}

const Preview = ({ cardStack }: PropsType) => {
  let sortedPages: Card[][] = []
  let allCards = cardStack

   function sortCardsIntoPages() {
     let cards: Card[] = allCards;
     let pagesArray: Card[][] = []

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
  
  function displayPages() {
     sortCardsIntoPages()
     return sortedPages.map((p, index) => {
      return (
        <div key={uuidv4()}>
          <div className={styles.pageInnerContainerFront} key={uuidv4()}>
            {p.map(text => {
              return (

                  <div className={styles.card} key={uuidv4()}>
                    <div className={styles.cardBody}>
                      <p>{text.front}</p>
                    </div>
                  </div>

              )
            })}
          </div>
          <div className={styles.pageInnerContainerBack} key={ uuidv4()}>
            {p.map(text => {
              return (
                <div className={styles.card} key={uuidv4()}>
                  <div className={styles.cardBody}>
                    <p>{text.back}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    })
  }
  
  return (
    <div>
      {displayPages()}
    </div>
  )
}

export default Preview;