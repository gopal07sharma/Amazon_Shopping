import { useContext, useEffect, useRef, useState } from "react";
import { loginFields } from "../../Constants/FormField";
import FormExtra from "./FormExtra";
import FormAction from "./FormActions";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Constants/Firebase-config";
import { onAuthStateChanged } from "firebase/auth";

import { ROOT } from "../../../route";
import { AuthContext } from "../../contextApi/AuthContext";


const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const emailref = useRef();
  const Passwordref = useRef();
  const navigate =  useNavigate()
  const context=useContext(AuthContext)
  useEffect(()=>{sessionStorage.clear()},[])


    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
        console.log("emailref", emailref);
        console.log("emailpas", Passwordref);
        
        signInWithEmailAndPassword(auth, emailref.current.value, Passwordref.current.value)
          .then((userCredential) => {
            // Signed in 
            console.log("successfully login")
            const user = userCredential.user;
            console.log("user is",user);
            const uid = user.uid;
            context.handleUID(uid)
         
            sessionStorage.setItem('uid',uid)
            navigate(ROOT.HOME,{state:{id:uid}})

          })
          .catch((error) => {
            alert("wrong Email or password")
            
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    return(
        <form className="w-96 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            refer={field.name==="email"?emailref:Passwordref}
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}