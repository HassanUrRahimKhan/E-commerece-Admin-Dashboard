import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topBar/Topbar.jsx";
import Home from "./pages/Home/Home";
import Userlist from "./pages/UserList/UserList";
import "./app.css";
import { DataGrid } from '@mui/x-data-grid';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  return (
   
    <>
      <Topbar />
      <div className="container">
        <Sidebar />

        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Userlist />}/>

        </Routes>
       
      </div>



    </>
    



    
  );
}

export default App;
