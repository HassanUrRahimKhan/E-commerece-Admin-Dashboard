import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topBar/Topbar.jsx";
import Home from "./pages/Home/Home";
import Userlist from "./pages/UserList/UserList";
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser";
import "./app.css";
import { DataGrid } from '@mui/x-data-grid';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import ProductList from "./pages/productList/ProductList.jsx";
import Product from "./pages/products/Product.jsx";
import NewProduct from "./pages/newProduct/NewProduct.jsx";

function App() {
  return (
   
    <>
      <Topbar />
      <div className="container">
        <Sidebar />

        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Userlist />}/>
        <Route path="/user/:userId" element={<User />}/>
        <Route path="/newUser" element={<NewUser />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/newproduct" element={<NewProduct />}/>
        

        </Routes>
       
      </div>



    </>
    



    
  );
}

export default App;
