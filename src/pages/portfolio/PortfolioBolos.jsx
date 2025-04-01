import '../../styles/portfolio-bolos.css'
import Header from "../../components/Header.jsx"

function PortfolioBolos(){
    return(
        <>
            <Header/>
            <section className='titulo'>
                <h1 className="font-poiret">PORTFOLIO DE BOLOS</h1>
                <p className="font-spartan">CARDAPIO DE BOLOS PERSONALIZADOS</p>
            </section>

            <section className='imagens'>
                <img className='img-portflio-bolo' src="/images/sweet.png" alt="" />
                <img className='img-portflio-bolo grande' src="/images/brownie.jpg" alt="" />
                <img className='img-portflio-bolo' src="/images/brownie.jpg" alt="" />
                <img className='img-portflio-bolo' src="/images/morango.png" alt="" />
                <img className='img-portflio-bolo' src="/images/cupcake.png" alt="" />
                <img className='img-portflio-bolo largo' src="/images/morango.png" alt="" />
                <img className='img-portflio-bolo' src="/images/sweet.png" alt="" />
                <img className='img-portflio-bolo' src="/images/morango.png" alt="" />
            </section>
                
        </>
    )
}

export default PortfolioBolos