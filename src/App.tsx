import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./layout/Header";
import CompoundComponentDemo from "./pages/CompoundComponentDemo";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="compound-components" element={<CompoundComponentDemo />} />
      </Routes>
    </div>
  );
}

export default App;
