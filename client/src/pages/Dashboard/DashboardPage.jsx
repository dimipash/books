import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services";
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
        <main>
            <section>
                <p className="section-title dark:text-slate-100 underline underline-offset-8">
                    My Dashboard
                </p>
            </section>

            <section className="dashboard-card-list">
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

            <section className="dashboard-empty">
                {!orders.length && <DashboardEmpty />}
            </section>
        </main>
    );
};
