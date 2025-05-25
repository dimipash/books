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
                        className="block mb-2 text-sm font-medium text-black"
                    >
                        Your email
                    </label>
                    <input
                        ref={email}
                        type="email"
                        id="email"
                        className="rounded bg-gray-50 border border-gray-300 text-black placeholder-gray-400"
                        placeholder="ivanov@abv.bg"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-black"
                    >
                        Your password
                    </label>
                    <input
                        ref={password}
                        type="password"
                        id="password"
                        className="rounded bg-gray-50 border border-gray-300 text-black placeholder-gray-400"
                        required
                        placeholder="•••••••••"
                        autoComplete="current-password"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Log In
                    </button>
                </div>
            </form>
            <p className="mt-8">Don't have an account? Register</p>
            <Link
                onClick={() => setDropdown(false)}
                to="/register"
                className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Register
            </Link>
        </main>
    );
};
