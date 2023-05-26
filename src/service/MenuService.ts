import axios from "axios"

export class MenuService{
    private static URL:string = 'http://localhost:8080'

    public static getMenu() {
        let MenuURL:string = `${this.URL}/menu`;
        return axios.get(MenuURL)
    }
}