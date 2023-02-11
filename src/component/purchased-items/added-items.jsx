import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./cart.css"
import { cartContext } from "../cart-context";
import Header from "../header/header";
const AddedItem = () => {
    const cart = useContext(cartContext);
    return (
        <>
            <Header />
            <div className="cart-container" id="cart-items">
                <section className="logout-comp" >
                    <Link to="/logout"> <button>Logout</button></Link>
                </section>

                <section>
                    {(cart.cartCount.length) && cart.cartCount.map((item, index) => {
                        return (
                            <div className="cart" key={index}>
                                <div className="cart-image">
                                    <img src={item.image} alt="item-image" />
                                </div>
                                <div>
                                    <h4> item_id : abcd0098_{item.id}</h4>
                                    <p> {item.title}</p>
                                    <summary> {item.description}</summary>
                                    <article> {item.category}</article>
                                    <h4> Price: {item.price} <i> Offer: 36% Off2 offers applied</i> </h4>

                                </div>
                            </div>
                        )
                    })}
                </section>
                <div className="place-order">
                    {(cart.cartCount.length) && <button >PLACE ORDER</button>}
                </div>
                {(!cart.cartCount.length) && <h1 className="empty-cart">nothing in cart</h1>}
            </div>
        </>
    )
}
export default AddedItem;