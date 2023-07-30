import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Component/ProjectDetails";
import AllProject from "../Pages/AllProject/AllProject";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/projectDetails/:id',
          loader:({params}) => fetch(`https://my-portfolio-server-psi.vercel.app/projects/${params.id}`),
          element: <ProjectDetails></ProjectDetails>
        },

        {
          path:'/allProject',
          element:<AllProject/>
        }
      ]
    },
  ]);

  export default router;