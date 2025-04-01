import { Routes, Route } from "react-router-dom";
import App from "./App";
import MonteSeuBolo from "./pages/MonteSeuBolo/MonteSeuBolo";
import CardapioDocesPersonalizados from "./pages/CardapioDocesPersonalizados";

import PortfolioKits from "./pages/portfolio/PortfolioKits";
import PortfolioBolos from "./pages/portfolio/portfolioBolos";
function MainRoutes() {
    return(
        <Routes>

            <Route path="/" element={<App />} />
            <Route path="/monte-seu-bolo" element={<MonteSeuBolo/>} />
            <Route path="/cardapio-doces-personalizados" element={<CardapioDocesPersonalizados/>} />
            <Route path="/portfolio-bolos" element={<PortfolioBolos/>} />
            <Route path="/portfolio-kits" element={<PortfolioKits/>} />
            

        </Routes>
    )
    

}

export default MainRoutes