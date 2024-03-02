import axios from "axios"

export const getProducts = async ()=>{
      const response = await axios.get(import.meta.env.VITE_URL)
    //   console.log('response is ', response.data);
    return response.data ;
}

export const getCart = async ()=>{
    const response = await axios.get(import.meta.env.VITE_CART)
    console.log('response is ', response.data.products)
}
