import Flashcard from "./Flashcard";

export default function Deck({ deck }) {
  return (
    <>
      {deck.map((flashcard, index) => (
        <Flashcard key={index} {...flashcard} />
      ))}
    </>
  );
}
