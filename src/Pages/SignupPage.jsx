import Header from "../Components/Authentication/Header";
import Signup from "../Components/Authentication/Signup";


export default function SignupPage(){
    return(
        <div className="flex flex-col jutify-center   items-center w-screen h-screen bg-gray-900 bg-gradient-to-br from-transparent via-[rgba(114, 114, 114, 0.3)] to-transparent bg-gradient-to-tr from-transparent via-[rgba(114, 114, 114, 0.3)] to-transparent bg-repeat bg-size-[55px 55px]">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </div>
    )
}