import Header from "../components/Header.jsx"

import '../styles/cardapio-doces-pers.css'
import '../styles/kits-prontos.css'
import '../styles/doces-info.css'
import '../styles/valor-unitario.css'
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

const kits = {
    '1': 'Sweet Home: 12 bombons, 5 popsicles, 3 pães de mel',
    '2': 'Amargo Home: 0 bombons, 0 popsicles, 0 pães de mel',
    '3': 'Combo brigadeiro: 12 brigadeiros, 5 pães de mel, 2 brigadeiros',
    '4': 'Combo pirulito: 12 pirulitos, 4 pães de mal'
}

function CardapioDocesPersonalizados(){

    const [kitAberto, setKitAberto] = useState(null)
    function mudarKit(num){
        if(kitAberto === num){
            setKitAberto(null)
        } else {
            setKitAberto(num)
        }

    }

    function enviarKit() {
        const clienteNumero = "5511961957783"; 
    
        // Monta a mensagem
        const mensagem = `Olá, gostaria de fazer um pedido com as seguintes características:\n\n` +
            `✨ *Kit:* ${kits[kitAberto]}`;
    
        // Codifica a mensagem para a URL do WhatsApp
        const mensagemCodificada = encodeURIComponent(mensagem);
    
        // Monta o link do WhatsApp
        const linkWhatsApp = `https://wa.me/${clienteNumero}?text=${mensagemCodificada}`;

        if(kits[kitAberto] === undefined){
            alert('Escolha um kit')
        } else {
            window.open(linkWhatsApp, "_blank");
        }
    }

    return(
        <>
            <Header/>

            <main>
                <section className="titulo">
                    <h2 className="font-poiret color-subtitle">Cardápio de Doces Personalizados</h2>
                    <div></div>

                    <p className="font-spartan color-subtitle">DOCES 3D QUE POSSUEM PÓ DOURADO, CINTILANTE OU AQUARELADO, DEVEM SER CONSULTADOS ENTRANDO EM CONTATO</p>

                    <p className="font-spartan color-subtitle">VOCÊ PODE ESCOLHER UM KIT PRONTO OU MONTAR O SEU PRÓPRIO KIT ENVIANDO <a href="">CADA ITEM</a> NO NOSSO <a href="">WHATSAPP</a></p>
                </section>

                <section className="kits-prontos">
                    <h2 className="font-poiret color-subtitle">Kits Prontos</h2>
                    <p className="color-subtitle">Selecione um kit</p>

                    <div className="kit1" onClick={() => mudarKit("1")}>
                        <div className='kit' >
                            <p className="font-spartan m-0">KIT SWEET HOME</p>
                            <p className="font-spartan m-0">12 DOCES</p>
                            <p className="font-spartan m-0">R$188</p>
                            {kitAberto == "1" ?  <FaCheck className="text-light"/> : <IoIosArrowDown className="text-light"/>}
                        </div>
                        <div className={`divisao ${kitAberto == "1" ? 'd-flex' : 'd-none'}`}>

                        </div>
                        <div className={`abrir-kit ${kitAberto == "1" ? 'd-flex' : 'd-none'}`}>
                            <p className="font-spartan">5 bombons</p>
                            <p className="font-spartan">3 popsicles</p>
                            <p className="font-spartan">4 pães de mel</p>
                            <p className="font-spartan">4 brigadeiros</p>
                        </div>  
                    </div>

                    <div className="kit1" onClick={() => mudarKit("2")}>
                        <div className='kit' >
                            <p className="font-spartan m-0">KIT SWEET HOME</p>
                            <p className="font-spartan m-0">12 DOCES</p>
                            <p className="font-spartan m-0">R$188</p>
                            {kitAberto == "2" ?  <FaCheck className="text-light"/> : <IoIosArrowDown className="text-light"/>}
                        </div>
                        <div className={`divisao ${kitAberto == "2" ? 'd-flex' : 'd-none'}`}>

                        </div>
                        <div className={`abrir-kit ${kitAberto == "2" ? 'd-flex' : 'd-none'}`}>
                            <p className="font-spartan">5 bombons</p>
                            <p className="font-spartan">3 popsicles</p>
                            <p className="font-spartan">4 pães de mel</p>
                            <p className="font-spartan">4 brigadeiros</p>
                        </div>  
                    </div>

                    <div className="kit1" onClick={() => mudarKit("3")}>
                        <div className='kit' >
                            <p className="font-spartan m-0">KIT SWEET HOME</p>
                            <p className="font-spartan m-0">12 DOCES</p>
                            <p className="font-spartan m-0">R$188</p>
                            {kitAberto == "3" ?  <FaCheck className="text-light"/> : <IoIosArrowDown className="text-light"/>}
                        </div>
                        <div className={`divisao ${kitAberto == "3" ? 'd-flex' : 'd-none'}`}>

                        </div>
                        <div className={`abrir-kit ${kitAberto == "3" ? 'd-flex' : 'd-none'}`}>
                            <p className="font-spartan">5 bombons</p>
                            <p className="font-spartan">3 popsicles</p>
                            <p className="font-spartan">4 pães de mel</p>
                            <p className="font-spartan">4 brigadeiros</p>
                        </div>  
                    </div>

                    <div className="kit1" onClick={() => mudarKit("4")}>
                        <div className='kit' >
                            <p className="font-spartan m-0">KIT SWEET HOME</p>
                            <p className="font-spartan m-0">12 DOCES</p>
                            <p className="font-spartan m-0">R$188</p>
                            {kitAberto == "4" ?  <FaCheck className="text-light"/> : <IoIosArrowDown className="text-light"/>}
                        </div>
                        <div className={`divisao ${kitAberto == "4" ? 'd-flex' : 'd-none'}`}>

                        </div>
                        <div className={`abrir-kit ${kitAberto == "4" ? 'd-flex' : 'd-none'}`}>
                            <p className="font-spartan">5 bombons</p>
                            <p className="font-spartan">3 popsicles</p>
                            <p className="font-spartan">4 pães de mel</p>
                            <p className="font-spartan">4 brigadeiros</p>
                        </div>  
                    </div>
                </section>

                <section className="doces-info">
                    <h2 className="font-poiret mt-0">Pão de Mel Casinha</h2>

                    <div className="doces-info-foto">
                        <img src="/images/morango.png" alt="" />
                        <img src="/images/sweet.png" alt="" />
                    </div>

                    <h2 className="font-poiret">Popsicle vaca</h2>

                    <div className="doces-info-foto">
                        <img src="/images/sweet.png" alt="" />
                        <img src="/images/morango.png" alt="" />
                    </div>

                    <h2 className="font-poiret">PÃO DE MEL DE CASINHA</h2>

                    <div className="doces-info-foto">
                        <img src="/images/sweet.png" alt="" />
                        <img src="/images/morango.png" alt="" />
                    </div>

                    <h2 className="font-poiret">PÃO DE MEL DE CASINHA</h2>

                    <div className="doces-info-foto">
                        <img src="/images/sweet.png" alt="" />
                        <img src="/images/morango.png" alt="" />
                    </div>

                    <h2 className="font-poiret">PÃO DE MEL DE CASINHA</h2>

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
                            <img src="/images/docesvaca.jpeg" alt="" />
                            <p className="font-spartan m-0 color-dark-blue">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0 color-dark-blue">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0 color-dark-blue">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0 color-dark-blue">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0 color-dark-blue">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0 color-dark-blue">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0 color-dark-blue">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0 color-dark-blue">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0 color-dark-blue">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0 color-dark-blue">R$102,00</p>
                        </div>
                        <div>
                            <img src="/images/sweet.png" alt="" />
                            <p className="font-spartan m-0 color-dark-blue">VALOR UNITÁRIO</p>
                            <p className="font-spartan m-0 color-dark-blue">R$102,00</p>
                        </div>
                    </div>

                <div className="fale-conosco">
                    <h3 className="font-spartan">FALE CONOSCO E ENCOMENDE O SEU PEDIDO</h3>
                    <button onClick={enviarKit} className="font-spartan">ENTRE EM CONTATO</button>
                </div>
                </section>

            </main>
        </>
    )
}

export default CardapioDocesPersonalizados