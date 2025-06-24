
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import RandomColorgenerator from './components/Random-color'
import StarRating from './components/Star-Rating'
import LoadMoreData from './load-more-data';

function App() {
 

  return (
    <>
      {/* <Accordian/>
    <RandomColorgenerator/>
    <StarRating noOfStars={10}/> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      <LoadMoreData/>
    </>
  );
}

export default App
