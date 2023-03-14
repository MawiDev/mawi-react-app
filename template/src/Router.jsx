import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import NotFound from "./components/NotFound";
const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Homepage/>}/>
                <Route element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;