import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import {UserAuth} from "../../context/AuthContext.jsx";

export default function AdminNavbar() {
    const {logout, user} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/", {replace: true});
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to=" " className="">
                    <img src={logo} alt="logo" className="w-32"/>
                </Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a onClick={handleLogout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
