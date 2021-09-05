import React from "react";

export default function Synonyms(props) {
  console.log(props.synonym);
  if (props.synonym) {
    return (
      <div>
        <span className="mt-1">Synonyms: </span>
        <span className="synonyms">
          {props.synonym.map(function (synonym, index) {
            return (
              <li key={index}>
                {synonym},{""}
              </li>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
