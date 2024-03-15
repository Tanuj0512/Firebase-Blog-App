import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Createpost from "./pages/Createpost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase/firebase";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
//checks if user if logged in andd hides the login button if true
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>

        {!isAuth ? (
          <Link to="LI"> Login</Link>
        ) : (
          <>
            <Link to="/CP"> Create Post</Link>
            <button onClick={signUserOut}>Log out</button>
          </>
        )}
        {/* to hide login section if not logged in */}
      </nav>

      
      <Routes>
        <Route path="/" element={<Home isAuth = {isAuth} />} />
        <Route path="/CP" element={<Createpost isAuth={isAuth} />} />
        <Route path="/LI" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
