import logo from './logo.svg';
import './App.css';
import { StripePaymentForm } from './StripePaymentForm';
import Counter from './Pages/Counter';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Dashboard } from './Pages/Dashboard';
import { getLoggeduserToken } from './Services/Authservice';
import { Login } from './Pages/Login/Login';
function App() {
  var isLoaderStart = useSelector(x => x.loader).isLoaderStart;
  return (
    <div className="App">
      {isLoaderStart && <h3>Loading ............</h3>}
      <Routes>
      <Route path="/login" element={<Login/>} />
        <Route key={2} path='/Counter' element={<Counter />} />
        <Route path='/StripePaymentForm' element={<StripePaymentForm />} />
        <Route element={<PrivateWrapper />}>
          <Route path='*' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

const PrivateWrapper = () => {
  let isAuthenticated = getLoggeduserToken();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default App;
