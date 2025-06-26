import { useContext } from "react";
import { CartContext } from "../context/context";

export default function Item({ name, price }) {
  const cart = useContext(CartContext);
  console.log(cart, "cart");
  function handleAddToCart() {
    const existingItem = cart.item.find((item) => item.name === name);

    if (existingItem) {
      const updatedCart = cart.item.map((item) =>
        item.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      cart.setItem(updatedCart);
    } else {
      cart.setItem([...cart.item, { name, price, quantity: 1 }]);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center bg-blue-300 mb-5 px-5 py-3 rounded-xl">
      <h1 className="font-bold">{name}</h1>
      <p className="font-medium text-gray-500">${price}</p>
      <button
        onClick={handleAddToCart}
        className="border border-blue-700 bg-gray-300 px-3 py-3-2 rounded-[8px] hover:cursor-pointer hover:bg-green-500 "
      >
        add to cart
      </button>
    </div>
  );
}
