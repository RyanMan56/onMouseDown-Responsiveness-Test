import { useState } from "react";
import "./App.css";

function App() {
  const [onClickCount, setOnClickCount] = useState(0);
  const [onMouseDownCount, setOnMouseDownCount] = useState(0);

  return (
    <>
      <h1>OnMouseDown responsiveness test</h1>
      <p>Does onMouseDown feel more responsive than onPress?</p>
      <div className="card">
        <div>
          <button onClick={() => setOnClickCount((count) => count + 1)}>
            onClick count is {onClickCount}
          </button>
          <button onMouseDown={() => setOnMouseDownCount((count) => count + 1)}>
            onMouseDown count is {onMouseDownCount}
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        I think it feels snappier, it's more like how your physical mouse or
        keyboard works
      </p>
    </>
  );
}

export default App;
