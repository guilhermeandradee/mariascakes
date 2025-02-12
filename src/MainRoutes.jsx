import { Routes, Route } from "react-router-dom";
import App from "./App";
import MonteSeuBolo from "./pages/MonteSeuBolo/MonteSeuBolo";
import CardapioDocesPersonalizados from "./pages/CardapioDocesPersonalizados";
function MainRoutes() {
    return(
        <Routes>

            <Route path="/" element={<App />} />
            <Route path="/monte-seu-bolo" element={<MonteSeuBolo/>} />
            <Route path="/cardapio-doces-personalizados" element={<CardapioDocesPersonalizados/>} />

        </Routes>
    )
    

}

export default MainRoutes