import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Product from './components/Product';
import Register from './components/Register';
import Login from './components/Login';
import Dress from './components/Dress';
import Electronics from './components/Electronics'
import ProductItems from './components/ProductItems'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dress" element={<Dress />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Product" element= {<Product />} />
        <Route path="/ProductItems" element= {<ProductItems />} />
       
        
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
