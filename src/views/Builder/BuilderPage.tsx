import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { ICard } from "types"
import BuilderForm from "./BuilderForm"
import CardList from "./CardList";
import {IoIosArrowBack} from "react-icons/io"
import styles from "./_styles/CardBuilder.module.scss";
import Preview from "./Preview";
import Button from "components/Button/Button";
import EditModal from "./EditModal";

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

  async function deleteAllCards() {
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
    <div className={styles.cardBuilder}>

      <header>
        <Link to="/" className={styles.backLink}><IoIosArrowBack /> Back Home</Link>
        <h1>Card Builder</h1>
      </header>
      
      <main>
      
        <BuilderForm addCardToStack={(card: ICard) => addCardToStack(card)} />
        <span className={styles.previewBtn}><Button type="button" onClick={() => togglePreview()}>Preview and Print</Button></span>
        <span><Button type="button" onClick={deleteAllCards}>Delete all Cards</Button></span>
        {cardStack.length > 0 ? <CardList cardStack={cardStack} deleteCard={deleteCard} populateEditModal={populateEditModal} /> : null}
    
       {
      showPreview ? (
        <div className={styles.modal}>
          <div className={styles.previewContainer}>
            <Preview cardStack={cardStack} togglePreview={togglePreview} />
          </div>
        </div>
      ) : ""
        }
        
        {
          showEdit ? <EditModal cardToEdit={cardToEdit} updateCardStack={updateCardStack} /> : null
        }
     </main>
    </div>
  )
}

export default BuilderPage;