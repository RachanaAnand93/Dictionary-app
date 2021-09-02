import React, { useState } from "react";

export default function Dicitonary() {
  let [words, setWords] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${words}`);
  }

  function keywordChange(event) {
    setWords(event.target.value);
  }
  return (
    <div className="Dicitionary">
      <form onSubmit={Search}>
        <input type="search" onChange={keywordChange} />
      </form>
    </div>
  );
}
