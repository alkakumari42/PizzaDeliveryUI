import { IMenu } from "../models/IMenu";
import { getMenu } from "../service/orderService-old";
import { useState, useEffect, useRef } from "react";
import { MenuService } from "../service/MenuService"
import { Button } from "./button/Button";
import "../css/table.css"
import  OrderService  from "../service/OrderService";
import { ICreteOrderReq } from "../models/IOrders";
import { User } from "../App";

interface State {
    menu:IMenu[]
    order:ICreteOrderReq
    createOrder: boolean
}

interface MenuProps {
    user:User
}

function Menu(props:MenuProps) {
    const[state, setState] = useState<State>({
            menu:[],
            order: {
                orderItems:[],
                userEmail: ''
            },
            createOrder: false,
    });

    const cart = useRef<string[]>([]);

   const orderHandler = async () => {
    console.log("Final Cart ="+JSON.stringify(cart.current));
        const orderReq:ICreteOrderReq = {
            userEmail: props.user.email,
            orderItems: cart.current
        }
        OrderService.createOrder(orderReq)
        .then(res => {console.log("Order Created - Id ="+res.data)})
        .catch((error) => { console.log("Exception occured in creating order.."+error);})
        cart.current=[]
   };

   const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) : void=> {
        console.log("event.target.checked= "+event.target.checked+" value="+event.target.value)
        let item = event.target.value;
        if(event.target.checked) {
            cart.current=[...cart.current, item]
        } else {
            const newCart = cart.current.filter(e => e!== item);
            cart.current= newCart
        }

   };

    //network request getMenu API call
    useEffect(() => {
        MenuService.getMenu().then(response => setState({
            ...state,
            menu: response.data
        }));
    });
    
    return (
        <div>
            <h1>Menu page</h1>
            <div>
                <h1>Menu List - Order from Here</h1>
                <table id="menu" align="center">
                    <thead>
                        <tr>
                            {/* <td>Item-Id</td> */}
                            <th>Name</th>
                            <th>Price</th>
                            <th>select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.menu.length > 0 && state.menu.map( item => (
                                <tr key={item.id}>
                                    {/* <td>{item.id}</td> */}
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><input type="checkbox" value={item.name} onChange={changeHandler}></input></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {}
                <Button text="Order Selected Items" onClickHandler={orderHandler} />
            </div>
        </div>
    );
}
export {
    Menu
}