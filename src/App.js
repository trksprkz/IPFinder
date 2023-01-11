import './App.css';
import HomepageLayout from './components/HomepageLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    <Router>
    <Routes>
      <Route path="/" element={<HomepageLayout />} />
    </Routes>
  </Router>


  return (
    <HomepageLayout />
  );
}

export default App;
