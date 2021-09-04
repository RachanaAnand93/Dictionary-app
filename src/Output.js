import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Meaning.css";
export default function Output(props) {
  console.log(props.output);
  if (props.output) {
    return (
      <div className="output-id">
        <section>
          <h2>
            <strong> {props.output.word} </strong>{" "}
          </h2>
          <Phonetic phonetic={props.output.phonetics} />
        </section>

        {props.output.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
