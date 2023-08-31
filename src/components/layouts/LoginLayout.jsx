import {Outlet} from "react-router-dom";

const LoginLayout = () => {
    return (
        <div className="container mx-auto">
            <Outlet />
        </div>
    )
}
export default LoginLayout;