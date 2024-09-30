
//
import VendorsTableItem from "./VendorsTableItem";

export default (props) => {



    return(<>
        <h2>{props.propName}</h2>
        <table>
            {props.vendors.map((v, i) => (
                <VendorsTableItem
                    key={i} vendor={v}/>
            ))}
        </table>
    </>)

}