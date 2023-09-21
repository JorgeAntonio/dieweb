import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const LogoutMenu = () => {
  const { signOut } = useAuth();

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.iconify.design/ic:round-account-circle.svg" />
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
          <NavLink to="/" onClick={signOut}>
            Cerrar sesión
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
