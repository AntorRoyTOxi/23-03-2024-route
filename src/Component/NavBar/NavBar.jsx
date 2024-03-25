
import {  NavLink } from "react-router-dom"; 
import './NavBar.css'
const NavBar = () => {
    return (
        <nav>
                <NavLink style={{marginLeft:'20px'}}  to="/">Home</NavLink>
                <NavLink style={{marginLeft:'20px'}} to="/about">About</NavLink>
                <NavLink style={{marginLeft:'20px'}} to="/contact">Contact</NavLink>
                <NavLink style={{marginLeft:'20px'}} to="/details">Details</NavLink>
                <NavLink style={{marginLeft:'20px'}} to="/users">Users</NavLink> 
                <NavLink style={{marginLeft:'20px'}} to="/morepeople">More People</NavLink> 
                <NavLink style={{marginLeft:'20px'}} to="/post">Post </NavLink> 
                <NavLink style={{marginLeft:'20px'}} to="/barbar">BarBar </NavLink> 
                
                 
        </nav>
    );
};

export default NavBar;