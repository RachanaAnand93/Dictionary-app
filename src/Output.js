import React from "react";
import Meaning from "./Meaning";
import "./Meaning.css";
export default function Output(props) {
  console.log(props.output);
  if (props.output) {
    return (
      <div className="output">
        <h2>{props.output.word}</h2>
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
