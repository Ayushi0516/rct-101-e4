import React from "react";
import {Link ,useNavigate} from "react-router-dom"
const Navbar = () => {
  const isAuth=true;
  const navigate=useNavigate();
  const handleClick=()=>{
    if(isAuth)
    {
     navigate("/login")
    }
    else{
      navigate("/login")
    }
  }
  return (
    <div data-cy="navbar"  style={{
      padding: "10px",
      display: "flex",
      gap: "20px",
      justifyContent: "space-between",
    }}>
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link  data-cy="navbar-home-link" to="/" >Logo</Link>
      </div>
      <div    style={{
          display: "flex",
          gap: "20px",
        }}>
        <div data-cy="navbar-cart-items-count">count</div>
        <button data-cy="navbar-login-logout-button" onClick={handleClick}>{isAuth?"login":"logout"}</button>
      </div>
    </div>
  );
};

export default Navbar;
