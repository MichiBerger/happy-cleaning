import './App.css';
import Room from './Room.js';
import Header from './Header.js';

// Alternativ : export default App() {}
function App() {
  return (
    <div className="App">
      <Header>Happy Cleaning</Header>
      <main>
        <Room
          text="Küche"
          description="Herdplatten nicht vergesen"
          isDescriptonVisible
          isClean
        />
        <Room
          text="Wohnzimmer"
          description="Staubwischen"
          isDescriptonVisible
          isClean={false}
        />
        <Room text="Bad" description="Eigener Lappen für das Klo!" />
      </main>
    </div>
  );
}
// wenn export default App() {}
export default App;
