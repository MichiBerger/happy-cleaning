import './Room.css';

export default function Room({
  text,
  description,
  isDescriptionVisible,
  isClean,
}) {
  //erstelle eine Konstante
  //setze die Klasse Room__status
  //überprüfe ob isClean gesetzt ist
  //true dann soll Room__status--clean gesetzt werden,
  //false Room__status--dirty
  const statusClassName = isClean
    ? 'Room__status Room__status--clean'
    : 'Room__status Room__status--dirty';

  // const renderedDescription = isDescriptonVisible && <p>{description}</p>

  return (
    <section className="Room">
      <header className="Room__header">
        {text} <div className={statusClassName}></div>
      </header>
      <p hidden={!isDescriptionVisible}>{description}</p>
    </section>
  );
}

//  alternative zu  {isDescriptonVisible && <p>{description}</p>}
