import Button from "components/Button/Button";
import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ICard } from "types";
import BuilderForm from "./BuilderForm";
import CardList from "./CardList";
import EditModal from "./EditModal";
import Preview from "./Preview";
import styles from "./_styles/CardBuilder.module.scss";

const BuilderPage = () => {
  const [cardStack, setCardStack] = useState<ICard[]>(() => {
    const stored = localStorage.getItem("cards");
    if (stored !== null) {
      const initialState = JSON.parse(stored);
      return initialState || []
    } else {
      return []
    }
  })

  const [showPreview, setShowPreview] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [cardToEdit, setCardToEdit] = useState({
    id: "",
    front: "",
    back: "",
    footerFront: "",
    footerBack: ""
  })

  const printRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("cards")
    if (stored !== null) {
      const cards = JSON.parse(stored)
      setCardStack(cards)
    }
  }, [showPreview, showEdit])

  async function addCardToStack(card: any) {
    if (cardStack.length === 0) {
      setCardStack([card])
    }

    const updatedStack = [...cardStack, card]
    localStorage.setItem("cards", JSON.stringify(updatedStack))
    setCardStack(updatedStack)
  }

  function deleteCard(id: string) {
    const filteredStack = cardStack.filter(c => c.id !== id)
    localStorage.setItem("cards", JSON.stringify(filteredStack))
    setCardStack([...filteredStack])
  }

  function deleteAllCards() {
    localStorage.setItem("cards", JSON.stringify([]))
    setCardStack([])
  }

  function populateEditModal(id: string, isOpen: boolean) {
    toggleEdit(isOpen)

    const tempCardStack = cardStack
    const index = tempCardStack.findIndex(c => c.id === id)
    setCardToEdit(tempCardStack[index])
  }

   function toggleEdit(isOpen: boolean) {
    if (isOpen) {
      setShowEdit(false)
    } else {
      setShowEdit(true)
    }
   }
  
  function updateCardStack(card: ICard, isOpen: boolean) {
    toggleEdit(isOpen)

   
    const tempCardStack = cardStack
    const index = tempCardStack.findIndex(c => c.id === card.id)
    tempCardStack[index] = card
    setCardStack(tempCardStack)

    localStorage.setItem("cards", JSON.stringify(tempCardStack))

    setCardToEdit({
      id: "",
      front: "",
      back: "",
      footerFront: "",
      footerBack: ""
    })
  }

  function togglePreview() {
    setShowPreview(!showPreview)
  }

  return (
      <main className={styles.cardBuilder}>

        <div className={styles.controls}>
          <BuilderForm addCardToStack={(card: ICard) => addCardToStack(card)}/>
        <div className={styles.previewBtn}>
          
            <ReactToPrint
                trigger={() => <Button type={"button"} isPrimary={true}>Print</Button>}
                content={() => printRef.current}
                documentTitle={"Flash Cards"}
                pageStyle={"margin: 1.2cm 1cm"}
                />
          </div>

          <div className={styles.deleteBtn}>
            <Button type="button" isPrimary={false} onClick={() => deleteAllCards()}>Delete All Cards</Button>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          {cardStack.length > 0 ?
              <CardList cardStack={cardStack} deleteCard={deleteCard} populateEditModal={populateEditModal}/> : null}
        </div>

        <div className={styles.hidden} ref={printRef}>
                  <Preview cardStack={cardStack} togglePreview={togglePreview}/>
        </div>



        {
          showEdit ? (
              <div className={styles.editModal}>
                <div className={styles.editContainer}>
                  <EditModal cardToEdit={cardToEdit} updateCardStack={updateCardStack}/>
                </div>
              </div>
          ) : null
        }
      </main>
  );
}

export default BuilderPage;