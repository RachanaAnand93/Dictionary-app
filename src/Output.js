import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Meaning.css";
export default function Output(props) {
  console.log(props.output);
  if (props.output) {
    return (
      <div className="output">
        <section>
          <h2>{props.output.word}</h2>
          <Phonetic phonetic={props.output.phonetics} />
        </section>

        {props.output.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />{" "}
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
