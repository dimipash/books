import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services";

export const DropdownLoggedIn = ({ setDropdown }) => {
    const email = JSON.parse(sessionStorage.getItem("email"));

    const navigate = useNavigate();
    function handleLogout() {
        logout();

        setDropdown(false);
        navigate("/");
    }
    return (
        <div
            
            id="dropdownAvatar"
            className="select-none outline outline-1 outline-black absolute top-10 right-0 z-10 w-44 bg-gray-100 rounded-lg divide-y divide-gray-100 shadow mr-2"
        >
            <div className="py-3 px-4 text-sm text-black">
                <div className="font-medium truncate">{email}</div>
            </div>
            <ul
                className="py-1 text-sm text-black"
                aria-labelledby="dropdownUserAvatarButton"
            >
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/products"
                        className="block py-2 px-4 hover:bg-gray-300"
                    >
                        All eBooks
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/dashboard"
                        className="block py-2 px-4 hover:bg-gray-300"
                    >
                        Dashboard
                    </Link>
                </li>
            </ul>
            <div className="py-1">
                <span
                    onClick={handleLogout}
                    className="cursor-pointer block py-2 px-4 text-sm text-black hover:bg-gray-300"
                >
                    Log out
                </span>
            </div>
        </div>
    );
};
