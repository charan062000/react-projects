
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import RandomColorgenerator from './components/Random-color'
import StarRating from './components/Star-Rating'
import LoadMoreData from './components/load-more-data';
import TreeMenu from './components/tree-view';
import menus from './components/tree-view/data';
import "./App.css";
import QrCodeGenerator from './components/qr-code-generator';
function App() {
 

  return (
    <>
      <Accordian/>
    <RandomColorgenerator/>
    <StarRating noOfStars={10}/>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData/>
      <TreeMenu menus={menus} />
      <QrCodeGenerator/>
    </>
  );
}

export default App
