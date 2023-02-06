import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ".././loginPage/login.css";

const Signup = () => {
    const [loginUser, setLoginUser] = useState({ username: "", email: "", password: "" });
    const [msg, setMsg] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await axios("https://ecom-server-xrv0.onrender.com/signup", {
                method: "POST",
                data: loginUser,
            })
            setMsg("verifying...");
            setTimeout(() => {
                setLoginUser({ username: "", email: "", password: "" });
                setMsg(null);
                navigate("/login");
            }, 1500)

        } catch (e) {
            setMsg("Please Provide Valid Credentials")
            setTimeout(() => {
                setMsg(null);
            }, 1500)
        }
    }
    const disable = (loginUser.username && loginUser.email && loginUser.password);


    return (

        <>
            <section className="loginPage">
                <div className="ecom-title" > <span><i className="fa fa-shopping-cart" id="shopping-icon" aria-hidden="true"></i></span> Ecom Merch </div>
                <div className="login-container">
                    <label className="label_login">Username:</label>
                    <input type="text" name="username" id="username" required onChange={(e) => { setLoginUser({ ...loginUser, username: e.target.value }) }} value={loginUser.username} />

                    <label className="label_login" >Email:</label>
                    <input type="email" name="email" id="email" required onChange={(e) => { setLoginUser({ ...loginUser, email: e.target.value }) }} value={loginUser.email} />

                    <label className="label_login">Password:</label>
                    <input type="password" name="password" id="password" required onChange={(e) => { setLoginUser({ ...loginUser, password: e.target.value }) }} value={loginUser.password} />

                    <button className="login-btn" onClick={handleSubmit} disabled={disable ? false : true}>SignUp</button>
                    {msg && <h3 style={{ color: "black" }}><i className="fa fa-spinner" aria-hidden="true"></i></h3>}
                    {(msg == "Please Provide Valid Credentials") ? <h3>{msg}</h3> : null}
                </div>
            </section>
        </>
    )
}
export default Signup;