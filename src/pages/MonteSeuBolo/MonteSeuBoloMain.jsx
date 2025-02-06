import { useState } from "react"
import '../../styles/cobertura.css'
import '../../styles/add-decoracao.css'
import '../../styles/recheios.css'
import '../../styles/resultado.css'

function MonteSeuBoloMain() {

    const [recheioEscolhido, setRecheioEscolhido] = useState('')

    const handleChange = (event) => {
        setRecheioEscolhido(event.target.value); // Atualiza o estado com o valor selecionado
    };

    console.log(recheioEscolhido)

    return(
        <>
            <main className="">
                {/* primeira sessão */}
                <div className="d-flex flex-column justify-content-center align-items-center mt-5 px-2">
                    <h2 className="font-title text-center col-sm-8 col-12">MONTE SEU BOLO POR PARTES E CONSULTE O VALOR FINAL APROXIMADO</h2>

                    <p className="font-subtitle color-dark-blue mt-5 com-sm-12 col-10 text-center">PARA SERVIÇOS FORA DO CARDÁPIO NOS CONSULTE NO WHATSAPP</p>

                    <img className="img-fluid mt-3 mt-sm-5" src="/images/arrow.png" alt="imagem de seta apontando para baixo" style={{maxWidth: '5%'}} />
                </div>

                {/* seleção de bolo */}
                <section className="row m-0 mt-5">
                    <div className="bg-success col-12 col-md-6 d-flex flex-column align-items-center justify-content-between monte-seu-bolo-imagens p-4 py-5 font-spartan text-light"
                    style={{
                        backgroundImage: 'url(/images/brownie.jpg',
                        backgroundSize: 'cover',
                        backgroundPositionY: 'center',
                    }}>
                        <h3 className="font-title-spartan text-center font-w-normal mt-4">BOLO TRADICIONAL</h3>

                        <button className="mt-5 col-6 col-md-5 border-0 bg-dark-blue m-0 rounded"><p className="m-0 p-2 font-subtitle text-light font-w-normal">PERSONALIZAR</p></button>
                    </div>

                    <div className="bg-success col-12 col-md-6 d-flex flex-column align-items-center justify-content-around monte-seu-bolo-imagens p-4 font-spartan text-light"
                    style={{
                        backgroundImage: 'url(/images/kitkat.jpg',
                        backgroundSize: 'cover',
                        backgroundPositionY: 'center',
                    }}>
                        <h3 className="font-title-spartan text-center font-w-normal">BOLO TRADICIONAL</h3>

                        <button className="mt-5 col-md-5 border-0 bg-dark-blue m-0 rounded"><p className="m-0 p-2  text-light font-w-normal">PERSONALIZAR</p></button>
                    </div>

                </section>

                {/* tamanho do bolo */}
                <section className="px-0 px-sm-3 mb-5 py-5">
                    <h2 className="font-title text-center mt-5">TAMANHO DO BOLO</h2>

                    <div className="d-flex m-0 justify-content-center flex-wrap">

                        <div className="w-100 d-flex justify-content-center flex-wrap">
                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div className="bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel mx-sm-4 mx-md-3 mx-2 mt-5">
                                    MINI
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3">
                                    <p className="m-0 font-subtitle">FATIAS: de 8 a 10</p>
                                    <p className="m-0 font-subtitle">PESO: de 800g a 1kg</p>
                                </div>
                            </div>


                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div className="bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel mx-sm-4 mx-md-3 mx-2 mt-5">
                                    P
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3">
                                    <p className="m-0 font-subtitle">FATIAS: De 12 a 14</p>
                                    <p className="m-0 font-subtitle">PESO: 1,4kg a 1,6kg</p>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div className="bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel mx-sm-4 mx-md-3 mx-2 mt-5">
                                    M
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3">
                                    <p className="m-0 font-subtitle">FATIAS: De 16 a 18</p>
                                    <p className="m-0 font-subtitle">PESO: 1,8kg a 2kg</p>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div className="bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel mx-sm-4 mx-md-3 mx-2 mt-5">
                                    G
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3">
                                    <p className="m-0 font-subtitle">FATIAS: De 18 a 20</p>
                                    <p className="m-0 font-subtitle">PESO: 2kg a 2,2kg</p>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div className="bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel mx-sm-4 mx-md-3 mx-2 mt-5">
                                    GG
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3">
                                    <p className="m-0 font-subtitle">FATIAS: De 25 a 30</p>
                                    <p className="m-0 font-subtitle">PESO: 2,8kg a 3kg</p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </section>

                <section className="bg-light-blue pt-5 px-4 d-flex flex-column align-items-center pb-5 recheios" >
                    <h2 className="text-center font-title"
                    >Recheios</h2>

                    <div className="d-flex flex-column col-12 col-md-6 align-items-center font-spartan mt-5">

                        <label className="w-100 font-w-normal">TRADICIONAL</label>
                        <select 
                        value={recheioEscolhido} 
                        onChange={handleChange}
                        className="w-100 bg-dark-blue py-2 px-3 border-0 text-light seletor"
                        id="tamanho" name="tamanho"
                        style={{
                            borderRadius: '3px',
                            outline: 'none',
                        }}>
                            <option value="Brigadeiro" onFocus={() => setRecheioEscolhido('eaea')} >Brigadeiro</option>
                            <option value="Beijinho">Beijinho</option>
                            <option value="Brigadeiro de ninho">Brigadeiro de ninho</option>
                            <option value="Doce de leite" >Doce de leite</option>
                            <option value="Brigadeiro de morango">Brigadeiro de morango</option>
                            <option value="Brigadeiro de doce de leite com coco">Brigadeiro de doce de leite com coco</option>
                            <option value="Brigadeiro branco" >Brigadeiro branco</option>
                            <option value="Brigadeiro alpino">Brigadeiro alpino</option>
                        </select>


                        <label className="w-100 font-w-normal mt-5">RECHEIO SUPERIOR GOURMET</label>
                        <select
                        className="w-100 bg-dark-blue py-2 px-3 border-0 text-light seletor"
                        value={recheioEscolhido} 
                        onChange={handleChange}
                        id="tamanho" name="tamanho"
                        style={{
                            borderRadius: '3px',
                            outline: 'none',
                        }}>
                            <option value="Brigadeiro de nutella" >Brigadeiro de nutella</option>
                            <option value="Brigadeiro 5 leites com geleia de morango">Brigadeiro 5 leites com geleia de morango</option>
                            <option value="Ninho com geleia de maracujá">Ninho com geleia de maracujá</option>
                            
                        
                        </select>


                        <label className="w-100 font-w-normal mt-5">REHCEIO SUPERIOR FRUTAS (TRADICIONAL + FRUTA) </label>
                        <select
                        className="w-100 bg-dark-blue py-2 px-3 border-0 text-light seletor mb-5"
                        value={recheioEscolhido} 
                        onChange={handleChange}
                        id="tamanho" name="tamanho"
                        style={{
                            borderRadius: '3px',
                            outline: 'none',
                        }}>
                            <option value="Morango">Morango</option>
                            <option value="Ameixa">Ameixa</option>
                            <option value="Abacaxi">Abacaxi</option>
                            
                        
                        </select>
                    </div>
                </section>

                {/* cobertura */}
                <section className="coberturas d-flex flex-wrap justify-content-center">
                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret text-center">NO ACETATO</h3>
                        <p className="font-spartan text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <img id="bolo-icon" src="/images/boloicon.svg" alt="ícone de bolo" />

                        <button className="adicionar-cobertura-btn font-spartan">ADICIONAR</button>
                    </div>

                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret text-center">NO ACETATO</h3>
                        <p className="font-spartan text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <img id="bolo-icon" src="/images/boloicon.svg" alt="ícone de bolo" />

                        <button className="adicionar-cobertura-btn font-spartan">ADICIONAR</button>
                    </div>

                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret text-center">NO ACETATO</h3>
                        <p className="font-spartan text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <img id="bolo-icon" src="/images/boloicon.svg" alt="ícone de bolo" />

                        <button className="adicionar-cobertura-btn font-spartan">ADICIONAR</button>
                    </div>

                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret text-center">NO ACETATO</h3>
                        <p className="font-spartan text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <img id="bolo-icon" src="/images/boloicon.svg" alt="ícone de bolo" />

                        <button className="adicionar-cobertura-btn font-spartan">ADICIONAR</button>
                    </div>
                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret text-center">NO ACETATO</h3>
                        <p className="font-spartan text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <img id="bolo-icon" src="/images/boloicon.svg" alt="ícone de bolo" />

                        <button className="adicionar-cobertura-btn font-spartan">ADICIONAR</button>
                    </div>
                </section>

                <section className="add-decoracao w-100 mt-5">
                    <div className="separa-decoracao-esquerda">
                        <h2 className="font-poiret">ADICIONE UMA DECORAÇÃO</h2>

                        <p className="font-spartan">OS VALORES SÃO ACRESCENTADOS CONFORME O TIPO DE DECORAÇÂOEM DÚVIDA, CONSULTE O <a href="">CARDÁPIO</a></p>
                    </div>

                    <div className="separa-decoracao-direita">
                        <ul>
                            <li>
                                <div>

                                </div>
                                <p className="m-0 font-spartan">PÓ CINTILANTE</p>
                            </li>

                            <li>
                                <div>

                                </div>
                                <p className="m-0 font-spartan">PÓ GLITTER</p>
                            </li>

                            <li>
                                <div>

                                </div>
                                <p className="m-0 font-spartan">PRETO</p>
                            </li>

                            <li>
                                <div>

                                </div>
                                <p className="m-0 font-spartan">AZUL ANIL</p>
                            </li>

                            <li>
                                <div>

                                </div>
                                <p className="m-0 font-spartan">PÓ CINTILANTE</p>
                            </li>

                            <li>
                                <div>

                                </div>
                                <p className="m-0 font-spartan">PÓ GLITTER</p>
                            </li>

                            <li>
                                <div>

                                </div>
                                <p className="m-0 font-spartan">PRETO</p>
                            </li>

                            <li>
                                <div>

                                </div>
                                <p className="m-0 font-spartan">AZUL ANIL</p>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="resultado">
                    <h2 className="font-poiret">RESULTADO</h2>

                    <div className="item-carrinho">
                        <p className="font-spartan m-0">TAMANHO</p>
                        <p className="font-spartan m-0">M</p>
                        <p className="font-spartan m-0">R$180,00</p>
                    </div>

                    <div className="item-carrinho">
                        <p className="font-spartan m-0">TAMANHO</p>
                        <p className="font-spartan m-0">M</p>
                        <p className="font-spartan m-0">R$180,00</p>
                    </div>

                    <div className="item-carrinho">
                        <p className="font-spartan m-0">TAMANHO</p>
                        <p className="font-spartan m-0">M</p>
                        <p className="font-spartan m-0">R$180,00</p>
                    </div>
                    <p className="font-spartan">TOTAL: R$180,00</p>

                    <div className="fale-conosco">
                        <h3 className="font-spartan">FALE CONOSCO E ENCOMENDE O SEU PEDIDO</h3>
                        <button className="font-spartan">ENTRE EM CONTATO</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MonteSeuBoloMain