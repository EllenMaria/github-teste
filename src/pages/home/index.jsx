import { Search } from "../../components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
  return (
    <main>
    <div>
    <h1><strong className="fw-bold">Github</strong> Search</h1>
    <Search /> 
    <ToastContainer 
    position="top-right"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"/>
    </div>
    </main>
  );
};
