import { useState, useContext, useEffect } from "react"
import { AppContext } from "../contexts/windowSizeContext"

    

function HamMenu() {
    
    const { isMobileView, setIsMobileView } = useContext(AppContext);

    const [menuDisplay, setMenuDisplay] = useState("block");

    const { menuHamIsActive, setHamMenuIsActive } = useContext(AppContext);

    // useEffect(() => {
    //     setTimeout(() => {
    //         menuHam()
    //     }, 1500);
    // }, [menuHamIsActive])

    function menuHam() {
        isMobileView && menuHamIsActive ? setMenuDisplay('block') : setMenuDisplay("none")
    }

    function returnActive() {
        return menuHamIsActive ? ("active opacity-1") : ("opacity-0")
    }

    return(
        <nav className={`bg-light-pink col-12 h-100 pt-5 menu-hamburguer d-flex flex-column justify-content-around ` }
                style={{
                    top: menuHamIsActive ? 0 : '-100%', 
                    right: 0,
                    display: menuDisplay,
                    transition: '.3s',
                    opacity: 1,
                    position: 'fixed'
                }}>
                    <ul className="d-flex flex-column px-4 "
                    style={{
                        listStyle: 'none',
                        
                    }}>
                        <li className="ham-menu-li  font-subtitle border-top border-bottom py-3">HOME</li>
                        <li className="ham-menu-li  font-subtitle border-bottom py-3">MONTE SEU BOLO</li>
                        <li className="ham-menu-li  font-subtitle border-bottom py-3">KITS</li>
                        <li className="ham-menu-li  font-subtitle border-bottom py-3">DOCINHOS</li>
                        <li className="ham-menu-li font-subtitle py-3 border-bottom">RENDIMENTO</li>
                    </ul>

                    <a className="text-decoration-none text-dark ham-menu-li text-center mb-3 font-subtitle" href="">ENTRE EM CONTATO</a>
                </nav>
    )
}

export default HamMenu