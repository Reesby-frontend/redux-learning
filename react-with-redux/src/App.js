import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.account);

  return <div className="App"></div>;
}

export default App;
