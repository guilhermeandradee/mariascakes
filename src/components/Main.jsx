import { AppContext } from "../contexts/windowSizeContext"
import { useContext, useState } from "react"
import HamMenu from "./HamMenu.jsx";

import '../styles/main.css'

function Main() {

    const { isMobileView, setIsMobileView } = useContext(AppContext);
    
    
    
    console.log('mobile', isMobileView)

    return(
        <>
            <main className="" style={{overflow: 'hidden'}} >

                {/* primeiro elemento */}
                <div 
                className="d-flex banner-img">

                    <div className="hero-div">
                        <div>
                            <h1 className="font-poiret">Sabores Que Marcam Momentos</h1>
                            <p className="font-poiret">Cada doce é único, feito para tornar sua celebração inesquecível.</p>

                        </div>
                            <div className="button-container">
                                <button>Monte Seu Bolo</button>
                                <button>Entre Em Contato</button>
                            </div>
                    </div>
                    <img src="/images/header-bg.png" alt="" />

                </div>

                {/* menu ham */}
                <HamMenu/>
                
                <section className="melhores-bolos">
                    <div id="img-chocolate">
                    </div>
                    <div id="text-melhores-bolos">
                        <h2 className="font-poiret">Recheios feitos com os melhores ingredientes para um sabor impecável.</h2>
                        <p className=" font-spartan">Chocolate nobre e técnicas refinadas para um doce perfeito.</p>
                    </div>
                    <div id="img-chocolate2">
                    </div>
                </section>

                {/*  fotos   */}
                <div className="row w-100 m-0 d-flex text-light fotos">
                    <figure className="d-flex col-6 col-sm-3 bg-success px-0 m-0"
                    style={{backgroundImage: 'url(/images/brownie.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                        <div className=" w-10">
                            <p className="m-0  font-spartan text-center">BOLOS COM RECHEIOS MAGNÍFICOS</p>
                        </div>
                    </figure>
                    
                    
                    <figure className=" col-6 col-sm-3 bg-success px-0 m-0"
                    style={{backgroundImage: 'url(/images/kitkat.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <div className="bg-dark-blue w-100">
                            <p className="m-0  font-spartan text-center">BOLOS COM RECHEIOS MAGNÍFICOS</p>
                        </div>
                    </figure>


                    <figure className=" col-6 col-sm-3 bg-success px-0 m-0"
                    style={{backgroundImage: 'url(/images/brownie.jpg)', backgroundSize: 'cover',backgroundPosition: 'center'}}>
                        <div className="bg-dark-blue w-100">
                            <p className="m-0  font-spartan text-center">BOLOS COM RECHEIOS MAGNÍFICOS</p>
                        </div>
                    </figure>


                    <figure className=" col-6 col-sm-3 bg-success px-0 m-0"
                    style={{backgroundImage: 'url(/images/cupcake.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: ' center',
                    }}>
                        <div className="bg-dark-blue w-100">
                            <p className="m-0  font-spartan text-center">BOLOS COM RECHEIOS MAGNÍFICOS</p>
                        </div>
                    </figure>
                </div>

                {/* Alguns feedbacks */}
                <div className=" pt-5">
                    <h2 className="font-title text-center mt-3 mt-md-5 mb-5">ALGUNS FEEDBACKS</h2>

                    <blockquote className="row px-3 pt-sm-5 px-md-5 justify-content-center m-0 text-light w-100 ">

                        <div className="col-md-3 col-sm-5 col-9 d-flex flex-column align-items-center justify-content-center bg-accent rounded-4 p-4 mx-md-4 mx-sm-3 mb-5">

                            <div className="bg-light-pink rounded-circle mb-4 feedback-circle"
                            
                            ></div>

                            <h3 className="font-subtitle font-feedback-title w-100">MARIA ANTONIA</h3>

                            <p className="mb-0 w-100 ">Bolos muito bonitos e saboros, vale muito a pena</p>
                        </div>


                        <div className="col-md-3 col-sm-5 col-9 d-flex flex-column align-items-center justify-content-center bg-accent rounded-4 p-4 mx-md-4 mx-sm-3 mb-5">

                            <div className="bg-light-pink rounded-circle mb-4 feedback-circle"
                            
                            ></div>

                            <h3 className="font-subtitle font-feedback-title w-100">MARIA ANTONIA</h3>

                            <p className="mb-0 w-100 ">Bolos muito bonitos e saboros, vale muito a pena</p>
                        </div>



                        <div className="col-md-3 col-sm-5 col-9 d-flex flex-column align-items-center justify-content-center bg-accent rounded-4 p-4 mx-md-4 mx-sm-3 mb-5">

                            <div className="bg-light-pink rounded-circle mb-4 feedback-circle"
                            
                            ></div>

                            <h3 className="font-subtitle font-feedback-title w-100">MARIA ANTONIA</h3>

                            <p className="mb-0 w-100 ">Bolos muito bonitos e saboros, vale muito a pena</p>
                        </div>
                    </blockquote>
                </div>
                
                {/* Silmulação de valor */}
                <div className="pt-5 d-flex flex-column align-items-center px-2">
                    <h1 className="font-title text-center col-12 col-md-8 mb-4 ">SIMULE O VALOR MONTANDO SEU PRÓPRIO BOLO</h1>
                    <p className="font-subtitle text-center color-dark-blue font-s-subtitle">VALORES APROXIMADOS</p>

                    <img className="img-fluid mt-3 mt-sm-5 col-1" src="/images/arrow.png" alt="imagem de seta apontando para baixo" />

                    <button className="mt-5 bg-dark-blue text-light col-md-4 col-7 p-md-2 p-1 rounded border-0 mb-5">SIMULAR</button>
                </div>
            </main>
        </>
    )
}

export default Main