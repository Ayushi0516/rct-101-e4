import "./App.css";
import {Route,Routes} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
 import Home from "./pages/Home"

function App() {
  return <div className="App">
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    
    
  </div>;
}

export default App;
