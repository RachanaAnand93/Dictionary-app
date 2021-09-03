import React, { useState } from "react";
import Output from "./Output";
import axios from "axios";

export default function Dicitonary(props) {
  let [words, setWords] = useState(props.defaultwords);
  let [output, setOutput] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleSubmit(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setOutput(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;
    axios.get(apiUrl).then(handleSubmit);
  }
  function handleClick(event) {
    event.preventDefault();
    //api:https://dictionaryapi.dev/
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function keywordChange(event) {
    setWords(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dicitionary">
        <section>
          <form onSubmit={handleClick}>
            <input
              type="search"
              onChange={keywordChange}
              placeholder="Enter a word to search..."
            />
          </form>
        </section>
        <Output output={output} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
