import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { toast } from "react-toastify";
import { register } from "../services";
import { Spinner } from "../components";

export const Register = () => {
    useTitle("Register");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    async function handleRegister(event) {
        event.preventDefault();
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            setIsLoading(true);
            const authDetail = {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value,
            };
            const data = await register(authDetail);
            data.accessToken
                ? navigate("/products")
                : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="flex flex-col items-center">
            {isLoading && <Spinner />}
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
                    Register
                </p>
            </section>
            <form onSubmit={handleRegister}>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-black"
                    >
                        Your email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="rounded bg-gray-50 border border-gray-300 text-black placeholder-gray-400"
                        placeholder="ivanov@abv.bg"
                        required
                        autoComplete="off"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?"
                        title="Please enter a valid email address"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-black"
                    >
                        Your password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="rounded bg-gray-50 border border-gray-300 text-black placeholder-gray-400"
                        placeholder="Fill your password"
                        required
                        minLength="6"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm font-medium text-black"
                    >
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="rounded bg-gray-50 border border-gray-300 text-black placeholder-gray-400"
                        placeholder="Confirm your password"
                        required
                        minLength="6"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Register
                </button>
            </form>
        </main>
    );
};
