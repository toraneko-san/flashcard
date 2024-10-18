import { useState } from "react";
import Deck from "./Deck";
import originalDeck from "../assets/deck";

export default function App() {
  const [start, setStart] = useState(false);
  const [deck, setDeck] = useState([]);

  function startRecall() {
    const newDeck = [...originalDeck];

    for (let i = originalDeck.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    setDeck(newDeck);
    setStart(true);
  }

  return (
    <>
      <h1>Flashcard</h1>
      {start ? <Deck deck={deck} /> : <div onClick={startRecall}>Iniciar</div>}
    </>
  );
}
