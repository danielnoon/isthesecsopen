import React from "react";
import { useIsOpen } from "./useIsOpen";

function App() {
  const [open, ready] = useIsOpen();

  return (
    <main>
      <h1>Is the Selleck C-Store Open?</h1>
      {ready ? <h2>{open ? "Yes" : "No"}</h2> : <h2>Loading...</h2>}
    </main>
  );
}

export default App;
