import React, { useState } from "react";
import axios from "axios";

export default function Dicitonary() {
  let [words, setWords] = useState("");

  function handleSubmit(response) {
    console.log(response.data);
  }
  function Search(event) {
    event.preventDefault();
    //api:https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;
    axios.get(apiUrl).then(handleSubmit);
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
