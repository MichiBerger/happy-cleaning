import './App.css';
import Room from './Room.js';
import Header from './Header.js';

// Alternativ : export default App() {}
function App() {
  return (
    <div className="App">
      <Header>Happy Cleaning</Header>
      <main>
        <Room text="Küche" isClean />
        <Room text="Wohnzimmer" isClean={false} />
        <Room text="Bad" />
      </main>
    </div>
  );
}
// wenn export default App() {}
export default App;
