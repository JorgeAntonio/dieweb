import { NavLink } from "react-router-dom";
import { LogoutMenu } from "../../components/auth/LogoutMenu";
import { useAuth } from "../../context/AuthProvider";

export default function ClientNavbar() {
  const { auth } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-sm fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to={"/servicios"}>Programas</NavLink>
            </li>
            <li>
              <NavLink to="/publicaciones">Blog</NavLink>
            </li>
            <li>
              {auth && (
                <NavLink to="/" className={"btn btn-primary btn-sm"}>
                  Panel
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">
          DIE UNAP
        </NavLink>
      </div>
      <div className="navbar-end">
        <ul className="menu md:menu-horizontal px-1 hidden">
          <li>
            <NavLink to="/" className={""}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to={"/servicios"} className={""}>
              Programas
            </NavLink>
          </li>
          <li>
            <NavLink to="/publicaciones" className={""}>
              Blog
            </NavLink>
          </li>
        </ul>
        {auth && <NavLink to="/admin">Panel</NavLink>}
        {auth && <LogoutMenu />}
      </div>
    </div>
  );
}
