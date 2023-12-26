import logo from "./logo.svg";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import HighScoreContainer from "./components/HighScoreContainer";
import CreateContainer from "./components/CreateContainer";

function App() {
  return (
    <Provider store={store}>
      {" "}
      <div className="App">
        <HighScoreContainer />
      </div>
    </Provider>
  );
}

export default App;
