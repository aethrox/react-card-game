/* Style */
import styles from './index.module.css';

/* Context */
import { useCards } from '../../context/GameContext';

export default function DefaultCard() {
  const { onClickDefaultCard }: any = useCards(); // Using onClickDefaultCard from within custom hook.

  return (
    <>
      <div className={`card mx-3 py-5 bg-dark ${styles.gCard}`} onClick={onClickDefaultCard}>
        <div className="card-body">
          <img src="img/question-icon.png" className={`rounded ${styles.gImage}`} alt="..." />
        </div>
      </div>
    </>
  )
}
