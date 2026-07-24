import { useState, useCallback } from "react";

import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);


  const handleClick = useCallback(() => {
    console.log("Child Button Clicked");
  }, []);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child handleClick={handleClick} />
    </>
  );
}

export default App;