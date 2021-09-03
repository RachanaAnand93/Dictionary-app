import React from "react";

export default function Synonyms(props) {
  if (props.synonym) {
    return (
      <div>
        <h4 className="mt-1">Synonyms</h4>
        <ul className="synonyms">
          {props.synonym.map(function (synonym, index) {
            return (
              <li className="d-inline-block pe-3" key={index}>
                {synonym},
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
