import background from '../../assets/images/hero.webp';
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-screen"
                 style={{backgroundImage: `url(${background})`}}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-white">
                    <div className="">
                        <h1 className="mb-5 text-7xl font-bold">¡TRAZA TU FUTURO AHORA!</h1>
                        <p className="mb-5">YA ESTAS CAMINO AL EXITO, HAREMOS TUS IDEAS MAS BRILLANTES.</p>
                        <Link to={`signup`} className="btn btn-primary">Comenzar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;