import { useDispatch, useSelector } from "react-redux";
import {addToCart,remFromCart} from "../redux/slides/CartSlides"; 
import { toast } from "react-hot-toast";

const Products = ({product}) => {

  const cart = useSelector((state)=> state.cart.cart);
  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remFromCart(product.id));
    toast.error("item remove from cart")
  }

  function addTooCart(){
    dispatch(addToCart(product));
    toast.success("item added to cart");
  }
  // console.log(product)
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline-none hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <div>
        <p className="w-40 text-gray-700 mt-1 truncate font-semibold text-lg text-left">{product.title.split(" ").slice(0,3).join(" ")+"..."}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
        {product.description.split(" ").slice(0,10).join(" ")+ "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={product.image} alt=""  className="h-full w-full"/>
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${product.price}</p>
        </div>
        <div>
          {
            cart.some((item)=> item.id == product.id ) ?
            (
              <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"  >Remove</button>
            ) :
            (
              <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addTooCart}>Add to Cart</button>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default Products
