// import { CartItems } from "./Components/CartItems";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Mobiles } from "./Pages/Mobiles";
import { cartContext } from "./contextApi/CartContext";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { AuthContext } from "./contextApi/AuthContext";
import { auth } from "./Constants/Firebase-config";
import { useNavigate,useLocation } from "react-router-dom";


const App = () => {
  const [cartCount, setCartCount] = useState([]);
  const [UID, setuid] = useState("");
  const navigate=useNavigate();
  const params=useLocation();
  const handleCart = (quantity) => {
    console.log("quantity is ", name);
    setCartCount(quantity);
  };
  useEffect(() => {
    console.log("cart count", cartCount);
  }, [cartCount]);
  const setUID = (e) => {
    setuid(e);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
         navigate
        setuid(uid);
        console.log("params",params.pathname)
        navigate(params.pathname)

        // ...
      } else {
        // User is signed out
        // ...
        setuid(null);
        navigate(ROOT.LOGINPAGE)
      }
    });
  }, []);
  // const restriction=()=>{
  //   const restrict= sessionStorage.getItem('uid')
  //   console.log("restrict is ",restrict);
  //   return restrict;
  // }
  return (
    <AuthContext.Provider value={{ userUID: UID, handleUID: setUID }}>
      <cartContext.Provider
        value={{
          cartQuantity: cartCount,
          updateCartQuantity: handleCart,
          quantity: cartCount.length,
        }}
      >
        <div>
          <Routes>
            <Route exact path="/" Component={LoginPage} />
            <Route exact path="/signup" Component={SignupPage} />
            <Route path="/home" Component={UID ? Home : LoginPage} />
            <Route
              exact
              path="/cart"
              element={UID ? <Cart /> : <LoginPage />}
            />
            <Route
              exact
              path="/Mobiles"
              element={UID ? <Mobiles /> : <LoginPage />}
            />
          </Routes>
        </div>
      </cartContext.Provider>
    </AuthContext.Provider>
  );
};
export default App;
