import OrderService from "../service/OrderService";

interface OrderProps {
    text: string;
    email: string;
}

function Order(props: OrderProps) {
    const showOrders = () => {
        //getOrders();
        OrderService.getOrderByEmail(props.email)
        .then(res => {
            console.log(res.data);
        })
        .catch(e => {
            console.log("Exception Occoured "+e);
        });

        console.log("Inside Get Orders for specific orderid ...chnage it to emial based")
    };
    return (
        <div>
            <button id="btn-primary" onClick={showOrders}>{props.text}</button>
        </div>
    );
}
export {
    Order
}