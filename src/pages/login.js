import React from "react";
import { auth, provider } from "../Firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  //received from props
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);//sstore login info in local storage
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign in with google to continue</p>
      <button onClick={signInWithGoogle} className="login-with-google-btn">
        Sign In with google
      </button>
    </div>
  );
}
 
export default Login;
