import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topBar/Topbar.jsx";
import Home from "./pages/Home/Home"
import "./app.css";

function App() {
  return (
    <div >
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>



    </div>
  );
}

export default App;
