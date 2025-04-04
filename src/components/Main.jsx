import { AppContext } from "../contexts/windowSizeContext"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import HamMenu from "./HamMenu.jsx";

import '../styles/main.css'

function Main() {
    const navigate = useNavigate();

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
                            <p className="font-spartan">Cada doce é único, feito para tornar sua celebração inesquecível.</p>

                        </div>
                            <div className="button-container">
                                <button
                                onClick={() => navigate('/monte-seu-bolo')}
                                >Monte Seu Bolo</button>

                                <button>
                                    <a style={{textDecoration: 'none', color: '#D4686E'}} target="_blank" href="https://wa.me/5511961957783?text=Olá,%20quero%20fazer%20um%20pedido!" rel="noopener noreferrer">Entre Em Contato</a>
                                </button>
                            </div>
                    </div>
                    <img src="/images/festavaca.jpeg" alt="imagem ilustrativa de bolos personailzados" />

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
                            <p className="m-0  font-spartan text-center">Bolos com recheios incríveis</p>
                        </div>
                    </figure>
                    
                    
                    <figure className="d-flex col-6 col-sm-3 bg-success px-0 m-0"
                    style={{backgroundImage: 'url(/images/kitkat.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <div className="bg-dark-blue w-100">
                            <p className="m-0  font-spartan text-center"> Docinhos cheios de sabor</p>
                        </div>
                    </figure>


                    <figure className="d-flex col-6 col-sm-3 bg-success px-0 m-0"
                    style={{backgroundImage: 'url(/images/brownie.jpg)', backgroundSize: 'cover',backgroundPosition: 'center'}}>
                        <div className="bg-dark-blue w-100">
                            <p className="m-0  font-spartan text-center">Cupcakes macios e deliciosos</p>
                        </div>
                    </figure>


                    <figure className="d-flex col-6 col-sm-3 bg-success px-0 m-0"
                    style={{backgroundImage: 'url(/images/cupcake.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: ' center',
                    }}>
                        <div className="bg-dark-blue w-100">
                            <p className="m-0  font-spartan text-center">Brigadeiros irresistíveis</p>
                        </div>
                    </figure>
                </div>

                {/* Alguns feedbacks */}
                <div className=" pt-5 feedback pb-5 mb-2 mb-sm-1 mb-md-0">
                    <h2 className="font-poiret text-center">100% DE SATISFAÇÃO DOS CLIENTES</h2>
                    <p className="text-center font-spartan m-0">VENHA SER NOSSA PRÓXIMA AVALIAÇÃO</p>
                    <div className="text-center">★★★★★</div>

                    <div className="feedback-images mt-5 mb-md-5 ">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <img className="vetorrosa" src="images/vetorrosa.png" alt="" />
                
                {/* Silmulação de valor */}
                <div className="CTO d-flex flex-column align-items-center px-2">
                    <h2 className="font-poiret text-center col-12 col-md-8 mb-4 ">SIMULE O PREÇO MONTANDO SEU PRÓPRIO BOLO</h2>
                    <p className="font-spartan text-center color-dark-blue font-s-subtitle">VALORES APROXIMADOS</p>

                    <button 
                    onClick={() => navigate('/monte-seu-bolo')}
                    className="mt-5 bg-dark-blue text-light col-md-4 col-7 p-md-2 p-1 rounded border-0 mb-5">SIMULAR</button>
                </div>
            </main>
        </>
    )
}

export default Main