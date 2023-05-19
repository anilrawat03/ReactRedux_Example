import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userloginAction } from "../../Redux/Actions/AuthenticationAction";
import { clearloggeduserdetail } from "../../Services/Authservice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    useEffect(()=>{
        clearloggeduserdetail();
    },[])
    const [username, setusername] = useState("mor_2314");
    const [password, setpassword] = useState("83r5^_");
    const userispatch = useDispatch();
    const navigate = useNavigate()
    const submithandle = () => {

        if (username === "")
            return alert("Username is required");
        if (password === "")
            return alert("passsword is required");
        let userlogin = {
            username: username,
            password: password
        };
        console.log(userlogin);
        userispatch(userloginAction({userlogin:userlogin,navigate:navigate}));
    }
    return (<>
        <div>
            <label>UserName</label>
            <input onChange={(e) => { setusername(e.target.value) }} value={username} />
            <label>Passsword</label>
            <input onChange={(e) => { setpassword(e.target.value) }} value={password} />
            <button onClick={submithandle}>Signin </button>
        </div>
    </>);
} 