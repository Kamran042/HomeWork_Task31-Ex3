
import AdminRoot from "../pages/admin/AdminRoot"
import Dashboard from "../pages/admin/dashboard/dashboard"
import Add from "../pages/admin/add/add"
// import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/home/home"
import Detail from "../pages/site/Deatil/Detail"

const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"detail/:id",
                element:<Detail/>
            }
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:"",
                element:<Dashboard/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
    // ,    {
    //     path:"*",
    //     element:<Error/>,
        
    // },
]
export default ROUTES;