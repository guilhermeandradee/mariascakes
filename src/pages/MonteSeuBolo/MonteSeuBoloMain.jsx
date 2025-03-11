import { useEffect, useState } from "react"
import '../../styles/cobertura.css'
import '../../styles/add-decoracao.css'
import '../../styles/recheios.css'
import '../../styles/resultado.css'
import '../../styles/brigadeiro-superior.css'
import '../../styles/tamanho-do-bolo.css'

const precos = {
    tradicional: {
        MINI: 75,
        P: 112,
        M: 187,
        G: 225,
        GG: 300
    },
    superiorgourmet: {
        P: 135,
        M: 225,
        G: 270,
        GG: 360
    },
    tradicionalfrutas: {
        P: 120,
        M: 200,
        G: 249,
        GG: 320
    }
};

const categoriasRecheio = {
    // Tradicional
    brigadeiro: "tradicional",
    beijinho: "tradicional",
    brigadeiroDeNinho: "tradicional",
    brigadeiroDeMorango: "tradicional",
    brigadeiroBranco: "tradicional",
    brigadeiroDeDoceDeLeite: "tradicional",
    brigadeiroDoceDeLeiteComCoco: "tradicional",

    // Superior Gourmet
    brigadeiroDeNutella: "superiorgourmet",
    brigadeiro5LeitesComGeleiaDeMorango: "superiorgourmet",
    mousseTrufadoDeMaracuja: "superiorgourmet",
    mousseTrufadoDeChocolate: "superiorgourmet",
    mousseTrufadoDeNutella: "superiorgourmet",
    mousseTrufadoDeNinho: "superiorgourmet",

    // Tradicional + Frutas
    morango: "tradicionalfrutas",
    ameixa: "tradicionalfrutas",
    abacaxi: "tradicionalfrutas"
};


