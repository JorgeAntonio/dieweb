import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-transparent">
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
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="">Servicios</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="">Eventos</a>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <NavLink to={"signin"}>Iniciar sesión</NavLink>
            </li>
            <li>
              <NavLink to={"signup"}>Comenzar</NavLink>
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
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="">Eventos</a>
          </li>
          <li>
            <a>Nosotros</a>
          </li>
          <li>
            <NavLink to={"signin"}>Iniciar sesión</NavLink>
          </li>
        </ul>
        <a className="btn btn-primary btn-sm">Comenzar</a>
      </div>
    </div>
  );
}
