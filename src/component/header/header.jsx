import brandLogo from "../images/brand-logo.png"
import style from "./header.css"
import { Link } from "react-scroll";
import { useContext, useState } from "react";
import { cartContext } from "../cart-context";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {

    const context = useContext(cartContext);
    const navigate = useNavigate()

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate("/cartItems")
    }

    const GotoHome = () => {
        navigate("/")
    }
    const GoToLoginpage = () => {
        navigate("/login")
    }
    const GoTosignUp = () => {
        navigate("/signup")
    }

    return (
        <>
            <header className="header-container">
                <div className="brand-logo"><img src={brandLogo} alt="brandLogo" /></div>
                <div className="navbar">
                    <nav>
                        <ul>
                            <li>
                                <Link to="trend_header" onClick={GotoHome}>home</Link>
                            </li>
                            <li>
                                <Link to="product_card" onClick={GotoHome} offset={-100} duration={100}> product</Link>
                            </li>
                            <li>
                                <Link to="footer_section">About</Link>
                            </li>
                            <li>
                                <Link to="footer_section">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="login-icons">
                    <ul>
                        <li>
                            <Link to="/login" onClick={GoToLoginpage}><i className="fa fa-sign-in fa-lg" aria-hidden="true"></i> Login</Link>
                        </li>
                        <li>
                            <Link to="" onClick={GoTosignUp}><i className="fa fa-registered" aria-hidden="true"></i>  Register</Link>
                        </li>
                        <li>
                            <Link to="cart-items" onClick={handleNavigate}> <i className="fa fa-shopping-cart" aria-hidden="true"></i>  Cart({context.cartCount.length})</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header;