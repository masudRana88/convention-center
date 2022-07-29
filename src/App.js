import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './components/Page/HomePage';
import NavBar from './components/container/NavBar/NavBar';
import 'tw-elements';
import FooterSection from './components/container/FooterSection/FooterSection';
function App() {
  return (
    <div className="bg-bgMain">
    <NavBar/>
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
    <FooterSection/>
    </div>
  );
}

export default App;
