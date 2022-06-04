import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topBar/Topbar.jsx";
import Home from "./pages/Home/Home";
import Userlist from "./pages/UserList/UserList";
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser";
import { useEffect } from "react";
import "./app.css";
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom"; 
import ProductList from "./pages/productList/ProductList.jsx";
import Product from "./pages/products/Product.jsx";
import NewProduct from "./pages/newProduct/NewProduct.jsx";

function App() {
  let location = useLocation();
  console.log("🚀 ~ file: App.js ~ line 22 ~ App ~ location", location.pathname)

  // useEffect(() => {
  //   if(location.pathname === "/login"){
  //     <Routes>
  //         <Route path="/login" element={<Login />}/>
  //     </Routes>
  //   }
  // }, [location]);
  // const userlogin = false;
  // if(location.pathname === "/login"){
  //   return <Login />
  // }
  if(location.pathname === "/login"){
    return <Login />
  }
  // else{
    return (
    
      <>
          {/* {userlogin? (
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
              <Route path="/login" element={<Home />}/>
      
              
      
              </Routes>
             
            </div>
            </>
          ): (
          <>
          <div className="container">
            <Routes>
    
            <Route path="/" element={<Home />}/>
            <Route path="/users" element={<Userlist />}/>
            <Route path="/user/:userId" element={<User />}/>
            <Route path="/newUser" element={<NewUser />}/>
            <Route path="/products" element={<ProductList />}/>
            <Route path="/product/:productId" element={<Product/>}/>
            <Route path="/newproduct" element={<NewProduct />}/>
            <Route path="/login" element={<Login />}/>
    
            
    
            </Routes>
           
          </div></>)} */}
        
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
              <Route path="/login" element={<Login />}/>
      
              
      
              </Routes>
             
            </div>
            </>
  
  
      </>
      
  
  
  
      
    );
  // }
 
}

export default App;
