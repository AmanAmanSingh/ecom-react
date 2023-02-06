import "./cards.css";
import useFetch from "../../coutom-hook/fetch/fecth";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import loader from "../../assets/loader-gif.gif";
import { cartContext } from "../cart-context";
import merchs from "../../mock-data/json-data";

const Cards = () => {
    // const ClothesData = useFetch("http://fakestoreapi.com/products");
    // console.log(ClothesData);
    const ClothesData = merchs;

    const cartItemContext = useContext(cartContext);
    // console.log(cartItemContext);
    const handleItemsCount = (user) => {
        cartItemContext.setCartCount([...cartItemContext.cartCount, user])
    }
    return (
        <>
            <div className="main-container" id="product_card">
                {(!ClothesData.length) && <img className="loader-img" src={loader} alt="loader-image" />}
                {(ClothesData.length) && ClothesData.map((user, index) => {
                    return (
                        <div className="card-border" key={index}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={user.image} alt="Image" className="card-img-top" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{user.title}</h5>
                                    <div className="rating">Rating: <span>{user.rating.rate}</span></div>
                                    <div className="pricing">Price: <span>${user.price}</span></div>
                                </div>
                                <button onClick={() => { handleItemsCount(user) }}>Buy Now</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default Cards;


