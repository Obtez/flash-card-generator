import {Card} from "../../types"

interface PropsType {
  card: Card
}

const CardItem = ({card}: PropsType) => {
  return (
  <li>
    <p>{card.front}</p>
    <p>{card.back}</p>
  </li>
  )
}

export default CardItem;