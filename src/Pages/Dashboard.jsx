import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { clearloggeduserdetail } from "../Services/Authservice";
import { Store } from "./Stores";
const Aboutus = () => {
    return (<><h3>Aboiut us page</h3></>)
}
const Contactus = () => {
    return (<>
        <h2>Contact Us page</h2>
    </>);
}
export const Dashboard = () => {
    const navigate = useNavigate();
const logout=()=>{
    clearloggeduserdetail();
  return  navigate('/login');
};

    return (<>
        <div>
            <header>
                <Link to="/aboutus">Click to view our about page</Link>
                <br></br>
                <Link to="/contactus">Click to view our contactus page</Link>
                <br></br>
                <Link to="/stores">Stores</Link>
                <br></br>
                <button onClick={logout}>Log Out</button>
            </header>
            <div className="bodysection">
                <Routes>
                    <Route path="/" element={<Aboutus />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/contactus" element={<Contactus />} />
                    <Route path="/stores" element={<Store />} />
                </Routes>
            </div>
        </div>
    </>);
}