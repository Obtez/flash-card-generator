import { ReactChild, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Card } from "../../types";
import styles from "./_styles/Preview.module.scss";

interface PropsType {
  cardStack: Card[]
}

type Pages = [string[]]

const Preview = ({ cardStack }: PropsType) => {
  // const [sortedPages, setSortedPages] = useState<Card[][]>([])
  // const [pages, setPages] = useState<ReactChild[]>([])

  let sortedPages: Card[][] = []
  let pages: ReactChild[] = []

  let allCards = cardStack

  function splitCardStack(cards: Card[]) {
    const fronts = allCards.map(c => c.front)
    const backs = allCards.map(c => c.back)

    return {
      fronts,
      backs
    }
  }

  // function sortCardsIntoPages() {
  //   // {[fronts], [backs]}
  //   const { fronts, backs } = splitCardStack(allCards)

  //   let i = fronts.length
  //   while (i > 0) {
  //     console.log("function running");
  //     if (fronts.length >= 10) {
  //       // Exact amount needed for 1 page group (front + back)
  //       const pageSet = [fronts.splice(0, 10), backs.splice(0, 10)]
  //       sortedPages.push(pageSet[0], pageSet[1])
  //       // setSortedPages([...sortedPages, ...pageSet])
  //       i -= 10
  //     } else {
  //       // If there are less than 10 cards left
  //       const pageSet = [fronts.splice(0, fronts.length), backs.splice(0, backs.length)]
  //       sortedPages.push(pageSet[0], pageSet[1])
  //       i = 0
  //       // sortedPages = [...sortedPages, ...pageSet]
  //       // setSortedPages([...sortedPages, ...pageSet])
  //     }
  //   }
    
  // }

   function sortCardsIntoPages() {
     let cards: Card[] = allCards;
    console.log("SORTCARDSINTOPAGES - CARDS", cards);
     let pagesArray: Card[][] = []

     let i = cards.length
     console.log("CARDSLENGTH", i);
    while (i > 0) {
      if (cards.length >= 10) {
        // Exact amount needed for 1 page group (front + back)
        const pageSet = [cards.splice(0, 10)]
        console.log("PAGESET", pageSet[0]);
        pagesArray = [...pagesArray, pageSet[0]]
        console.log("CONCAT", pagesArray);
        // setSortedPages([...sortedPages, ...pageSet])
        i -= 10
      } else {
        // If there are less than 10 cards left
        const pageSet = [cards.splice(0, cards.length)]
        console.log("PAGESET", pageSet[0]);
        pagesArray = [...pagesArray, pageSet[0]]
        console.log("CONCAT", pagesArray);
        i = 0
        // sortedPages = [...sortedPages, ...pageSet]
        // setSortedPages([...sortedPages, ...pageSet])
      }
    }
     console.log("pagesArray", pagesArray);
    //  setSortedPages(pagesArray)
     sortedPages = pagesArray;
  }
  
  // function displayPages() {
  //   console.log(sortedPages);
  //   return sortedPages.map(p => {
  //     return (
  //       <div className={styles.pageInnerContainer}>
  //         {p.map(text => {
  //           return (
  //             <div className={styles.card}>
  //               <div className={styles.cardBody}>
  //                 <p>{text}</p>
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     )
  //   })
  // }

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

  useEffect(() => {

      // sortCardsIntoPages()
      // setPages(displayPages())
    

  }, [])
  
  console.log("cardStack - EOF", cardStack);

  return (
    <div>
      {displayPages()}
    </div>
  )
}

export default Preview;