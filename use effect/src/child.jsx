function Child({ handleClick }) {
  console.log("Child Rendered");

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={handleClick}>
        Child Button
      </button>
    </div>
  );
}

export default Child;