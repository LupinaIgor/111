import MyLog from "../../helpers/MyLog";
import {MyFetch} from "../../helpers/MyFetch";

export default (props) => {

    const delColor = () => {
        MyLog(props.color.id)
        props.delColor(props.color.id)
        // MyFetch('ApiColor/' + props.color.id, {
        //      method: "DELETE"
        //  })
        //      .then(res => {
        //          MyLog(res)
        //          props.getColors()
        //      })
    }


    return (

        <li>
            <img src={`https://localhost:44363${props.color.url}`}
                 alt={props.color.name}

                width='50px'
                height='50px'
            />
            {props.color.name}
            <span onClick={delColor}>DELETE</span>

        </li>

    )

}