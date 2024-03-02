import { useRef, useState } from "react";
import Input from "./Input";
import FormAction from "./FormActions";
import { signupFields } from "../../Constants/FormField";
import { auth } from "../../Constants/Firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const email = useRef();
  const Password = useRef();
  const name=useRef();
  const navigate=useNavigate();

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    console.log("emailref", email);
    console.log("emailpas", Password);
    console.log("name", name);
   

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      Password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user", user);
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            alert("Sign Up Successfully")
            navigate(ROOT.LOGINPAGE)
            // ...
          })
          .catch((error) => {

            // An error occurred
            // ...
          });
        // ...
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorcode",error.code);
        console.log("errormesafe",error.message);
        // ..
      });
  };

  return (
    <form className="  w-96 space-y-2" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            refer={field.name==="email"?email:field.name==="password"?Password:name}
        
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
