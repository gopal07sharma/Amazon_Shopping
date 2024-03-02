import React from 'react'

const CartList = ({cartItem}) => {
    console.log("cartlist is ",cartItem)
  return (
    <div className="mx-auto mt-8 max-w-md md:mt-12">
      <div className="rounded-3xl bg-white shadow-lg">
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">
              
              <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
                  <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={cartItem.image} alt="" />
                </div>

                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold text-gray-900">{cartItem.title}</p>
                      <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{cartItem.decription}</p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{cartItem.price}</p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

           <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" />

         
        </div>
      </div>
    </div>
  )
}

export default CartList