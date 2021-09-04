import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h3>{props.meaning.partOfSpeech}:</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <section key={index}>
            <p>
              {definition.definition} <br />
              <div className="example">Example: {definition.example}</div>
              <Synonyms synonym={definition.synonyms} />
            </p>
          </section>
        );
      })}
    </section>
  );
}
