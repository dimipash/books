import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";
import { login } from "../services";
import { Link } from "react-router-dom";

export const Login = () => {
    useTitle("Login");
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const authDetail = {
                email: email.current.value,
                password: password.current.value,
            };
            const data = await login(authDetail);
            data.accessToken
                ? navigate("/products")
                : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <main className="flex flex-col items-center">
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
                    Login
                </p>
            </section>
            <form onSubmit={handleLogin}>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your email
                    </label>
                    <input
                        ref={email}
                        type="email"
                        id="email"
                        className="rounded bg-gray-50 border border-gray-300 text-gray-900 text-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                        placeholder="ivanov@abv.bg"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your password
                    </label>
                    <input
                        ref={password}
                        type="password"
                        id="password"
                        className="rounded bg-gray-50 border border-gray-300 text-gray-900 text-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                        required
                        autoComplete="current-password"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Log In
                </button>
            </form>
            {/* <button className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button> */}
            <p className="mt-7">Don't have an account? Register</p>
            <Link
                onClick={() => setDropdown(false)}
                to="/register"
                className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register
            </Link>
        </main>
    );
};
