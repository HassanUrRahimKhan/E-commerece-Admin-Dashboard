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
   const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
 // const admin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTQzMGFiNjk4YWQzNmVjOGRmYzIzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDkzMDU5MywiZXhwIjoxNjU1MTg5NzkzfQ.EUvg4aReM29ny59BIscFZktYWOAWfLBnvB89YVKUEMg";
  let location = useLocation();

 
 console.log("🚀 ~ file: App.js ~ line 25 ~ App ~ admin", admin)

  // console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin);

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
  if (location.pathname === "/Login") {
    //console.log(location.pathname);
    return <Login />
  }
  else if (admin) {
  return (

    <>
      {/*
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
      {
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Userlist />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />

            



            </Routes>

          </div>
        </>
      }


    </>





  );
  }

}

export default App;
