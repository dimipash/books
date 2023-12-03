import { useState, useEffect } from "react";
import { useTitle } from "../../hooks/useTitle";

import { ProductCard } from "../../components";

import { getProductList } from "../../services";

export const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useTitle("All eBooks");

    useEffect(() => {
        async function fetchProducts() {
            
            const data = await getProductList();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <main>
            <section className="my-5">
                <div className="my-5 flex justify-between">
                    <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
                        All eBooks ({products.length})
                    </span>
                </div>

                <div className="flex flex-wrap justify-center lg:flex-row">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
};
