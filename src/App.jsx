import React from "react";
import Router from "./routes/Router";
import GlobalStyle from "./components/GlobalStyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router />
    </React.Fragment>
  );
}

export default App;
