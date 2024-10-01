import {useEffect, useState} from "react";
import ColorItem from "./ColorItem";

export default () => {

    const [colors, setColors] = useState([])

    const [paginate, setPaginate] = useState({})

    const getColors = () => {

        fetch('https://localhost:44363/api/ApiColor')
            .then(res => {
                console.log(res)
                console.log(res.status + " " + res.statusText)
                return res.json()
            })
            .then(res => {
                setColors(res.data)
                setPaginate(res.paginate)
            })
            .catch(err => {
                console.error(err)
            })
    }

    //getColors()
    useEffect(() => {
        getColors()
    }, []);

    return(
        <>
            <h1>Colors</h1>

            <ul>
                {colors.map((color, i) => (
                    <ColorItem color={color} key={i}/>

                ))}
            </ul>
        </>
    )

}