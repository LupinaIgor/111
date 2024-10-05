import MyLog from "../../helpers/MyLog";
import {MyFetch} from "../../helpers/MyFetch";

export default (props) => {

    const onSubmit = (ev) => {
        ev.preventDefault()

        const frmData = new FormData(ev.target)

        for (let pair of frmData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);  // Выводим содержимое FormData в консоли браузера
        }
        MyLog(frmData)

        MyFetch('ApiColor', {
            method: "POST",
            body: frmData
        })
            .then(res => {
                MyLog(res)
                props.getColors()
            })

        return false;
    }


    return (

        <form onSubmit={onSubmit} method='POST' encType="multipart/form-data">
            <input type='text' name='Name'/>
            <input type='color' name='RGB'/>
            <input type='file' name='file'/>
            <input type='text' name='Code'/>
            <input type='submit'/>

        </form>

    )

}