import { Link } from "react-router-dom";
import { deleteOrder } from "../../../services";
import { toast } from "react-toastify";
import styles from "./DashboardCard.module.css";

export const DashboardCard = ({ order, onDelete }) => {
    const deleteOrderClickHandler = async () => {
        const hasConfirmed = confirm(
            `Are you sure you want to delete this order`
        );

        if (hasConfirmed) {
            try {
                await deleteOrder(order._id);
                toast.success("Order deleted", { autoClose: 4000 });
                onDelete();
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            toast.info("Order not deleted");
        }
    };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <span>Order ID: {order._id}</span>
                    <span>Total: ${order.amount_paid}</span>
                </div>

                {order.cartList.map((product) => (
                    <div key={product.id} className={styles.cardText}>
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
                                    <p className={styles.productsList}>
                                        {product.name}
                                    </p>
                                </Link>
                                <div className={styles.productsList}>
                                    <span>$ {product.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={styles.deleteButtonWrapper}>
                    <button
                        className={styles.deleteButton}
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
