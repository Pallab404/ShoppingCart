import { useEffect } from "react";
import { useState } from "react";
import Products from "../components/Products";
import { Spinner } from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [productData,setProductData] = useState([]);
  const [Loading,setLoading] = useState(false);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      console.log("errro in fetching data",error);
      setProductData([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])

console.log(productData)

  return (
    <div>
      {
        Loading ? <Spinner/> : 
        productData.length > 0 ? 
        (
          <div>{
              productData.map((product)=>(
                <Products key={product.id} post={product}/>              
              ))
            }
          </div>
        ) :
        (
          <div>
            No data Found
          </div>
        )
      }
    </div>
  )
}

export default Home
