import './App.css';
import HomepageLayout from './components/HomepageLayout';
import MyIp from './components/MyIp'
import DontShowIp from './components/DontShowIp';
import Map from './components/Map'
import { Routes, Route } from "react-router-dom";
function App() {


  return (

    <Routes>
      <Route path="/" element={<HomepageLayout />} />
      <Route path="/ip" element={<MyIp />} />
      <Route path="/hide" element={<DontShowIp />} />
      <Route path="/map" element={<Map />} />
    </Routes>

  );
}

export default App;
