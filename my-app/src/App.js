import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavbarContainer";
import GameContainer from "./components/GameContainer";
import LoginContainer from "./components/LoginContainer";
import CreateContainer from "./components/CreateLoginContainer";
import HighScoreContainer from "./components/HighScoreContainer";
import ProfileContainer from "./components/ProfileContainer";
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
            <Route path="/profile" element={<ProfileContainer />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
