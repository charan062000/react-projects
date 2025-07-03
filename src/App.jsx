import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColorgenerator from "./components/Random-color";
import StarRating from "./components/Star-Rating";
import LoadMoreData from "./components/load-more-data";
import TreeMenu from "./components/tree-view/index";
import "./App.css";
import QrCodeGenerator from "./components/qr-code-generator";

import Item from "./components/cart/item";
import CartItems from "./components/cart/cart";
import { Count } from "./components/Count";
import { useDispatch } from "react-redux";
import { decremented, incremented, reset,incrementByAmount } from "./components/features/Counter/CounterSlice";
import { useState } from "react";
import AddTodo from "./components/TodoList/addTodo";
import Filter from "./components/TodoList/filter";
import TodoList from "./components/TodoList/todoList";


function App() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(incremented());
  }
  function handleDecrement() {
    dispatch(decremented());
  }
  function handleReset() {
    dispatch(reset());
  }
  function handleIncAmount() {
    dispatch(incrementByAmount(amount))
  }
  
  return (
    <>
      {/* <Accordian />
      <RandomColorgenerator />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData />
      <TreeMenu menus={menus} />
      <QrCodeGenerator /> */}
      {/* <div className="flex items-center justify-center flex-col">
        <h1 className="mt-5  font-bold text-[32px] text-red-500">ADD TO CART section</h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <Item name="apple 14pro" price="20000" />
          <Item name="Mac book" price="100000" />
          <Item name="Gucci hand bag" price="1950" />
          <Item name="armani hand karchif" price="15700" />
          <Item name="Nicon camera" price="25670" />
        </div>
      </div>
      <CartItems /> */}

      <button
        onClick={handleIncrement}
        className="border px-3 py-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white rounded-xl"
      >
        Increment
      </button>
      <Count />
      <button
        onClick={handleDecrement}
        className="border px-3 py-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white rounded-xl"
      >
        Decrement
      </button>
      <button
        onClick={handleReset}
        className="border px-3 py-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white rounded-xl"
      >
        Reset
      </button>
      <br />
      <input
        placeholder="enter amount"
        type="Number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button
        onClick={handleIncAmount}
        className="border px-3 py-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white rounded-xl"
      >
        alt amount
      </button>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-4">Redux Todo App</h1>
        <AddTodo/>
        <Filter/>
        <TodoList/>
      </div>
    </>
  );
}

export default App;
