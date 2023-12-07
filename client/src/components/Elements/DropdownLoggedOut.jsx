import { Link } from "react-router-dom";

export const DropdownLoggedOut = ({ setDropdown }) => {
    return (
        <div
            id="dropdownAvatar"
            className="select-none outline outline-1 outline-black absolute top-10 right-0 z-10 w-44 bg-white rounded-lg divide-y divide-gray-100 shadow mr-2"
        >
            <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
            >
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/products"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        All eBooks
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/login"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setDropdown(false)}
                        to="/register"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Register
                    </Link>
                </li>
            </ul>
        </div>
    );
};
