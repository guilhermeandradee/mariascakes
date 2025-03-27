import Header from "../components/Header.jsx"

import '../styles/cardapio-doces-pers.css'
import '../styles/kits-prontos.css'
import '../styles/doces-info.css'
import '../styles/valor-unitario.css'

function CardapioDocesPersonalizados(){
    return(
        <>
            <Header/>

            <main>
                <section className="titulo">
                    <h2 className="font-poiret">CARDÁPIO DE DOCES PERSONALIZADOS</h2>
                    <div></div>

                    <p className="font-spartan">DOCES 3D QUE POSSUEM PÓ DOURADO, CINTILANTE OU AQUARELADO, DEVEM SER CONSULTADOS ENTRANDO EM CONTATO</p>

                    <p className="font-spartan">VOCÊ PODE ESCOLHER UM KIT PRONTO OU MONTAR O SEU PRÓPRIO KIT ENVIANDO <a href="">CADA ITEM</a> NO NOSSO <a href="">WHATSAPP</a></p>
                </section>

                <section className="kits-prontos">
                    <h2 className="font-poiret">KITS PRONTOS</h2>

                    <div className="kit">
                        <p className="font-spartan m-0">KIT SWEET HOME</p>
                        <p className="font-spartan m-0">12 DOCES PERSONALIZADOS</p>
                        <p className="font-spartan m-0">R$188</p>
                        <img src="/images/arrowd.png" alt="seta para baixo (abre mais opções)" />
                    </div>

                    <div className="kit">
                        <p className="font-spartan m-0">KIT SWEET HOME</p>
                        <p className="font-spartan m-0">12 DOCES PERSONALIZADOS</p>
                        <p className="font-spartan m-0">R$188</p>
                        <img src="/images/arrowd.png" alt="seta para baixo (abre mais opções)" />
                    </div>
                </section>

                <section className="doces-info">
                    <h2 className="font-spartan mt-0">PÃO DE MEL DE CASINHA</h2>

                    <div className="doces-info-foto">
                        <img src="/images/morango.png" alt="" />
                        <img src="/images/sweet.png" alt="" />
                    </div>

                    <h2 className="font-spartan">PÃO DE MEL DE CASINHA</h2>

                    <div className="doces-info-foto">
                        <img src="/images/sweet.png" alt="" />
                        <img src="/images/morango.png" alt="" />
                    </div>

                    <h2 className="font-spartan">PÃO DE MEL DE CASINHA</h2>

                    <div className="doces-info-foto">
                        <img src="/images/sweet.png" alt="" />
                        <img src="/images/morango.png" alt="" />
                    </div>

                    <h2 className="font-spartan">PÃO DE MEL DE CASINHA</h2>

                    <div className="doces-info-foto">
                        <img src="/images/sweet.png" alt="" />
                        <img src="/images/morango.png" alt="" />
                    </div>

                    <h2 className="font-spartan">PÃO DE MEL DE CASINHA</h2>

                    <div className="doces-info-foto ">
                        <img src="/images/sweet.png" alt="" />
                        <img src="/images/morango.png" alt="" />
                    </div>

                    {/* --------- */}
                    <div className="especificacoes">
                        <h2 className="font-spartan ">CUPCAKES</h2>
                        <p className="font-spartan">PEDIDO DE 6 EM 6 UNIDADES COM O MESMO RECHEIO</p>

                        <h2>RECHEIOS</h2>
                        <p className="font-spartan">NINHO, BRIGANACHE AO LEITE E BRIGANACHE BRANCA</p>

                        <h2>BOMBONS E CONES</h2>
                        <p>BRIGADEIRO, NINHO, BEIJINHO E BRIGADEIRO DE MORANGO (BICHO DE PÉ)</p>
                    </div>

                </section>

                <section className="valor-unitario">
                    <h2 className="font-poiret">VALOR UNITÁRIO</h2>
                    <p className="font-spartan">MONTE SEU PRÓPRIO KIT</p>

                    <div className="itens mb-5">
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0">R$102,00</p>
                        </div>
                    </div>

                <div className="fale-conosco">
                    <h3 className="font-spartan">FALE CONOSCO E ENCOMENDE O SEU PEDIDO</h3>
                    <button className="font-spartan">ENTRE EM CONTATO</button>
                </div>
                </section>

            </main>
        </>
    )
}

export default CardapioDocesPersonalizados