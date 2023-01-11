import './App.css';
import HomepageLayout from './components/HomepageLayout';
import MyIp from './components/MyIp'
import { Routes, Route } from "react-router-dom";
function App() {


  return (

    <Routes>
      <Route path="/" element={<HomepageLayout />} />
      <Route path="/ip" element={<MyIp />} />
    </Routes>

  );
}

export default App;
