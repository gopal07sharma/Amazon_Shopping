import { useEffect } from "react";
import Header from "../Components/Authentication/Header";
import Login from "../Components/Authentication/Login";
import { useNavigate,useLocation } from "react-router-dom";
import { ROOT } from "../../route";
import Root from "postcss/lib/root";

export default function LoginPage(){
    const navigate=useNavigate()
    const params= useLocation()
    useEffect(()=>{
        console.log(params)
        if(params.pathname==="/home")navigate(ROOT.LOGINPAGE)
    // navigate(params.pathname)
    },[])
    return(
        <div className="flex flex-col jutify-center  items-center w-screen h-screen bg-gray-900 bg-gradient-to-br from-transparent via-[rgba(114, 114, 114, 0.3)] to-transparent bg-gradient-to-tr from-transparent via-[rgba(114, 114, 114, 0.3)] to-transparent bg-repeat bg-size-[55px 55px]">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
            <h1>{}adf</h1>
        </div>
    )
}