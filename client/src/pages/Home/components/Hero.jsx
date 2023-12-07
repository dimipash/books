import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center mb-10">
            <div className="text my-5">
                <h1 className="text-5xl font-bold">E-Book Store</h1>
                <p className="text-2xl my-7 px-1 dark:text-slate-300">
                    Welcome to a new chapter of discovery – where stories come
                    to life in the digital realm. Explore the world of limitless
                    possibilities through the pages of our digital books.
                </p>
                <Link
                    to="/products"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Explore eBooks
                </Link>
            </div>
            <div className="visual my-5 lg:max-w-xl">
                <img
                    className="rounded-lg max-h-full"
                    src="https://images.unsplash.com/photo-1623276527153-fa38c1616b05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="EBook Hero Section"
                />
            </div>
        </section>
    );
};
