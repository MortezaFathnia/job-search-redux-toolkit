import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Landing, Error, Dashboard, Register } from "./pages";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="landing" element={<Landing/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <ToastContainer position="top-center"/>
    </BrowserRouter>
  );
}

export default App;
