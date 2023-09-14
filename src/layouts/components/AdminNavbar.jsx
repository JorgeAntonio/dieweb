import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { useAuth } from "../../context/AuthProvider.jsx";

export default function AdminNavbar() {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">LOGO</div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              {!auth && (
                <NavLink
                  to="/home"
                  className="btn btn-ghost btn-sm rounded-btn"
                  activeClassName="btn-active"
                >
                  Inicio
                </NavLink>
              )}
            </li>
            <li>
              {auth && (
                <Link to="/admin">
                  <img src={logo} alt="logo" className="w-10" />
                </Link>
              )}
            </li>
            <li>
              {auth && (
                <NavLink
                  to="/admin"
                  className="btn btn-ghost btn-sm rounded-btn"
                  activeClassName="btn-active"
                >
                  Panel
                </NavLink>
              )}
            </li>
            <li>
              {auth && (
                <NavLink
                  to="/emprendedor"
                  className="btn btn-ghost btn-sm rounded-btn"
                  activeClassName="btn-active"
                >
                  Emprendedores
                </NavLink>
              )}
            </li>
            <li>
              {auth && (
                <NavLink
                  to="/eventos"
                  className="btn btn-ghost btn-sm rounded-btn"
                  activeClassName="btn-active"
                >
                  Eventos
                </NavLink>
              )}
            </li>
            <li>
              {auth && (
                <NavLink
                  to="/blog"
                  className="btn btn-ghost btn-sm rounded-btn"
                  activeClassName="btn-active"
                >
                  Blog
                </NavLink>
              )}
            </li>
            <li>
              {auth && (
                <NavLink
                  to="/home"
                  className="btn btn-ghost btn-sm rounded-btn"
                  activeClassName="btn-active"
                >
                  Salir
                </NavLink>
              )}
            </li>
            <li>
              {!auth && (
                <NavLink
                  to="/login"
                  className="btn btn-ghost btn-sm rounded-btn"
                  activeClassName="btn-active"
                >
                  Iniciar sesión
                </NavLink>
              )}
            </li>
            <li>
              {!auth && (
                <NavLink
                  to="/register"
                  className="btn btn-ghost btn-sm rounded-btn"
                  activeClassName="btn-active"
                >
                  Registrarse
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar"
              />
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
