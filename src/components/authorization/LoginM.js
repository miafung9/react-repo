import React from "react";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { info } from "autoprefixer";

const inputFields = [
    {
        label:"Email",
        name: "email",
        inputType: "email",
        placeholder: "E.G. johndoe@gmail.com"
    },
    {
        label: "Password",
        name: "password",
        inputType: "password",
        placeholder: "Enter your password",
    },
]

function LoginM() {
    function loginHandler(data) {
        console.log("data", data)
    }

    return (
        <form className= "w-11/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto space-y-4 mt-12">
            <h1 className= 'text-2xl'><strong>Login</strong></h1>
            <div className= "space-y-3">
                {inputFields.map(info=> {
                    return (
                        <div className= "flex flex-col" key= {info.label}>
                            <label className= "font-semibold">{info.label}</label>
                            <input className= "border rounded-md p-r" type={info.inputType} placeholder= {info.placeholder}/>
                        </div>
                    )
                })}
            </div>

        <button className= "border rounded-md p-2 bg-indigo-400 text-white" type="submit" onClick= {loginHandler}> Login Here</button>
        <div className= "flex flex-row justify-between">
            <div className= ""> Save my account</div>
            <a href= "#" className="text-indigo-400 font-semibold"> Forgot Password</a>
        </div>

        </form>
    )
}
export default LoginM