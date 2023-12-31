import { Link } from "react-router-dom";

export const OrderSuccess = ({ data }) => {
    return (
        <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 border rounded-lg">
            <div className="my-5">
                <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
                <p>Thank you {data.user.name} for the order!</p>
                <p>Your Order ID: {data._id}</p>
            </div>
            <div className="my-5">
                <p>Your order is confirmed.</p>
                <p>Please check your mail ({data.user.email}) for the eBook.</p>
                <p>
                    If you have any questions, please email us at{" "}
                    <span className="">ebooks@example.com</span>
                </p>
            </div>
            <Link
                to="/"
                type="button"
                className="text-white bg-blue-700 hover:bg-green-800 rounded-lg text-lg px-5 py-2.5 mt-4 mr-2 mb-2 focus:outline-none"
            >
                Continue Shopping <i className="ml-2 bi bi-cart"></i>
            </Link>
        </section>
    );
};
