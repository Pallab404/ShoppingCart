import { useEffect } from "react";
import { useState } from "react";
import Products from "../components/Products";
// import { Spinner } from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [productData,setProductData] = useState([]);
  // const [Loading,setLoading] = useState(false);

  async function fetchProductData() {
    // setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      console.log("errro in fetching data",error);
      setProductData([]);
    }
    // setLoading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])

  return (
    <div className="sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 max-w-6xl grid grid-cols-1 p-2 mx-auto gap-y-5 space-x-5 min-h-[80vh]">
      {
        productData.map((product)=>{
          // console.log(product)
          return(<Products key={product.id} product={product}/>)
        })
      }
    </div>
  )
}

export default Home
