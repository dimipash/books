export async function getProductList() {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/data/books/`);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status }
    }
    const products = await response.json();
    const data = Object.values(products);
    return data;
}

export async function getProduct(id) {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/data/books/${id}`);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json();

    return data;
}

export async function getFeaturedList() {
    const response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/data/featured_books/`
    );
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    const products = await response.json();

    const data = Object.values(products);

    return data;
}
