import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteOrder, editOrder } from "../../../services";
import { toast } from "react-toastify";


export const DashboardCard = ({ order, onDelete }) => {
        const deleteOrderClickHandler = async () => {
        const hasConfirmed = confirm(
            `Are you sure you want to delete this order`
        );

        if (hasConfirmed) {
            try {
                await deleteOrder(order._id);
                toast.success("Order deleted", { autoClose: 5000 });
                onDelete();
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            toast.info("Order not deleted");
        }
    };

    const editOrderClickHandler = async () => {
        setEditModal(true);
        try {
            await editOrder(order._id);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
                <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
                    <span>Order ID: {order._id}</span>
                    <span>Total: ${order.amount_paid}</span>
                </div>

                {order.cartList.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 mt-4"
                    >
                        <div className="flex">
                            <Link to={`/products/${product.id}`}>
                                <img
                                    className="w-32 rounded"
                                    src={product.poster}
                                    alt={product.name}
                                />
                            </Link>
                            <div className="">
                                <Link to={`/products/${product.id}`}>
                                    <p className="text-lg ml-2 dark:text-slate-200">
                                        {product.name}
                                    </p>
                                </Link>
                                <div className="text-lg m-2 dark:text-slate-200">
                                    <span>$ {product.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="text-right my-5">
                    <Link
                        to={`/orders/${order._id}`}
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700"
                        type="button"
                    >
                        Edit Order <i className="ml-2 bi bi-arrow-right"></i>
                    </Link>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700"
                        type="button"
                        onClick={() => deleteOrderClickHandler(order._id)}
                    >
                        Delete Order
                    </button>
                </div>
            </div>
        </>
    );
};
