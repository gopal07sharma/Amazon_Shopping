import { useContext, useState } from "react"
import { getProducts } from "../Utils/api-client"
import { useEffect } from "react"
import { Card } from "../Components/Card"
import { cartContext } from "../contextApi/CartContext"
import { Navbar } from "../Components/Navbar"
import { useLocation } from "react-router-dom";


export const Home = ()=>{
    const context = useContext(cartContext);
    const [product , setProduct] =useState([])
    const [selectedItem, setSelectedItems] = useState([]);
    const params=useLocation()
    useEffect(() => {
        console.log("selected item is ", selectedItem);
        context.updateCartQuantity(selectedItem)
      }, [selectedItem]);
    useEffect(()=>{
       console.log('product is ',product)
    },[product])
    useEffect(()=>{
        getProducts().then((data)=>{
            setProduct(data)
    }).catch((err)=>{
      console.log(err)
    })

    
    },[])
    useEffect(()=>{
   console.log("params",params);
    },[params])


    const RemoveInCart=(e)=>{
      const clickedProductId = parseInt(e.target.id);
      setSelectedItems((prevSelectedItems)=>{
       const NonDuplicate=prevSelectedItems.filter((items)=>items.id!==clickedProductId)
       console.log("Non duplicate",NonDuplicate)
       return NonDuplicate;
      })
    }
    const AddinCart = (e) => {
      console.log("e is ",e)
        const clickedProductId = parseInt(e.target.id);
        const selectedProduct = product.find((prod) => prod.id === clickedProductId);
        console.log('selectedProduct ', selectedProduct)
        if (selectedProduct) {
          setSelectedItems(prevSelectedItems => {
            // const duplicate=prevSelectedItems.find((iter)=>iter.id===selectedProduct.id)
            // if(duplicate)return prevSelectedItems;
  
          return  [...prevSelectedItems, selectedProduct]});
        }
      };
    return(<>
     <Navbar/>

        <div className="flex flex-wrap h-100 w-full px-2 gap-2 pt-10">
          
             {product.map((data,index)=><Card key={index} id={data.id} fn={AddinCart} fn1={RemoveInCart} title={data.title.slice(0, 30)} image={data.image} desc={data.description.slice(0,100)} price={data.price} rating={data.rating.rate}/>)}
        </div>
        </>
    )
}