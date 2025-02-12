import Header from "../components/Header.jsx"

import '../styles/cardapio-doces-pers.css'
import '../styles/kits-prontos.css'
import '../styles/doces-info.css'

function CardapioDocesPersonalizados(){
    return(
        <>
            <Header/>

            <main>
                <section className="titulo">
                    <h2 className="font-poiret">CARDÁPIO DE DOCES PERSONALIZADOS</h2>
                    <div></div>

                    <p className="font-spartan">PARA DOCES MODELADOS EM 3D, QUE POSSUAM PÓ DOURADO, CINTILANTE OU AQUARELADO, <a href="">CONSULTAR VALOR CONOSOCO</a></p>

                    <p className="font-spartan">KITS SÃO APENAS SUGESTÕES DE MONTAGEM, PARA MONTAR O SEU KIT, <a href="">CONSULTE O VALOR UNITÁRIO DOS DOCES</a></p>
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

                    <div className="doces-info-foto">
                        <img src="/images/sweet.png" alt="" />
                        <img src="/images/morango.png" alt="" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default CardapioDocesPersonalizados