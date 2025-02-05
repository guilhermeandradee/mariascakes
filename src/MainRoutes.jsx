import { Routes, Route } from "react-router-dom";
import App from "./App";
import MonteSeuBolo from "./pages/MonteSeuBolo/MonteSeuBolo";
function MainRoutes() {
    return(
        <Routes>

        <Route path="/" element={<App />} />
        <Route path="/monte-seu-bolo" element={<MonteSeuBolo/>} />

        </Routes>
    )
    

}

export default MainRoutes