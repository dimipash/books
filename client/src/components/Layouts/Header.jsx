import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ebook.svg";
import { DropdownLoggedOut, DropdownLoggedIn } from "../index";
import { useCart } from "../../context";

export const Header = () => {
    const { cartList } = useCart();
    const [dropdown, setDropdown] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"));

    return (
        <header>
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img src={Logo} className="h-8" alt="Books Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            Books
                        </span>
                    </Link>
                    <div className="flex items-center">
                        <Link
                            to="/cart"
                            className="text-gray-700 dark:text-white mr-5"
                        >
                            <span className="text-2xl bi bi-cart-fill relative">
                                <span className="absolute -top-1 left-2.5 text-white bg-red-500 text-sm px-1 rounded-full text-rose-500">
                                    {cartList.length}
                                </span>
                            </span>
                           
                        </Link>
                        <span
                            onClick={() => setDropdown(!dropdown)}
                            className="cursor-pointer text-xl text-gray-700 mr-5 bi bi-person-circle"
                        ></span>
                    </div>
                </div>
            </nav>
            {dropdown &&
                (token ? (
                    <DropdownLoggedIn setDropdown={setDropdown} />
                ) : (
                    <DropdownLoggedOut setDropdown={setDropdown} />
                ))}
        </header>
    );
};
