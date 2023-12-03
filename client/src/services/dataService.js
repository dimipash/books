function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const id = JSON.parse(sessionStorage.getItem("id"));
    const email = JSON.parse(sessionStorage.getItem("email"));
    return { token, id, email };
}

export async function getUserOrders() {
    const { token, id, email } = getSession();
    const response = await fetch(`http://localhost:3030/data/orders`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const userOrders = await response.json();
    const data = userOrders.filter((order) => order._ownerId === id);

    return data;
}

export async function createOrder(cartList, total) {
    const { token, id, email } = getSession();

    const order = {
        cartList: cartList,
        amount_paid: total,
        quantiy: cartList.length,
        user: {
            email: email,
            id: id,
        },
    };

    const response = await fetch("http://localhost:3030/data/orders", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify(order),
    });

    const data = await response.json();
    return data;
}
