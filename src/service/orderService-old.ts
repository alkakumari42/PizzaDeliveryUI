import { IMenu } from "../models/IMenu";

const getMenu = async (): Promise<string> => {
    console.log("getMenu method called")
    const response = await fetch('http://localhost:8080/menu')
    return  JSON.stringify(await response.json());
}

const getOrders = () => {
    console.log("Inside getOrders method")
    fetch('http://localhost:8080/order/id?orderId=1e291f99-5570-4945-897f-86cf43f31fe7')
    .then((response) => console.log(response.json()))
};

export {
    getMenu, getOrders
}