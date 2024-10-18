import { useState } from "react";

export default function Flashcard({ question, answer }) {
  return (
    <div className="flashcard">
      <p>{question}</p>
    </div>
  );
}
