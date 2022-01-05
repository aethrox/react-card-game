/* Components */
import Cards from '../Cards';
import DefaultCard from '../DefaultCard';
import Header from '../Header';

export default function Game() {
  return (
    <div className="text-center">
      {/* Header component */}
      <Header />
      {/* Cards component */}
      <Cards />
      <br />
      <br />
      {/* Default card component */}
      <DefaultCard />
    </div>
  )
}
