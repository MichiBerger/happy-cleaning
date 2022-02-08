import './App.css';
import Room from './Room.js';
import Header from './Header.js';

// Alternativ : export default App() {}
function App() {
  //const mit einem Array erzeugen
  //über Array mit map iterieren
  const rooms = [
    {
      text: 'Küche',
      description: 'Herdplatten nicht vergessen',
      isDescriptionVisible: true,
      isClean: false,
    },
    {
      text: 'Wohnzimmer',
      description: 'Staubwischen auch auf dem Fensterbrett',
      isDescriptionVisible: true,
      isClean: true,
    },
    {
      text: 'Bad',
      description: 'Eigener Lappen für das Klo!',
      isDescriptionVisible: false,
      isClean: false,
    },
  ];

  return (
    <div className="App">
      <Header>Happy Cleaning</Header>
      <main>
        {rooms.map(({ text, description, isDescriptionVisible, isClean }) => {
          <Room
            key={text}
            text={text}
            description={description}
            isDescriptionVisible={isDescriptionVisible}
            isClean={isClean}
          />;
        })}
      </main>
    </div>
  );
}
// wenn export default App() {}
export default App;
