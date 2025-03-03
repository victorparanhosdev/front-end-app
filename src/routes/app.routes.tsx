import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import { Home } from "../pages/Home";

export function AppRoutes(){
  
    return(
        <Routes>
            <Route path="/" element={<HomeLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}