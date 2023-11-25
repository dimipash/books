import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

export const CartPage = () => {
    const CartListLength = 0;
    return (
        <main>
            {CartListLength ? <CartList /> : <CartEmpty />}
        </main>
    );
}