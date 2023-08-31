import {OutlinedInput} from "@mui/material";
import background from "../../assets/images/stem-list.webp";

const SigUpPage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body w-[350px]">
                            <h1 className="text-3xl font-bold">Registrate</h1>
                            <p className="mb-3">Ingresa tus datos para continuar.</p>
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
                                <button className="btn btn-primary">Continuar</button>
                            </div>
                            <a href="#" className="label-text-alt link link-hover pt-4 text-center">
                                ¿Ya tienes una cuenta?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigUpPage;