function MonteSeuBoloMain() {

    const [recheioEscolhido, setRecheioEscolhido] = useState('')

    const handleChange = (event) => {
        setRecheioEscolhido(event.target.value); // Atualiza o estado com o valor selecionado
    };

    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null)

    function handleClickTamanho(tamanho, campo, valor){
        setTamanhoSelecionado(tamanho)
        atualizarPedido(campo, valor)
    }
    function handleClickRecheio(campo, recheio){
        setRecheioEscolhido(recheio)
        atualizarPedido(campo, recheio)
    }

    function handleClickDecoracao(campo, decoracao){
        setDecoracaoSelecionada(decoracao)
        atualizarPedido(campo, decoracao)
    }

    function retornarClasseTamanhoDoBolo(tamanho){
        return tamanho === tamanhoSelecionado && "quadrado-selecionado"
    }

    const [coberturaSelecionada, setCoberturaSelecionada] = useState(null)

    const [decoracaoSelecionada, setDecoracaoSelecionada] = useState(null)


    const [precoFinal, setPrecoFinal] = useState(0)

    function retornarClasseDecoracao(decoracao){
        return decoracao === decoracaoSelecionada && "decoracao-selecionada"
    }

    function valorItem(itemEscolhido, tipo) {
        const itemEncontrado = tipo.find(item => Object.keys(item)[0].toUpperCase().trim() === itemEscolhido);
        
        return itemEncontrado ? Object.values(itemEncontrado)[0] : "0";
    }

    const calcularPreco = (tamanhoEscolhido, recheioEscolhido) => {
        if (tamanhoEscolhido && recheioEscolhido) {
            const preco = precos[recheioEscolhido]?.[tamanhoEscolhido] || 0;
            setPrecoFinal(preco);
        }
    };

    useEffect(() => {
        if (tamanhoSelecionado && recheioEscolhido) {
            const categoriaRecheio = categoriasRecheio[recheioEscolhido]; // Obtém a categoria do recheio
            const precoCalculado = precos[categoriaRecheio]?.[tamanhoSelecionado] || 0;
    
            setPrecoFinal(precoCalculado);
            setPedido(prev => ({
                ...prev,
                preco: precoCalculado
            }));
        }
    }, [tamanhoSelecionado, recheioEscolhido]);


    const [pedido, setPedido] = useState({
        formato: "",
        tamanho: "",
        recheio: "",
        massa: "",
        cobertura: "",
        decoracao: "",
        preco: 0
    });

    function atualizarPedido(campo, valor) {
        setPedido(prev => {
            const novoPedido = { ...prev, [campo]: valor };

            // Verifica se tamanho e recheio foram escolhidos para calcular o preço
            if (novoPedido.tamanho && novoPedido.recheio) {
                const categoria = categoriasRecheio[novoPedido.recheio]; // Pegamos a categoria do recheio
                novoPedido.preco = precos[categoria]?.[novoPedido.tamanho] || 0;
            }

            return novoPedido;
        });
    }

    console.log(pedido)

    return(
        <>
            <main className="">
                {/* primeira sessão */}
                <div className="d-flex flex-column justify-content-center align-items-center mt-5 px-2">
                    <h2 className="font-poiret text-center col-sm-8 col-12 color-dark-blue">Crie seu bolo do jeito que quiser e veja uma estimativa de preço!</h2>

                    <p className="font-spartan color-dark-blue mt-5 com-sm-12 col-10 text-center">Quer algo exclusivo fora do cardápio? Chama a gente no WhatsApp e vamos criar juntos!</p>

                    <img className="img-fluid mt-3 mt-sm-5" src="/images/arrow.png" alt="imagem de seta apontando para baixo" style={{maxWidth: '5%'}} />
                </div>

                {/* seleção de bolo */}
                <section className="row m-0 mt-5">
                    <div className="bg-success col-12 col-md-6 d-flex flex-column align-items-center justify-content-between monte-seu-bolo-imagens p-4 py-5 font-spartan text-light"
                    style={{
                        backgroundImage: 'url(/images/brownie.jpg)',
                        backgroundSize: 'cover',
                        backgroundPositionY: 'center',
                    }}>
                        <h3 className="font-spartan text-center font-w-normal mt-4">BOLO REDONDO</h3>

                        <button onClick={() => atualizarPedido("formato", "REDONDO")} className="formato-btn mt-5 col-6 col-md-5 m-0 rounded"><p className="m-0 p-2 font-spartan text-light font-w-normal ">{pedido.formato == "REDONDO" ? "ESCOLHIDO" : "ESCOLHER"}</p></button>
                    </div>

                    <div className="bg-success col-12 col-md-6 d-flex flex-column align-items-center justify-content-between monte-seu-bolo-imagens p-4 py-5 font-spartan text-light"
                    style={{
                        backgroundImage: 'url(/images/brownie.jpg)',
                        backgroundSize: 'cover',
                        backgroundPositionY: 'center',
                    }}>
                        <h3 className="font-spartan text-center font-w-normal mt-4">BOLO RETANGULAR</h3>

                        <button onClick={() => atualizarPedido("formato", "RETANGULAR")} className="formato-btn mt-5 col-6 col-md-5 m-0 rounded"><p className="m-0 p-2 font-spartan text-light font-w-normal ">{pedido.formato == "RETANGULAR" ? "ESCOLHIDO" : "ESCOLHER"}</p></button>
                    </div>

                </section>

                {/* tamanho do bolo */}
                <section className="px-0 px-sm-3 py-5 bg-light-pink">
                    <h2 className="font-poiret text-center mt-5 color-subtitle">Tamanho</h2>
                    <p className="font-spartan color-subtitle text-center">Fatias Aproximadas</p>

                    <div className="d-flex m-0 justify-content-center flex-wrap ">

                        <div className="w-100 d-flex justify-content-center flex-wrap ">
                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div
                                onClick={() => handleClickTamanho("MINI", "tamanho", "MINI")}
                                className={`bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel  mx-sm-4 mx-md-3 mx-2 mt-5 ${retornarClasseTamanhoDoBolo("MINI")}`}>
                                    MINI
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3 legend">
                                    <p className="m-0 font-spartan">Fatias: 10</p>
                                </div>
                            </div>


                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div
                                onClick={() => handleClickTamanho("P", "tamanho", "P")}
                                className={`bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel  mx-sm-4 mx-md-3 mx-2 mt-5 ${retornarClasseTamanhoDoBolo("P")}`}>
                                    P
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3 legend">
                                    <p className="m-0 font-spartan">Fatias: 15</p>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div
                                onClick={() => handleClickTamanho("M", "tamanho", "M")}
                                className={`bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel  mx-sm-4 mx-md-3 mx-2 mt-5 ${retornarClasseTamanhoDoBolo("M")}`}>
                                    M
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3 legend">
                                    <p className="m-0 font-spartan">Fatias: 20</p>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div
                                onClick={() => handleClickTamanho("G", "tamanho", "G")}
                                className={`bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel  mx-sm-4 mx-md-3 mx-2 mt-5 ${retornarClasseTamanhoDoBolo("G")}`}>
                                    G
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3 legend">
                                    <p className="m-0 font-spartan">Fatias: 30</p>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                <div
                                onClick={() => handleClickTamanho("GG", "tamanho", "GG")}
                                className={`bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel  mx-sm-4 mx-md-3 mx-2 mt-5 ${retornarClasseTamanhoDoBolo("GG")} `}>
                                    GG
                                </div>

                                {/* info */}
                                <div className="align-items-center d-flex flex-column col-11 mt-3 legend">
                                    <p className="m-0 font-spartan">Fatias: 40</p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </section>

                <section className="bg-light-blue pt-5 px-4 d-flex flex-column align-items-center pb-5 recheios" >
                    <h2 className="text-center font-poiret color-dark-blue"
                    >Recheios</h2>
                    <p className="font-spartan color-dark-blue">Escolha um recheio</p>

                    <div className="d-flex flex-column col-12 col-md-6 align-items-center font-spartan mt-5">

                        <label className="w-100 font-w-normal">TRADICIONAL</label>
                        <select 
                        value={recheioEscolhido} 
                        onChange={(e) => handleClickRecheio("recheio", e.target.value)}
                        className="w-100 bg-dark-blue py-2 px-3 border-0 text-light seletor"
                        id="tamanho" name="tamanho"
                        style={{
                            borderRadius: '3px',
                            outline: 'none',
                        }}>
                            <option value="brigadeiro">Brigadeiro</option>
                            <option value="beijinho">Beijinho</option>
                            <option value="brigadeiroDeNinho">Brigadeiro de ninho</option>
                            <option value="doceDeLeite" >Doce de leite</option>
                            <option value="brigadeiroDeMorango">Brigadeiro de morango</option>
                            <option value="brigadeiroDeDoceDeLeiteComCoco">Brigadeiro de doce de leite com coco</option>
                            <option value="brigadeiroBranco" >Brigadeiro branco</option>
                        </select>


                        <label className="w-100 font-w-normal mt-5">RECHEIO SUPERIOR GOURMET</label>
                        <select
                        className="w-100 bg-dark-blue py-2 px-3 border-0 text-light seletor"
                        value={recheioEscolhido} 
                        onChange={(e) => handleClickRecheio("recheio", e.target.value)}
                        id="tamanho" name="tamanho"
                        style={{
                            borderRadius: '3px',
                            outline: 'none',
                        }}>
                            <option value="brigadeirDeNutella" >Brigadeiro de nutella</option>
                            <option value="brigadeiro5LeitesComGeleiaDeMorango">Brigadeiro 5 leites com geleia de morango</option>
                            <option value="mousseTrufadoDeMaracuja">Mousse trufado de maracujá</option>
                            <option value="mousseTrufadoDeChocolate" >Mousse trufado de chocolate</option>
                            <option value="mousseTrufadoDeNinho" >Mousse trudfado de ninho</option>
                            <option value="mousseTrufadoDeChocolate" >Mousse trufado de nutella</option>
                            
                        
                        </select>


                        <label className="w-100 font-w-normal mt-5">REHCEIO SUPERIOR FRUTAS (TRADICIONAL + FRUTA) </label>
                        <select
                        className="w-100 bg-dark-blue py-2 px-3 border-0 text-light seletor mb-5"
                        value={recheioEscolhido} 
                        onChange={(e) => handleClickRecheio("recheio", e.target.value)}
                        id="tamanho" name="tamanho"
                        style={{
                            borderRadius: '3px',
                            outline: 'none',
                        }}>
                            <option value="morango">Morango</option>
                            <option value="ameixa">Ameixa</option>
                            <option value="abacaxi">Abacaxi</option>
                            
                        
                        </select>
                    </div>
                </section>

                {/* cobertura */}
                <section className="coberturas d-flex flex-wrap justify-content-center">

                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret color-subtitle text-center">MASSA BRANCA</h3>
                        <p className="font-spartan color-subtitle text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <img id="bolo-icon" src="/images/boloicon.svg" alt="ícone de bolo" />

                        <button
                        onClick={() => atualizarPedido("massa", "MASSA BRANCA")}
                        className="adicionar-cobertura-btn font-spartan">{pedido.cobertura == "MASSA BRANCA" ? "ADICIONADO" : "ADICIONAR"}</button>
                    </div>

                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret color-subtitle text-center">MASSA DE CHOCLATE</h3>
                        <p className="font-spartan color-subtitle text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <img id="bolo-icon" src="/images/boloicon.svg" alt="ícone de bolo" />

                        <button
                        onClick={() => atualizarPedido("massa", "MASSA DE CHOCOLATE")}
                        className="adicionar-cobertura-btn font-spartan">{pedido.cobertura == "MASSA DE CHOCOLATE" ? "ADICIONADO" : "ADICIONAR"}</button>
                    </div>

                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret color-subtitle text-center">COBERTURA DE CHANTININHO</h3>
                        <p className="font-spartan color-subtitle text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <img id="bolo-icon" src="/images/boloicon.svg" alt="ícone de bolo" />

                        <button 
                        onClick={() => atualizarPedido("cobertura", "COBERTURA DE CHANTININHO")}
                        className="adicionar-cobertura-btn font-spartan">{pedido.cobertura == "COBERTURA DE CHANTININHO" ? "ADICIONADO" : "ADICIONAR"}</button>
                    </div>
                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret color-subtitle text-center">COBERTURA DE GANACHE</h3>
                        <p className="font-spartan color-subtitle text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <img id="bolo-icon" src="/images/boloicon.svg" alt="ícone de bolo" />

                        <button
                        onClick={() => atualizarPedido("cobertura", "COBERTURA DE GANACHE")}
                        className="adicionar-cobertura-btn font-spartan">{pedido.cobertura == "COBERTURA DE GANACHE" ? "ADICIONADO" : "ADICIONAR"}</button>
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
                                <div onClick={() => handleClickDecoracao("decoracao", "BOLO COM MAIS DE DUAS CORES")}
                                    className={`${retornarClasseDecoracao("BOLO COM MAIS DE DUAS CORES")}`}
                                    >

                                </div>
                                <p className="m-0 font-spartan">BOLO COM MAIS DE DUAS CORES</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "GLITTER")}
                                    className={`${retornarClasseDecoracao("GLITTER")}`}>

                                </div>
                                <p className="m-0 font-spartan">GLITTER</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "AVELUDADO")}
                                    className={`${retornarClasseDecoracao("AVELUDADO")}`}>

                                </div>
                                <p className="m-0 font-spartan">AVELUDADO</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "CORANTE EM PÓ")}
                                    className={`${retornarClasseDecoracao("CORANTE EM PÓ")}`}>

                                </div>
                                <p className="m-0 font-spartan">CORANTE EM PÓ</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "TRABALHO DE BICO")}
                                    className={`${retornarClasseDecoracao("TRABALHO DE BICO")}`}
                                    >

                                </div>
                                <p className="m-0 font-spartan">TRABALHODE BICO</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "PO COLORIDO")}
                                    className={`${retornarClasseDecoracao("PO COLORIDO")}`}>

                                </div>
                                <p className="m-0 font-spartan">PÓ COLORIDO</p>
                            </li>
{/* 
                            <li>
                                <div onClick={() => setDecoracaoSelecionada("PRETO CLARO")}
                                    className={`${retornarClasseDecoracao("PRETO CLARO")}`}>

                                </div>
                                <p className="m-0 font-spartan">PRETO CLARO</p>
                            </li>

                            <li>
                                <div onClick={() => setDecoracaoSelecionada("AZUL ESCURO")}
                                    className={`${retornarClasseDecoracao("AZUL ESCURO")}`}>

                                </div>
                                <p className="m-0 font-spartan">AZUL ESCURO</p>
                            </li> */}
                        </ul>
                    </div>
                </section>

                {/* <section className="brigadeiro-superior">
                    <h2 className="font-poiret">BRIGADEIRO SUPERIOR</h2>
                    <p className="font-spartan">SERÃO CALCULADOS A PARTE DE ACORDO COM QUANTIDADE</p>
                    <div className="brigadeiro-sup-opcoes">
                        <ul>
                            <li className="font-spartan">
                                <div className="box-select"></div>
                                <p className="m-0">BRIGADEIRO</p>
                            </li>

                            <li className="font-spartan">
                                <div className="box-select"></div>
                                <p className="m-0">BICHO DE PÉ</p>
                            </li>

                            <li className="font-spartan">
                                <div className="box-select"></div>
                                <p className="m-0">BEIJINHO</p>
                            </li>

                            <li className="font-spartan">
                                <div className="box-select"></div>
                                <p className="m-0">NINHO</p>
                            </li>

                            <li className="font-spartan">
                                <div className="box-select"></div>
                                <p className="m-0">BRIGADEIRO DE CHURROS</p>
                            </li>
                        </ul>
                    </div>
                    <div className="counter">
                        <img src="/images/remover.png" alt="" />
                        <div>0</div>
                        <img src="/images/mais.png" alt="" />
                    </div>
                </section> */}

                <section className="resultado">
                    <h2 className="font-poiret">RESULTADO</h2>

                    {pedido.formato && <div className="item-carrinho">
                        <p className="font-spartan m-0">FORMATO</p>
                        <p className="font-spartan m-0">{pedido.formato}</p>
                    </div>}

                    {pedido.tamanho && <div className="item-carrinho">
                        <p className="font-spartan m-0">TAMANHO</p>
                        <p className="font-spartan m-0">{pedido.tamanho}</p>
                    </div>}

                    {pedido.recheio && <div className="item-carrinho">
                        <p className="font-spartan m-0">RECHEIO</p>
                        <p className="font-spartan m-0">{pedido.recheio}</p>
                    </div>}

                    {pedido.massa && <div className="item-carrinho">
                        <p className="font-spartan m-0">MASSA</p>
                        <p className="font-spartan m-0">{pedido.massa}</p>
                    </div>}

                    {pedido.cobertura && <div className="item-carrinho">
                        <p className="font-spartan m-0">COBERTURA</p>
                        <p className="font-spartan m-0">{pedido.cobertura}</p>
                    </div>}

                    {pedido.decoracao && <div className="item-carrinho">
                        <p className="font-spartan m-0">DECORAÇÃO</p>
                        <p className="font-spartan m-0">{pedido.decoracao}</p>
                    </div>}
                    <p className="font-spartan">Valor Aproximado: R${pedido.preco},00</p>

                    
                </section>
            </main>
        </>
    )
}

export default MonteSeuBoloMain