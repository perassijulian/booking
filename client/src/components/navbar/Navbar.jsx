import "./navbar.css";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({type: "LOGOUT"})
  }
  
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
          <span className="logo">PERASSI</span>
        </Link>
        {!user && 
          <div className="navItems">
            <Link to='/register'>
              <button className="navButton">Register</button>
            </Link>
            <Link to='/login'>
              <button className="navButton">Login</button>
            </Link>
          </div>
        }
        {user && 
          <div className="navItems">
            <button onClick={handleLogout} className="navButton">Logout</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar