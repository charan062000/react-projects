import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
("react-icons/bs");
export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
      console.log(data);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);

  if (loading) {
    return <div className="">Loading your data! please wait....</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occoured.....!</div>;
    }
  
  return (
    <div className="flex items-center justify-center mb-5 mt-5">
      <div className="container relative flex justify-center content-center items-center w-[600px] h-[450px] ">
        <BsArrowLeftCircleFill
          size={25}
          onClick={() => handlePrevious()}
          className="arrow-left absolute  text-white drop-shadow-2xl left-4 cursor-pointer"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "  rounded-xl shadow-xl w-[100%] h-[100%]"
                    : " hide-current-image hidden  rounded-xl shadow-xl w-[100%] h-[100%]"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          size={25}
          onClick={() => handleNext()}
          className="arrow-right absolute text-white drop-shadow-2xl right-4 cursor-pointer"
        />
        <span className=" circle-indicator flex absolute bottom-4">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator  bg-white h-[15px] w-[15px] border-none rounded-full outline-none mx-0.5 cursor-pointer"
                      : "bg-gray-600 h-[15px] w-[15px] border-none rounded-full outline-none mx-0.5 cursor-pointer"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
