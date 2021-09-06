import React from "react";

export default function Synonyms(props) {
  ///console.log(props.synonym);
  if (props.synonym.length > 0) {
    return (
      <div>
        <h4>Synonyms:</h4>{" "}
        {props.synonym.map(function (synonym, index) {
          return (
            <span className="synonyms">
              {" "}
              <li key={index}>
                {" "}
                {synonym},{""}
              </li>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
