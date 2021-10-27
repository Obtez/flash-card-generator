import styles from "./PdfPreview.module.scss";
import PrintCard from "./PrintCard";

interface testCard {
  text: string,
  footer: string,
}

const PdfPreview = () => {
  const cards: Array<testCard> = [
    {text: "Hello", footer: "Unit 1"},
    {text: "Bye", footer: "Unit 1"},
    {text: "Word", footer: "Unit 1"},
    {text: "This", footer: "Unit 1"},
    {text: "No, that", footer: "Unit 1"},
    {text: "More words", footer: "Unit 1"},
    {text: "Awesome", footer: "Unit 1"},
    {text: "Hope this works", footer: "Unit 1"},
    {text: "Duckie cute", footer: "Unit 1"},
    {text: "No idea what to write", footer: "Unit 1"},
  ]

  const previewCards = cards.map(card => <PrintCard card={card} />)

  return (
    <>
      <main className={styles.pageInnerContainer}>
        {previewCards}
      </main>
    </>  
  )
}

export default PdfPreview;