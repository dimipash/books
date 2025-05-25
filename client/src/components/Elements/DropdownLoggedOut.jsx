import { Link } from "react-router-dom";

export const DropdownLoggedOut = ({ setDropdown }) => {
    return (
        <div
            id="dropdownAvatar"
            className="select-none outline outline-1 outline-black absolute top-10 right-2 z-10 w-44 bg-gray-100 rounded-lg divide-y divide-gray-100 shadow"
        >
            <ul
                className="py-1 text-sm text-gray-700"
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
                        to="/login"
                        className="block py-2 px-4 hover:bg-gray-300"
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/register"
                        className="block py-2 px-4 hover:bg-gray-300"
                    >
                        Register
                    </Link>
                </li>
            </ul>
        </div>
    );
};
