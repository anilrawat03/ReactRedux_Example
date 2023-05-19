
import { useDispatch, useSelector } from "react-redux";
import { counterDecrement, counterIncrement } from "../Redux/Actions/CounterActions";
import { useEffect, useState } from "react";
import { getUsers } from "../Redux/Actions/UserAction";
import {getproduct} from '../Redux/Actions/ProductAction';
const Counter = () => {
    var currentvalue = useSelector(state => state.counter.value);
    var users = useSelector(state => state.users).users;
    var products=useSelector(state=>state.products).products;
    let dispatch = useDispatch();
    const increment = (data) => {
        dispatch(getUsers(""));
        dispatch(getproduct())
        dispatch(counterIncrement(data))
    }
    const decrement = (data) => {
        dispatch(counterDecrement(data))
    }
    useEffect(() => {
        dispatch(getUsers(""));
    }, [])
    return (<>
        <label>{currentvalue}</label>
        <button onClick={() => increment("increment at" + new Date())}>Increment</button>
        <button onClick={() => decrement("decrement at " + new Date())} >Decrement</button>
        <div>
            {users?.map((item, index) => {
                return (<>
                    <div >
                        <span>{item.username}</span>
                    </div>
                </>)
            })}
        </div>
    </>);
}
export default Counter;