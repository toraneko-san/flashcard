import { useState } from "react";
import Deck from "./Deck";

export default function App() {
  const [start, setStart] = useState(false);

  function startRecall() {
    setStart(true);
  }

  return (
    <>
      <h1>Flashcard</h1>
      {start ? <Deck /> : <div onClick={startRecall}>Iniciar</div>}
    </>
  );
}
