import MyLog from "../../helpers/MyLog";
import MyError from "../../helpers/MyError";
import {toast} from "react-toastify";

export default async (searchParams = null, options = null) => {

    //url = 'https://localhost:44363/api/' + url;
    const url = new URL ('https://67012db1b52042b542d6fc0f.mockapi.io/products');

    //const url = baseUrl + "/" + params;

    if(searchParams){
        searchParams.map (p=> {
            url.searchParams.append(p.name, p.value)
        })
    }

    toast.info(url.toString())

    try {
        const response = await fetch(url, {
            headers: {

            },
            ...options,
        });

        //MyLog(response.statusText)


        return await response.json();
    } catch (error) {
        MyError(error)

    }

}