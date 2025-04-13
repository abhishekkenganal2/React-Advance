import { useDispatch, useSelector } from "react-redux";
import AccordianBody from "./AccordianBody";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="font-bold text-2xl">Cart</h1>
        <div className="w-6/12 m-auto">
          <button
            className="p-1 m-1 rounded-md font-bold text-xl bg-red-400"
            onClick={handleClear}
          >
            CLEAR CART
          </button>
          {cartItems.length === 0 && <h1>Add the Items to the Cart</h1>}
          <AccordianBody items={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Cart;
