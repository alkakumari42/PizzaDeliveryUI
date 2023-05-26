import React from "react"
import "./Button.css"
import { getOrders } from "../../service/orderService-old";

type ButtonProps = {
    text :string,
    onClickHandler: () => void
}
const showOrders = () => {
    getOrders();
    console.log("Inside Get Orders for specific orderid ...chnage it to emial based")
};

const Button = (props : ButtonProps) => {
    return (
        <button id="btn-primary" onClick={props.onClickHandler}>{props.text}</button>
    )
}


export {
    Button, showOrders
}