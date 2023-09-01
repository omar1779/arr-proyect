import React, { useState } from "react";
import "./Login.css";
import tipox from "../../assets/fondoA.jpg";
import Logo from "../../assets//logo-arifa.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Login() {
	const [showRegistration, setShowRegistration] = useState(0);
	const [Email, setEmail] = useState("");
  
	// Estado para controlar la apertura de la ventana emergente
	const [isFormOpen, setIsFormOpen] = useState(false);
  
	// Función para abrir la ventana emergente
	const handleOpenForm = () => {
	  setIsFormOpen(true);
	  pruebaemail()
	  
	};
  
	// Función para cerrar la ventana emergente cuando el formulario es enviado
	const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
	  event.preventDefault();
	  setIsFormOpen(false);
	  setEmail("")
	};
  

	function pruebaemail() {
		axios
		  .post("http://localhost:3000/prueba/"+Email+"/code")
		  .then((response) => console.log(response))
		  .catch((err) => console.log(err));
	  }
	


  return (
    <div className="fondo">
		
      <div className="login">
        <img className="SmileGuy" src={tipox} alt="Logo" />
      </div>
      <div className="formulario">
        <img className="LogoAR" src={Logo} alt="Logo" />
        <div className="centroLog">
          {showRegistration===0 ? (
            <>
              <p className="Credentials">Enter your credentials</p>
              <p className="Credentials2">Email</p>
              <input
                type="text"
                className="Email"
                placeholder="Enter Email"
              ></input>
              <p className="Credentials2">Password</p>
              <input
                type="password"
                className="Email"
                placeholder="Enter a Password"
              ></input>
              <Link to={"/GestorEntidades"}><button className="BLog">Login</button></Link>
			  <p className="grisesito">Reset Password</p>
              <p className="grisesito" onClick={()=>setShowRegistration(1)}>
                Don't have an account? Sign In
              </p>
              
            </>
          ) : showRegistration===1 ?(
			<>
			<p className="Credentials">
			  An email will be sent to the address entered to complete the registration
			</p>
			<p className="Credentials2">Email</p>
			<form onSubmit={handleSubmitForm}>
			  <input
				type="text"
				className="Email1"
				placeholder="Enter Email"
				value={Email}
				onChange={(e) => {setEmail(e.target.value);}}
			  ></input>


                <button
                  className="BLog"
				  disabled={!Email}
                  onClick={() => {
                    setShowRegistration(2);
                    handleOpenForm();
                  }}
				  
                >
                  Send Email
                </button>
			  </form>
              <p className="grisesito" onClick={()=>setShowRegistration(0)}>
                Go back to login
              </p>
            </>
          ) : (<>
			 <p className="Credentials">enter the following information</p>
              <p className="Credentials2">First Name:</p>
              <input
                type="text"
                className="Email"
                placeholder="Name"
              ></input>
			  <p className="Credentials2">Last Name:</p>
              <input
                type="text"
                className="Email"
                placeholder="Last Name"
              ></input>
              <p className="Credentials2">Password</p>
              <input
                type="password"
                className="Email"
                placeholder="Enter a Password"
              ></input>
			  <p className="Credentials2">Confirm Password</p>
              <input
                type="password"
                className="Email"
                placeholder="Enter a Password"
              ></input>
              <button className="BLog"  onClick={()=>setShowRegistration(0)}>Save</button>
		  </>)}
        </div>
		{isFormOpen && (
        <div className="popup-overlay">
          <div className="popup-container">
            <form onSubmit={handleSubmitForm}>
              <p className="Credentials3">
                {"An Email was send to this direction: "+Email+". The email could go to span"}
              </p>

              <button className="Ok" type="submit">Okay</button>
            </form>
          </div>
        </div>
      )}
      </div>

    </div>
  );
}

export default Login;
