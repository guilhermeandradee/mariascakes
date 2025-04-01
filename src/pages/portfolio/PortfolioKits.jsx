import '../../styles/portfolio-bolos.css'
import Header from "../../components/Header.jsx"
import HamMenu from '../../components/HamMenu.jsx'
function PortfolioKits(){
    return(
        <>
            <Header/>
            <section className='titulo'>
                <h1 className="font-poiret color-subtitle">Portfolio de Kits</h1>
                <p className="font-spartan color-subtitle">Kits Personalizados</p>
            </section>

            <HamMenu/>

            <section className='imagens'>
                <img className='img-portflio-bolo' src="/images/sweet.png" alt="" />
                <img className='img-portflio-bolo grande' src="/images/brownie.jpg" alt="" />
                <img className='img-portflio-bolo' src="/images/brownie.jpg" alt="" />
                <img className='img-portflio-bolo' src="/images/morango.png" alt="" />
                <img className='img-portflio-bolo' src="/images/cupcake.png" alt="" />
                <img className='img-portflio-bolo ' src="/images/morango.png" alt="" />
                <img className='img-portflio-bolo' src="/images/sweet.png" alt="" />
                <img className='img-portflio-bolo' src="/images/morango.png" alt="" />
            </section>
                
        </>
    )
}

export default PortfolioKits