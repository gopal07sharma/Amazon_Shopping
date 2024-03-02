import { useNavigate } from "react-router-dom";
import { ROOT } from "../../route";
import { useContext } from "react";
import { cartContext } from "../contextApi/CartContext";
import { signOut } from "firebase/auth";
import { auth } from "../Constants/Firebase-config";

export const Navbar = () => {
  const context = useContext(cartContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successfunl
        sessionStorage.clear()
        navigate(ROOT.LOGINPAGE);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <div className=" flex px-2 justify-center">
            <img
              src="./src/assets/thumbnail.ico"
              className=" w-10 py-2"
              alt=""
            />
            <span className=" self-center text-2xl font-semibold dark:text-white h-full pb-2">
              amazon.in
            </span>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            {/* <div className=" w-72 space-x-36"> */}
            <button
              type="button"
              onClick={handleLogout}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-blue-800"
            >
              LOGOUT
            </button>
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cart</button> */}
          </div>
          {/* </div> */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
            id="navbar-cta"
          >
            <ul className="  flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  onClick={() => navigate(ROOT.HOME)}
                  className="dark:text-white md:hover:text-blue-700"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate(ROOT.MOBILES)}
                  className="dark:text-white md:hover:text-blue-700"
                >
                  Mobiles
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate(ROOT.HOME)}
                  className="dark:text-white md:hover:text-blue-700"
                >
                  Electronics
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate(ROOT.HOME)}
                  className="dark:text-white md:hover:text-blue-700"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate(ROOT.HOME)}
                  className="dark:text-white md:hover:text-blue-700"
                >
                  Fashion
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate(ROOT.HOME)}
                  className="dark:text-white md:hover:text-blue-700"
                >
                  Amazon Pay
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate(ROOT.BOOK)}
                  className="dark:text-white md:hover:text-blue-700"
                >
                  Books
                </button>
              </li>

              <li className="flex flex-wrap ">
                <button
                  type="button"
                  onClick={() => navigate(ROOT.CART)}
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cart
                  <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                    {context.quantity}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
