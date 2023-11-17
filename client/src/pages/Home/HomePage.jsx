import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";

export const HomePage = () => {
    return (
        <main>
            <Hero /> <br />
            <FeaturedProducts /> <br />
            <Testimonials /> <br />
            <FAQ /> <br />
        </main>
    );
};
