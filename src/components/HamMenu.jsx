import { useState, useContext, useEffect } from "react"
import { AppContext } from "../contexts/windowSizeContext"
import { TbBrandWhatsapp } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";



    

function HamMenu() {
    
    const { isMobileView, setIsMobileView } = useContext(AppContext);

    const [menuDisplay, setMenuDisplay] = useState("block");

    const { menuHamIsActive, setHamMenuIsActive } = useContext(AppContext);
    const {menuHamChange} = useContext(AppContext)

    useEffect(() => {
        setTimeout(() => {
            menuHam()
        }, 1500);
    }, [menuHamIsActive])

    function menuHam() {
        isMobileView && menuHamIsActive ? setMenuDisplay('block') : setMenuDisplay("none")
    }

    function returnActive() {
        return menuHamIsActive ? ("active opacity-1") : ("opacity-0")
    }

    return(
        <nav className={`bg-light-pink col-12 h-100 pt-5 menu-hamburguer d-flex flex-column justify-content-around ${returnActive()}` }
                style={{
                    top: menuHamIsActive ? 0 : '-100%', 
                    right: 0,
                    display: menuDisplay,
                    transition: '.3s',
                    position: 'fixed'
                }}>
                    
                    <ul className="d-flex flex-column px-4 "
                    style={{
                        listStyle: 'none',
                        
                    }}>
                        <li className="ham-menu-li  font-spartan color-subtitle border-top border-bottom py-3">
                            <a href="/" className="text-decoration-none color-subtitle">HOME</a></li>
                        <li className="ham-menu-li  font-spartan color-subtitle border-bottom py-3">
                            <a href="/monte-seu-bolo" className="text-decoration-none color-subtitle">MONTE O SEU BOLO</a></li>
                        <li className="ham-menu-li  font-spartan color-subtitle border-bottom py-3">
                            <a href="/cardapio-doces-personalizados" className="text-decoration-none color-subtitle">KITS E DOCES PERSONALIZADOS</a></li>
                        <li className="ham-menu-li  font-spartan color-subtitle border-bottom py-3">
                            <a href="/portfolio-kits" className="text-decoration-none color-subtitle">PORTFOLIO DE KITS</a></li>
                        <li className="ham-menu-li font-spartan color-subtitle py-3 border-bottom">
                            <a href="/portfolio-bolos" className="text-decoration-none color-subtitle">PORTFOLIO DE BOLOS</a></li>
                    </ul>
                    
                    <a className="font-spartan color-subtitle text-decoration-none ham-menu-li text-center mb-3 d-flex alig-items-center justify-content-center" href="">ENTRE EM CONTATO <TbBrandWhatsapp className=" h-100 ms-2" /></a>
                    <RxCross2 onClick={() => menuHamChange()} className="w-100 color-subtitle" style={{height: '5%'}}/>
                </nav>
                
    )
}

export default HamMenu