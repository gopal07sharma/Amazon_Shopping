import { useContext, useEffect, useState } from "react";
import { cartContext } from "../contextApi/CartContext";
import CartList from "../Elements/CartList";

export const CartItems = ()=>{
    const [cartItems, setCartItems] =useState([])
   const [total,setTotal]= useState(0)
    const context = useContext(cartContext)

   
    
    useEffect(()=>{
      console.log(context.cartQuantity)
      setCartItems(()=>{
        const finalCart=context.cartQuantity
        return finalCart;
      })
    },[])
    useEffect(()=>{
      setTotal(()=>{
        let subtotal=0;
       for(const element of cartItems){
        subtotal=subtotal+element.price;
       }
       return subtotal;
      })
      
    },[cartItems])
    useEffect(()=>{console.log("total",total);},[total])
    return(
        <div>
        { cartItems.length ?  <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>
    {/* <CartList/> */}

    {cartItems.map((items)=><CartList cartItem={items}/>)}
    <div className="mt-6 space-y-3 border-t border-b py-8">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Subtotal</p>
              <p className="text-lg font-semibold text-gray-900">{(total).toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Shipping</p>
              <p className="text-lg font-semibold text-gray-900">Rs 40</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900"></p>
            <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">INR</span> {(total+40).toFixed(2)}</p>
          </div>

          <div className="mt-6 text-center">
            <button  type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Place Order
              <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
  </div>
</section>
:<h1>No Cart item</h1>}
        </div>
    )
}