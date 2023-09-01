import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Tabla from "./page/Home/Tabla";
import Tabla2 from "./page/Tabla2/Tabla2";
import Tabla3 from "./page/Tabla3/Tabla3";
import Question from "./page/Question/Question";
import Start from "./page/Start/Start";
import Submit from "./page/Submit/Submit";
import Navbar from "./components/Navbar/Navbar";
import Reports from "./page/Reports/Reports";
import Login from "./page/Login/Login";
import GestorEntidades from "./page/GestorEntidades/GestorEntidades";
import { FaQuestionCircle } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";

  return (
    <div className="App">
      {/* Condiciona el renderizado del Navbar */}
      {isLoginPage ? null : (
        <div style={{ display: isLoginPage ? 'none' : 'block' }}>
          <Navbar />
		  {/*<button className="pregunta">
        <FaQuestionCircle />
	  </button>*/}
      <button className="preguntaA">
        <BsTranslate />
      </button>
        </div>
      )}
      
      <Routes>
        <Route path="/" element={<Start />} />
		<Route path="/Login" element={<Login />} />
		<Route path="/GestorEntidades" element={<GestorEntidades />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/Tabla" element={<Tabla />} />
		<Route path="/Tabla2" element={<Tabla2 />} />
		<Route path="/Tabla3" element={<Tabla3 />} />
		<Route path="/Reports" element={<Reports />} />
        <Route path="/Submit" element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
