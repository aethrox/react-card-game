import styles from './index.module.css';

import { useCards } from '../../context/GameContext'

export default function Card({ data }: any) {
  const { selectedCard, setSelectedCard }: any = useCards()
  return (
    <>
      <div className={`card mx-3 py-5 bg-dark ${selectedCard === data.cardImg ? styles.selectedCard : styles.gCard}`} onClick={() => setSelectedCard(data.cardImg)}>
        <div className="card-body">
          <img src={data.cardImg} className={`rounded ${styles.gImage}`} alt="..." />
        </div>
      </div>
    </>
  )
}
