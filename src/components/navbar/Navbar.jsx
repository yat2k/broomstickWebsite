import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="Navbar">
        <ul className="navbarUL">
          <li className="logo">
            broomstick <span className="register-r">&#9415;</span>
          </li>
          <li className="active a">
            <button onClick={() => navigate("/")}>HOME</button>
          </li>
          <li className="a">
            <button onClick={() => navigate("/about")}>ABOUT</button>
          </li>
          <li className="a">
            <button onClick={() => navigate("/lifeskills")}>LIFESKILLS</button>
          </li>
          <li className="a">
            <button onClick={() => navigate("/hiring")}>HIRING</button>
          </li>
          <li className="a">
            <button 
            style={{backgroundColor:"white",color:"#1E1E1E"}}
            onClick={() => navigate("/login")}>SIGN IN</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
