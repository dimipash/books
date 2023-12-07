import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { FAQ } from "./components/FAQ";

export const HomePage = () => {
    useTitle("Access eBooks");
    return (
        <main>
            <Hero /> 
            <FeaturedProducts />         
            <FAQ /> 
        </main>
    );
};
