import { useState } from "react"
import {FaStar} from "react-icons/fa"



export default function StarRating({noOfStars=5}){

    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(){
        setHover(rating)
    }
    return (
      <>
            <div className=" flex flex-col items-center ">
                <h1 className="font-bold">Rate My Project 😁</h1>
          <div className="start-rating flex">
            {[...Array(noOfStars)].map((_, index) => {
              index += 1;
              return (
                <FaStar
                  className={
                    index <= (hover || rating)
                      ? "text-yellow-300"
                      : "text-gray-800"
                  }
                  key={index}
                  onClick={() => handleClick(index)}
                  onMouseMove={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                  size={40}
                />
              );
            })}
          </div>
        </div>
      </>
    );
}