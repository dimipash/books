export async function deleteOrder(id) {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const response = await fetch(`http://localhost:3030/data/orders/${id}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": token,
        },
    });
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    if (response.status >= 300) {
        throw {
            message: `Delete failed with status ${response.status}`,
            status: response.status,
        };
    }
}

