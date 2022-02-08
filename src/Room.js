import './Room.css';

export default function Room({
  text,
  isClean,
  description,
  isDescriptonVisible,
}) {

  //erstelle eine Konstante
  //setze die Klasse Room__status 
  //überprüfe ob isClean gesetzt ist 
  //true dann soll Room__status--clean gesetzt werden,
  //false Room__status--dirty
  const statusClassName = `Room__status Room__status--${
    isClean ? 'clean' : 'dirty'
  } `;
// const renderedDescription = isDescriptonVisible && <p>{description}</p>
 
  return (
    <section className="Room">
      <header className='Room__header'>
      {text} 
      <div className={statusClassName}></div>
      </header>
      {text} 
      {isDescriptonVisible && <p>{description}</p>}
    </section>
  );
}

// <p hidden={!isDescriptionVisible}>{description}</p> alternative zu  {isDescriptonVisible && <p>{description}</p>}