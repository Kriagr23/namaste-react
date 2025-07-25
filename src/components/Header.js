import React, { useState } from "react";
const Header = () => {
    const [btnNameReact , setBtnNameReact] = useState("Login");
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://i.pinimg.com/474x/05/64/db/0564db618b8e778534e882cfda48dd2f.jpg" alt="Logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login-button"
                onClick={()=>{
                    btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    //toggle the button name between Login and Logout
                }}
                >{btnNameReact}</button>
            </ul>
        </div>
    </div>
);
};
export default Header;