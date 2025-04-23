import { RiDeleteBinFill } from "react-icons/ri";
import { remFromCart } from "../redux/slides/CartSlides";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const CartItem = ({item}) => {


  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remFromCart(item.id));
    toast.error("item removed")
  }

  return (
    <div className=" flex items-center gap-x-10 mt-5 border-b-4 border-green-500">
      <div className="h-[150px] w-80">
        <img src={item.image} alt="" className="w-full h-full"  />
      </div>
      <div>
        <h1 className="font-semibold text-slate-500 text-xl">{item.title}</h1>
        <h1 className="text-sm font-semibold mt-5 text-slate-500">{item.description}</h1>
        <div className="flex w-full justify-between mt-5 mb-10 ">
          <p className="font-semibold text-green-500 text-xl ml-3-">${item.price}</p>
          <div onClick={removeFromCart} className="cursor-pointer text-red-400 hover:text-red-600 text-xl">
              <RiDeleteBinFill/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
