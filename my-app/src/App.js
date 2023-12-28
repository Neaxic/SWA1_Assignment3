import "./App.css";
import store from "./store";
import rootReducer from "./redux/Service/reducers-Slice/rootReducer";
import { Provider } from "react-redux";
import HighScoreContainer from "./components/HighScoreContainer";
import CreateContainer from "./components/CreateContainer";
import login from "./components/LoginContainer";
import LoginContainer from "./components/LoginContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>hej</h2>
        <LoginContainer />
        <CreateContainer />
        <HighScoreContainer />
      </div>
    </Provider>
  );
}
export default App;
