import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './components/Page/HomePage';
import NavBar from './components/container/NavBar/NavBar';
import 'tw-elements';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
    </div>
  );
}

export default App;
