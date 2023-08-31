import {OutlinedInput} from "@mui/material";

const SigInPage = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Inicia sesión ahora</h1>
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

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        ¿Has olvidado tu contraseña?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Iniciar sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigInPage;
