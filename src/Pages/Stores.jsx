import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStores } from "../Redux/Actions/StoreAction";
export const Store = () => {
    const store = useSelector(x => x.store).stores;
    console.log("store", store);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStores());
    }, []);


    const onproductclick = (id) => {
        const product=store.filter(x=>x.id==id)[0].title;
        alert(product);
    }
    return (<>
        <h2>Products</h2>
        {store.map((item, index) =>
        (
            <div key={item.id} onClick={()=>{onproductclick(item.id)}}>
                <h3>{item.title}</h3>
                <img style={{ height: 200, width: 200 }} src={item.image} ></img>
                <label><b>{item.category}</b></label>
                <p>Price: $ {item.price}</p>
                <p>Rating: {item.rating?.rate}</p>
                <p>{item.description}</p>
            </div>
        ))}
    </>);
}