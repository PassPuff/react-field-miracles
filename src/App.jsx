import React from "react";

import Char from "./components/Char";

const App = () => {
  const [answer, setAnswer] = React.useState("Поле Чудес");

  return (
    <div className="App">
      <div className="Input">
        <input onChange={(e) => setAnswer(e.target.value)} value={answer} />
      </div>

      <div className="Grid">
        {answer
          .split("")
          .map((char, i) =>
            char !== " " ? (
              <Char char={char} key={`${i}${char}`} />
            ) : (
              <div key={i} />
            ),
          )}
      </div>
    </div>
  );
};

export default App;
