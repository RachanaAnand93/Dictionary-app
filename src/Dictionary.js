import React, { useState } from "react";
import Output from "./Output";
import "./Meaning.css";
import axios from "axios";

export default function Dicitonary() {
  let [words, setWords] = useState("");
  let [output, setOutput] = useState(null);

  function handleSubmit(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setOutput(response.data[0]);
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
      <Output output={output} />
    </div>
  );
}
