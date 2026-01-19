import './App.css';
import RideSurvey from './components/rideSurvey.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "./pages/results.jsx";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<RideSurvey />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  </Router>

)}

export default App
