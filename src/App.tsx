import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConstructionPage from "./views/ConstructionPage";

import './App.css'
import Verification from "./views/Verification";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConstructionPage />} />
        <Route path="/verify-email" element={<Verification />} />
      </Routes>
    </Router>
  )
}

export default App
