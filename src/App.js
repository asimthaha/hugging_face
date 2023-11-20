import logo from "./logo.svg";
import "./App.css";
import TextClassifier from "./components/TextClassifier";
import TextGenarator from "./components/TextGenarator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<TextClassifier />} />
        <Route path="/textgen" element={<TextGenarator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
