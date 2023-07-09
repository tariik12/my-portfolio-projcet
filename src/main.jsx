
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <div className='max-w-screen-xl   mx-auto'>
    
     <RouterProvider router={router} />
     <ToastContainer />
  </div>
  
)
