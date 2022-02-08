import './App.css';
import Room from './Room.js';
import Header from './Header.js';

// Alternativ : export default App() {}
function App() {
  return (
    <>
    <Header text="Happy Cleaning" />
    <main className="App">
      <Room text="Küche" isClean/>
      <Room text="Wohnzimmer" isClean={false}/>
      <Room text="Bad" />
    </main>
    </>
  );
}
// wenn export default App() {}
export default App;
