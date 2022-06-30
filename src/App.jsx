import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen bg-slate-800 overflow-hidden">
      <Navbar />
      <Outlet />
    </div>

  );
}

export default App;
