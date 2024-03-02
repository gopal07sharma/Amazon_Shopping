import { createContext } from "react";

export const cartContext = createContext({cartQuantity:[] , updateCartQuantity:function(){} , quantity:0})