import { useEffect, useState } from "react"
import '../../styles/cobertura.css'
import '../../styles/add-decoracao.css'
import '../../styles/recheios.css'
import '../../styles/resultado.css'
import '../../styles/brigadeiro-superior.css'
import '../../styles/tamanho-do-bolo.css'
import { GoCheck } from "react-icons/go";
import { LuCakeSlice } from "react-icons/lu";
import { TbCakeRoll } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";


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
    doceDeLeite: "tradicional",
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
    console.log(recheioEscolhido)

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
        return pedido.decoracao.includes(decoracao) && "decoracao-selecionada"
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
        decoracao: [],
        preco: 0
    });

    function atualizarPedido(campo, valor) {
        setPedido(prev => {
            const novoPedido = { ...prev };

        if (campo === "decoracao") {
            // Garante que `decoracao` seja sempre um array
            if (!Array.isArray(novoPedido.decoracao)) {
                novoPedido.decoracao = [];
            }

            // Adiciona ou remove a decoração
            if (novoPedido.decoracao.includes(valor)) {
                novoPedido.decoracao = novoPedido.decoracao.filter(item => item !== valor);
            } else {
                novoPedido.decoracao = [...novoPedido.decoracao, valor];
            }
        } else {
            // Atualiza normalmente os outros campos
            novoPedido[campo] = valor;
        }

            // Verifica se tamanho e recheio foram escolhidos para calcular o preço
            if (novoPedido.tamanho && novoPedido.recheio) {
                const categoria = categoriasRecheio[novoPedido.recheio]; // Pegamos a categoria do recheio
                novoPedido.preco = precos[categoria]?.[novoPedido.tamanho] || 0;
            }

            return novoPedido;
        });
    }

    console.log(pedido)

    function returnOkRecheio(recheio){
        return categoriasRecheio[recheioEscolhido] === recheio && <GoCheck className="ms-2 color-dark-blue" />
    }

    function returnOk(campo, valor){
        if(campo === pedido.decoracao){
            return pedido.decoracao.includes(valor) && <FaCheck  />
        } else {
            return campo === valor && <FaCheck className="ms-2" />
        }
    }

    console.log(categoriasRecheio[recheioEscolhido])


    function returnMINISize(){
        const categoria = categoriasRecheio[pedido.recheio];
        if(pedido.formato === "REDONDO" && categoria == "tradicional" || !categoria ){
            return(
                <><div
                    onClick={() => handleClickTamanho("MINI", "tamanho", "MINI")}
                    className={`bg-cinza d-flex justify-content-center align-items-center rounded quadrado-selecionavel  mx-sm-4 mx-md-3 mx-2 mt-5 ${retornarClasseTamanhoDoBolo("MINI")}`}>
                        MINI
                </div>

                <div className="align-items-center d-flex flex-column col-11 mt-3 legend">
                <p className="m-0 font-spartan">Fatias: 10</p>
                </div></>
            )
        }
    }

    function exibirTexto(texto) {
        return texto.replace(/_/g, " ").replace(/,/g, ", ");
    }

    function enviarPedidoWhatsApp() {
        const clienteNumero = "5511961957783"; 
    
        // Monta a mensagem
        const mensagem = `Olá, gostaria de fazer um pedido com as seguintes características:\n\n` +
            `🍰 *Formato:* ${pedido.formato}\n` +
            `🎂 *Recheio:* ${pedido.recheio}\n` +
            `📏 *Tamanho:* ${pedido.tamanho}\n` +
            `🍞 *Massa:* ${pedido.massa}\n` +
            `🍫 *Cobertura:* ${pedido.cobertura}\n` +
            `✨ *Decoração:* ${pedido.decoracao.join(", ")}`;
    
        // Codifica a mensagem para a URL do WhatsApp
        const mensagemCodificada = encodeURIComponent(mensagem);
    
        // Monta o link do WhatsApp
        const linkWhatsApp = `https://wa.me/${clienteNumero}?text=${mensagemCodificada}`;
    
        // Redireciona para o WhatsApp
        window.open(linkWhatsApp, "_blank");
    }


    return(
        <>
            <main className="">
                {/* primeira sessão */}
                <div className="d-flex flex-column justify-content-center align-items-center mt-5 px-2">
                    <h2 className="font-poiret text-center col-sm-8 col-12 color-dark-blue">Crie seu bolo do jeito que quiser e veja uma estimativa de preço!</h2>

                    <p className="font-spartan color-dark-blue mt-5 com-sm-12 col-10 text-center">Quer algo exclusivo fora do <a href="">cardápio</a>? Chama a gente no <a href="">WhatsApp</a> e vamos criar juntos!</p>

                    {/* <img className="img-fluid mt-3 mt-sm-5" src="/images/arrow.png" alt="imagem de seta apontando para baixo" style={{maxWidth: '5%'}} /> */}
                    <LuCakeSlice className="img-fluid mt-3 mt-sm-5 color-dark-blue" style={{width: 'clamp(30px, 2vw, 3vw)'}}/>
                </div>

                {/* seleção de bolo */}
                <section className="row m-0 mt-5">
                    <div className="bg-success col-12 col-md-6 d-flex flex-column align-items-center justify-content-between monte-seu-bolo-imagens p-4 py-5 font-spartan text-light"
                    style={{
                        backgroundImage: 'url(/images/cup.jpg)',
                        backgroundSize: 'cover',
                        backgroundPositionY: 'center',
                    }}>
                        <h3 className="font-poiret text-center font-w-normal mt-4 color-subtitle">BOLO REDONDO</h3>

                        <button onClick={() => atualizarPedido("formato", "REDONDO")} className="formato-btn mt-5 col-6 col-md-5 m-0 rounded"><p className="m-0 p-2 font-spartan text-light font-w-normal ">{pedido.formato == "REDONDO" ? "ESCOLHIDO" : "ESCOLHER"}{returnOk(pedido.formato, "REDONDO")}</p></button>
                    </div>

                    <div className="bg-success col-12 col-md-6 d-flex flex-column align-items-center justify-content-between monte-seu-bolo-imagens p-4 py-5 font-spartan text-light"
                    style={{
                        backgroundImage: 'url(/images/cup2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPositionY: 'center',
                    }}>
                        <h3 className="font-poiret text-center font-w-normal mt-4 color-subtitle">BOLO RETANGULAR</h3>

                        <button onClick={() => atualizarPedido("formato", "RETANGULAR")} className="formato-btn mt-5 col-6 col-md-5 m-0 rounded "><p className="m-0 p-2 font-spartan text-light font-w-normal ">{pedido.formato == "RETANGULAR" ? `ESCOLHIDO` : "ESCOLHER"}{returnOk(pedido.formato, "RETANGULAR")}</p></button>
                    </div>

                </section>

                
                {/* recheio */}
                <section className="bg-light-blue pt-5 px-4 d-flex flex-column align-items-center pb-5 recheios" >
                    <h2 className="text-center font-poiret color-dark-blue"
                    >Recheios</h2>
                    <p className="font-spartan color-dark-blue">Escolha um recheio</p>
                    <p className="font-spartan color-dark-blue">Somente recheios tradicionais tem o tamanho mini*</p>

                    <div className="d-flex flex-column col-12 col-md-6 align-items-center font-spartan mt-5">

                        <div className="w-100 font-w-normal d-flex align-items-center">
                            <label className="">TRADICIONAL </label>
                            {returnOkRecheio('tradicional')}
                            
                        </div>
                        <select 
                        value={recheioEscolhido} 
                        onChange={(e) => handleClickRecheio("recheio", e.target.value)}
                        className="w-100 bg-dark-blue py-2 px-3 border-0 text-light seletor mb-5"
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
                            <option value="brigadeiroDoceDeLeiteComCoco">Brigadeiro de doce de leite com coco</option>
                            <option value="brigadeiroBranco" >Brigadeiro branco</option>
                        </select>
                       


                        <div className="w-100 font-w-normal d-flex align-items-center">
                            <label className="">Recheio Superior Gourmet</label>
                            {returnOkRecheio('superiorgourmet')}
                        </div>
                        <select
                        className="w-100 bg-dark-blue py-2 px-3 border-0 text-light seletor mb-5"
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


                        <div className="w-100 font-w-normal d-flex align-items-center">
                            <label className="">Recheio Tradicinal + Frutas</label>
                            {returnOkRecheio('tradicionalfrutas')}
                        </div>
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

                {/* tamanho do bolo */}
                <section className="px-0 px-sm-3 py-5 bg-light-pink">
                    <h2 className="font-poiret text-center mt-5 color-subtitle">Tamanho</h2>
                    <p className="font-spartan color-subtitle text-center">Fatias Aproximadas</p>

                    <div className="d-flex m-0 justify-content-center flex-wrap ">

                        <div className="w-100 d-flex justify-content-center flex-wrap ">
                            <div className="d-flex flex-column align-items-center">

                                {/* card tamanho do bolo */}
                                

                                {returnMINISize()}

                                {/* info */}
                                
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

                {/* cobertura */}
                <section className="coberturas d-flex flex-wrap justify-content-center">

                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret color-subtitle text-center">MASSA BRANCA</h3>
                        <p className="font-spartan color-subtitle text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <LuCakeSlice id="bolo-icon" />

                        <button
                        onClick={() => atualizarPedido("massa", "MASSA BRANCA")}
                        className="adicionar-cobertura-btn font-spartan">{pedido.massa == "MASSA BRANCA" ? "ADICIONADO" : "ADICIONAR"}{returnOk(pedido.massa, "MASSA BRANCA")} </button>
                    </div>

                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret color-subtitle text-center">MASSA DE CHOCLATE</h3>
                        <p className="font-spartan color-subtitle text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <LuCakeSlice id="bolo-icon" />

                        <button
                        onClick={() => atualizarPedido("massa", "MASSA DE CHOCOLATE")}
                        className="adicionar-cobertura-btn font-spartan">{pedido.massa == "MASSA DE CHOCOLATE" ? "ADICIONADO" : "ADICIONAR"}{returnOk(pedido.massa, "MASSA DE CHOCOLATE")}</button>
                    </div>

                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret color-subtitle text-center">COBERTURA DE CHANTININHO</h3>
                        <p className="font-spartan color-subtitle text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <TbCakeRoll id="bolo-icon" />

                        <button 
                        onClick={() => atualizarPedido("cobertura", "COBERTURA DE CHANTININHO")}
                        className="adicionar-cobertura-btn font-spartan">{pedido.cobertura == "COBERTURA DE CHANTININHO" ? "ADICIONADO" : "ADICIONAR"}{returnOk(pedido.cobertura, "COBERTURA DE CHANTININHO")}</button>
                    </div>
                    <div className="imagem-da-cobertura menu-active
                    d-flex flex-column align-items-center
                    " 
                    >
                        <h3 className="font-poiret color-subtitle text-center">COBERTURA DE GANACHE</h3>
                        <p className="font-spartan color-subtitle text-center">Deliciosa cobertura usando creme de leite ao leite e chocolate ao late</p>

                        <TbCakeRoll id="bolo-icon" />

                        <button
                        onClick={() => atualizarPedido("cobertura", "COBERTURA DE GANACHE")}
                        className="adicionar-cobertura-btn font-spartan">{pedido.cobertura == "COBERTURA DE GANACHE" ? "ADICIONADO" : "ADICIONAR"}{returnOk(pedido.cobertura, "COBERTURA DE GANACHE")}</button>
                    </div>
                </section>

                <section className="add-decoracao w-100 py-5">
                    <div className="separa-decoracao-esquerda">
                        <h2 className="font-poiret color-subtitle">ADICIONE UMA DECORAÇÃO</h2>

                        <p className="font-spartan color-subtitle">OS VALORES DAS DECORAÇÕES DEVERÃO SER CONSULTADOS ENTRANDO EM CONTATO CONOSCO ATRAVÉS DO <a href="">WHATSAPP</a></p>
                    </div>

                    <div className="separa-decoracao-direita">
                        <ul>
                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "BOLO COM MAIS DE DUAS CORES")}
                                    className={`${retornarClasseDecoracao("BOLO COM MAIS DE DUAS CORES")} d-flex justify-content-center align-items-center`}
                                    >
                                    {returnOk(pedido.decoracao, "BOLO COM MAIS DE DUAS CORES")}  
                                </div>
                                <p className="m-0 font-spartan ">BOLO COM MAIS DE DUAS CORES</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "GLITTER")}
                                    className={`${retornarClasseDecoracao("GLITTER")} d-flex justify-content-center align-items-center`}>
                                    {returnOk(pedido.decoracao, "GLITTER")}  
                                </div>
                                <p className="m-0 font-spartan ">GLITTER</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "AVELUDADO")}
                                    className={`${retornarClasseDecoracao("AVELUDADO")} d-flex justify-content-center align-items-center`}>
                                    {returnOk(pedido.decoracao, "AVELUDADO")}  
                                </div>
                                <p className="m-0 font-spartan ">AVELUDADO</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "CORANTE EM PÓ")}
                                    className={`${retornarClasseDecoracao("CORANTE EM PÓ")} d-flex justify-content-center align-items-center`}>
                                    {returnOk(pedido.decoracao, "CORANTE EM PÓ")}  
                                </div>
                                <p className="m-0 font-spartan ">CORANTE EM PÓ</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "TRABALHO DE BICO")}
                                    className={`${retornarClasseDecoracao("TRABALHO DE BICO")} d-flex justify-content-center align-items-center`}>
                                      {returnOk(pedido.decoracao, "TRABALHO DE BICO")}  
                                </div>
                                <p className="m-0 font-spartan ">TRABALHODE BICO</p>
                            </li>

                            <li>
                                <div onClick={() => handleClickDecoracao("decoracao", "PO COLORIDO")}
                                    className={`${retornarClasseDecoracao("PO COLORIDO")} d-flex justify-content-center align-items-center`}>
                                    {returnOk(pedido.decoracao, "PO COLORIDO")}  
                                </div>
                                <p className="m-0 font-spartan ">PÓ COLORIDO</p>
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
                        <p className="font-spartan m-0">{pedido.recheio.toUpperCase()}</p>
                    </div>}


                    {pedido.massa && <div className="item-carrinho">
                        <p className="font-spartan m-0">MASSA</p>
                        <p className="font-spartan m-0">{pedido.massa}</p>
                    </div>}

                    {pedido.cobertura && <div className="item-carrinho">
                        <p className="font-spartan m-0">COBERTURA</p>
                        <p className="font-spartan m-0">{pedido.cobertura}</p>
                    </div>}

                    {pedido.decoracao && pedido.decoracao.length > 0 && 
                    <div className="item-carrinho">
                        <p className="font-spartan m-0">DECORAÇÃO</p>
                        <p className="font-spartan m-0">{exibirTexto(`${pedido.decoracao}`)}</p>
                    </div>}

                    <p className="font-spartan">Valor Aproximado: R${pedido.preco},00</p>

                    <div className="fale-conosco">
                    <h3 className="font-spartan" style={{fontSize: 'clamp(12px, 1vw, 22px)'}}>FALE CONOSCO E ENCOMENDE O SEU PEDIDO</h3>
                    <button onClick={enviarPedidoWhatsApp} className="font-spartan" style={{fontSize: 'clamp(12px, 1vw, 22px)'}}>ENTRE EM CONTATO</button>
                </div>
                </section>

                
            </main>
        </>
    )
}

export default MonteSeuBoloMain