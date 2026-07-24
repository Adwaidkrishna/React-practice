import React from "react";

function Child({ handleClick }) {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={handleClick}>
        Child Button
      </button>
    </div>
  );
}

export default React.memo(Child);