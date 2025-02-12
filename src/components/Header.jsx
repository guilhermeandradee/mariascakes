import { useState, useEffect, useContext } from 'react'
import './Header.css'
import { AppContext } from '../contexts/windowSizeContext';


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
                    <ul className="d-flex list-unstyled align-items-center justify-content-end m-0 w-100 font-header">
                        <li className="me-4 ">HOME</li>
                        <li className="me-4 ">MONTE SEU BOLO</li>
                        <li className="me-4 ">KITS</li>
                        <li className="me-4 ">DOCES PERSONALIZADOS</li>
                        <li className="me-4 ">PORTFOLIOS</li>
                    </ul>
                </nav>
            )
        }
      }

    return(
        <>
            <header className="row container-fluid justify-content-between align-items-center bg-smoosh-pink m-0 py-2 py-md-3"
            >
                <div className="col-lg-2 col-md-3 col-sm-3 col-6">
                    <img className="img-fluid" src="/public/image.png" alt="Logo da Empresa" />
                </div>


                {menuToBeShown()}
                

                
            </header>

            <header className="row container-fluid justify-content-between align-items-center bg-smoosh-pink m-0 py-2 py-md-3"
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                zIndex: '100'
            }}
            >
                <div className="col-lg-2 col-md-3 col-sm-3 col-6">
                    <img className="img-fluid" src="/public/image.png" alt="Logo da Empresa" />
                </div>


                {menuToBeShown()}
                

                
            </header>
        </>
    )
}

export default Header