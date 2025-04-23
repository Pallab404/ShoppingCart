import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react"

const Cart = () => {
  const cart = useSelector((state)=>state.cart.cart)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(
      cart.reduce((acc,cur) => acc+cur.price,0)
    );
  },[cart]);
  return (
    <div>
      {
        cart.length > 0 ?
        ( 
          <div  className= " max-w-6xl flex justify-between mx-auto">
            <div className="flex flex-col max-w-[600px]">
              {
                cart.map((item)=>{
                  return(<CartItem key={item.id} item ={item}/>)
                })
              }
            </div>
            <div  className="h-[600px] w-[600px] ml-20 p-10 flex flex-col justify-between">
              <div className="flex flex-col mt-8">
                <div className=" text-xs text-green-400 font-bold ">YOUR CART</div>
                <div className="text-3xl text-green-600 font-bold mt-[-5px] ">SUMMARY</div>
                <p className="mt-4">
                  <span className="text-md">Total item : {cart.length}</span>
                </p>
              </div>
              <div>
                <p className="text-md font-semibold">Total Amount : <span className="font-bold">${totalAmount}</span></p>
                <button className="bg-green-400 mt-3 text-white font-semibold p-1 px-20 rounded-md hover:bg-green-600 transition duration-200 ease-in">Checkout Now</button>
              </div>
            </div>
          </div>
        ) :
        (
          <div className="flex justify-center items-center w-[100vw] mt-40 flex-col" >
            <h1 className="text-xl font-semibold text-slate-500">Cart is Empty</h1>
            <NavLink to="/">
              <button className="bg-green-400 text-white p-1 px-5 rounded-md mt-3 font-semibold hover:bg-green-600 transition duration-200 ease-in">Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart
