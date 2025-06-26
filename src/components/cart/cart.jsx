import { useContext } from "react";
import { CartContext } from "../context/context";
export default function CartItems() {
  const cartitem = useContext(CartContext);
  const total = cartitem.item.reduce(
    (sum, item) => sum + Number(item.price)*item.quantity,
    0
  );
  console.log(cartitem.item);
  function handleRemove(name) {
    const updatedCart = cartitem.item.map((item) =>
      item.name === name ? { ...item, quantity: item.quantity - 1 } : item
    ).filter((item) => item.quantity > 0);
    cartitem.setItem(updatedCart);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl">CART</h1>
      <div className="flex flex-col items-center justify-center">
        {cartitem &&
          cartitem.item.map((item, index) => (
            <li key={index} className="font-bold flex gap-2 items-center justify-center mb-2 ">
              {item.name} - {item.price} x{item.quantity}
              <button
                className="border border-blue-700 bg-gray-300 px-3 py-3-2 rounded-[8px] hover:cursor-pointer hover:bg-green-500 "
                onClick={() => handleRemove(item.name)}
              >
                remove
              </button>
            </li>
          ))}
      </div>
      <h5 className="font-semibold">Total Bill:${total}</h5>
    </div>
  );
}
