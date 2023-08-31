import {OutlinedInput} from "@mui/material";
import background from "../../assets/images/stem-list.jpg";

const SigInPage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body w-[350px]">
                            <h1 className="text-3xl font-bold">Inicia sesión</h1>
                            <p className="mb-3">Ingresa tus datos para iniciar sesión.</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Correo</span>
                                </label>
                                <OutlinedInput type="email" placeholder="email@email.com"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
                                </label>
                                <OutlinedInput type="password" placeholder="********"/>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Iniciar sesión</button>
                            </div>
                            <a href="#" className="label-text-alt link link-hover pt-4 text-center">
                                ¿Has olvidado tu contraseña?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigInPage;
