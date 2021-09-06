import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="example">
        <em>Example:</em> {props.example}
        <br />
      </div>
    );
  } else {
    return null;
  }
}
