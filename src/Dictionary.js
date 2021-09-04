import React, { useState } from "react";
import Output from "./Output";
import Images from "./Images";
import axios from "axios";

export default function Dicitonary(props) {
  let [words, setWords] = useState(props.defaultwords);
  let [output, setOutput] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleSubmit(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setOutput(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;
    axios.get(apiUrl).then(handleSubmit);
    const imgapiKey =
      "563492ad6f91700001000001f26dee2862d74e4eba9a64d233ba7a9b";
    let imgUrl = `https://api.pexels.com/v1/search?query=${words}&per_page=9`;
    let header = { Authorization: `Bearer ${imgapiKey}` };
    axios.get(imgUrl, { headers: header }).then(getImages);
  }
  function handleClick(event) {
    event.preventDefault();
    //api:https://dictionaryapi.dev/
    search();
  }

  function getImages(response) {
    setPhotos(response.data.photos);
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
        <form onSubmit={handleClick}>
          <input
            type="search"
            onChange={keywordChange}
            placeholder="Enter a word to search..."
          />
        </form>

        <Output output={output} />
        <Images images={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
