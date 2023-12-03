export async function getProductList() {
    const response = await fetch("http://localhost:3030/jsonstore/books/");
    const products = await response.json();
    const data = Object.values(products);
    return data;
}

export async function getProduct(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/books/${id}`);
    const data = await response.json();

    return data;
}

export async function getFeaturedList() {
    const response = await fetch(
        "http://localhost:3030/jsonstore/featured_books/"
    );
    const products = await response.json();

    const data = Object.values(products);

    return data;
}
