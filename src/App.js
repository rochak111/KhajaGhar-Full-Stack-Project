import './App.css';
import Home from './screens/Home';
  //npm i bootstrap-dark-5 boostrap gareko tara dekhayena json ma 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';


function App() {
  return (
    <CartProvider>
    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup/>} />
            <Route exact path="/myOrder" element={<MyOrder/>} />
          </Routes>
        </div>
      </Router>
      </CartProvider>
  );
}

export default App;
