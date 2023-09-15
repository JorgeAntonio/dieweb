import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { UserAuth } from "../../context/AuthContext.jsx";

export default function AdminNavbar() {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/admin/panel" className="">
          <img src={logo} alt="logo" className="w-32" />
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/admin/panel">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/admin/emprendedor">Emprendedores</NavLink>
            </li>
            <li>
              <NavLink to="/admin/eventos">Eventos</NavLink>
            </li>
            <li>
              <NavLink to="/admin/adminblog">blog</NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                target="_blank"
                className={"bg-primary text-base-100"}
              >
                Ver a Website
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Perfil</a>
            </li>
            <li>
              <a onClick={handleLogout}>Salir</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
