import logo from './logo.svg';
import './App.css';
import{BrowserRouter} from "react-router-dom";
import {routing} from "./router/routing.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>{routing}</BrowserRouter>
    </div>
  );
}

export default App;
