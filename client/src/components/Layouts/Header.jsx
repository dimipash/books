import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ebook.svg";
import { DropdownLoggedOut, DropdownLoggedIn } from "../index";

export const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img src={Logo} className="h-8" alt="Books Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Books
                        </span>
                    </Link>
                    <div className="flex items-center">
                        <Link
                            to="/cart"
                            className="text-gray-700 dark:text-white mr-5"
                        >
                            <span className="text-2xl bi bi-cart-fill relative">
                                <span className="text-black text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">
                                    0
                                </span>
                            </span>
                        </Link>
                        <span
                            onClick={() => setDropdown(!dropdown)}
                            className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"
                        ></span>
                    </div>
                </div>
            </nav>
            {dropdown && <DropdownLoggedOut />}
        </header>
    );
};
