import { Result } from "postcss";
import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [errormsg, setErrorMsg] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  async function LoadingProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProductsData((prevData)=>[...prevData,...data.products]);
        setLoading(false);
        console.log(productsData);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMsg("Error in loading data...");
    }
  }
  useEffect(() => {
    LoadingProducts();
  }, [count]);
  useEffect(() => {
    if(productsData&& productsData.length===100) setDisableButton(true)
  },[productsData])
  if (loading) {
    return <div>loading Products.....</div>;
  }
  if (errormsg) {
    return <div>{errormsg}</div>;
  }
  return (
    <div className="load-more-container flex flex-col gap-[20px]">
      <div className="product-container grid grid-cols-4 gap-[10px]">
        {productsData && productsData.length ? (
          productsData.map((product, index) => (
            <div className="product p-[20px] w-[300px] h-[300px] border flex flex-col items-center justify-center">
              <img key={index} src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))
        ) : (
          <div>No Product found</div>
        )}
      </div>
      <div className="button-container flex justify-center items-center">
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 "
        >
          Load More
        </button>
        {disableButton ? <p>you have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
