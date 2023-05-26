import axios from "axios";
import { ICreteOrderReq } from "../models/IOrders";

export default class OrdeService {
    public static createOrder(order:ICreteOrderReq){
        const URL:string = "http://localhost:8080/order/create";
        return axios.post(URL, order);
    }

    public static getOrderByEmail(email:string) {
        const URL:string = 'http://localhost:8080/order/email?email='+email;
        return axios.get(URL);
    }
}
