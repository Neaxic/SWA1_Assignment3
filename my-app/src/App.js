import React from "react";
import { Provider } from "react-redux"; // Importer Provider fra react-redux
import store from "./store"; // Importer din Redux-butik

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavbarContainer";
import GameContainer from "./components/GameContainer";
import LoginContainer from "./components/LoginContainer";
import CreateContainer from "./components/CreateLoginContainer";
import HighScoreContainer from "./components/HighScoreContainer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <HighScoreContainer />
          <Routes>
            <Route path="/game" element={<GameContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/signup" element={<CreateContainer />} />
            <Route path="/profile" element={<HighScoreContainer />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
