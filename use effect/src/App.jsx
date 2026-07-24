import { useState } from "react";
import Child from "./child";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Child Button Clicked");
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      <Child handleClick={handleClick} />
    </div>
  );
}

export default App;