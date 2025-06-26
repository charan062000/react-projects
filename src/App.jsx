
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import RandomColorgenerator from './components/Random-color'
import StarRating from './components/Star-Rating'
import LoadMoreData from './components/load-more-data';
import TreeMenu from './components/tree-view/index';
import "./App.css";
import QrCodeGenerator from './components/qr-code-generator';
import { menus } from './components/tree-view/data';
import Item from './components/cart/item';
import CartItems from './components/cart/cart';
function App() {
 
  
  return (
    <>
      <Accordian />
      <RandomColorgenerator />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData />
      <TreeMenu menus={menus} />
      <QrCodeGenerator />
      <div className="flex items-center justify-center flex-col">
        <h1 className="mt-5  font-bold text-[32px] text-red-500">ADD TO CART section</h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <Item name="apple 14pro" price="20000" />
          <Item name="Mac book" price="100000" />
          <Item name="Gucci hand bag" price="1950" />
          <Item name="armani hand karchif" price="15700" />
          <Item name="Nicon camera" price="25670" />
        </div>
      </div>
      <CartItems />
    </>
  );
}

export default App
