import { useState } from "react";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";
import { useCart } from "../../../context";

export const CartList = () => {
    const [checkout, setCheckout] = useState(false);
    const { cartList, total } = useCart();

    return (
        <>
            <section>
                <p className="text-2xl text-center font-semibold my-10 underline underline-offset-8">
                    My Cart ({cartList.length})
                </p>
            </section>

            <section>
                {cartList.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
            </section>

            <section className="max-w-4xl m-auto">
                <div className="flex flex-col p-2 border-b text-lg">
                    <p className="flex justify-between my-2">
                        <span className="font-bold">Total Amount:</span>
                        <span className="font-bold">${total}</span>
                    </p>
                </div>
                <div className="text-right my-5">
                    <button
                        onClick={() => setCheckout(true)}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-green-800 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 mt-4"
                    >
                        PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
                    </button>
                </div>
            </section>
            {checkout && <Checkout setCheckout={setCheckout} />}
        </>
    );
};
