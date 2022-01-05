/* Context */
import { useCards } from '../../context/GameContext';

/* Components */
import Card from '../Card';

export default function Cards() {
  const { gameState }: any = useCards(); // Using gameState from within custom hook.

  return (
    <div className="container d-flex justify-content-evenly">
      {
        gameState.cardList.map((card: any) => <Card key={card.id} data={card} />) // Cards listing..
      }
    </div>
  )
}
