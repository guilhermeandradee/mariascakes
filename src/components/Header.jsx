import { useState, useEffect, useContext } from 'react'
import './Header.css'
import { AppContext } from '../contexts/windowSizeContext';
import { RxCross2 } from "react-icons/rx";



function Header(){

    const { menuHamIsActive, setHamMenuIsActive } = useContext(AppContext);
    const { menuHamChange } = useContext(AppContext);

    const { isMobileView, setIsMobileView } = useContext(AppContext);

    console.log('menu active', menuHamIsActive)

    useEffect(() => {
        // Atualiza a visualização conforme o tamanho da janela
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 840);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      function menuToBeShown(){
        if(isMobileView){
            return(
                <div className={`ham-menu me-2 
                    ${menuHamIsActive && "active"}`} 

                    onClick={menuHamChange} 

                    style={{
                        height: '40px', 
                        width: '30px', 
                        position: 'relative'
                    }}>

                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
            )
        } else if(!isMobileView){
            return (
                <nav className="col-8 d-flex justify-content-end align-items-center py-2">
                    <ul className="d-flex list-unstyled align-items-center justify-content-end m-0 w-100 font-header header-menu">
                        <li className="me-4 font-spartan color-subtitle ">HOME</li>
                        <li className="me-4 font-spartan color-subtitle ">MONTE SEU BOLO</li>
                        <li className="me-4 font-spartan color-subtitle ">KITS</li>
                        <li className="me-4 font-spartan color-subtitle ">DOCES PERSONALIZADOS</li>
                        <li className="me-4 font-spartan color-subtitle ">PORTFOLIOS</li>
                    </ul>
                </nav>
            )
        }
      }

    return(
        <>
            <header className="row container-fluid justify-content-between align-items-center m-0 font-spartan"
            style={{
                backgroundColor: '#FFE9F3'
            }}
            >
                <div className="col-lg-2 col-md-3 col-sm-3 col-6">
                    <img className="img-fluid" src="/images/image.png" alt="Logo da Empresa" />
                </div>
            

                {menuToBeShown()}
                

                
            </header>
        </>
    )
}

export default Header