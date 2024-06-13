import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import Agent from '../pages/Agent.tsx'

const router =  createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: 'agent',
                element: <Agent />
            }
        ]
    }
])
export default router