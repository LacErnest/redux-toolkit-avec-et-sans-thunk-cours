import React from "react";
import { Link } from "react-router-dom";
import user from '../../images/user.png'
import '../App.css'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo">App Film</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header