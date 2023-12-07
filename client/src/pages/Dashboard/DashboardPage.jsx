import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";
import styles from "./DashboardPage.module.css";

import { toast } from "react-toastify";

export const DashboardPage = () => {
    const [orders, setOrders] = useState([]);
    function updateOrders(updatedOrders) {
        setOrders(updatedOrders);
    }
    useTitle("Dashboard");

    useEffect(() => {
        async function fetchOrders() {
            try {
                const data = await getUserOrders();
                setOrders(data);
            } catch (error) {
                toast.error(error.message);
            }
        }
        fetchOrders();
    }, []);

    return (
        <main className={styles.main}>
            <section>
                <h1 className={styles.sectionTitle}>My Dashboard</h1>
            </section>

            <section className={styles.cardList}>
                {orders &&
                    orders.map((order) => (
                        <DashboardCard
                            key={order._id}
                            order={order}
                            onDelete={() =>
                                updateOrders(
                                    orders.filter((o) => o._id !== order._id)
                                )
                            }
                        />
                    ))}
            </section>

            <section>
                {!orders.length && <DashboardEmpty />}
            </section>
        </main>
    );
};
