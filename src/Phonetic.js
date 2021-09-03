import React from "react";

export default function Phonetic(props) {
  return (
    <div className="phonetics">
      {props.phonetic.map(function (phonetic, index) {
        return (
          <div key={index}>
            <a href={props.phonetic[0].audio} target="_blank" rel="noreferrer">
              listen 🔈{" "}
            </a>
            <br />
            <p>{props.phonetic[0].text}</p>
          </div>
        );
      })}
    </div>
  );
}
