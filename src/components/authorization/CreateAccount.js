import React from 'react'

function CreateAccount() {
  return <div className ="w-11/12 md: w-6/12 lg:w-5/12 mx-auto space-y-2">
        <h1 className= "text-2x1"><strong>Create Account</strong></h1>
    <div>
        <div className= "flex flex-col">
            <label className = "mr-auto">
                First Name
            </label>
            <input type = "text" className= "border"/>
        </div>
        <div className= "flex flex-col">
            <label className="mr-auto">
                Email
            </label>
            <input type="text" className="border"/>
        </div>
        <div className= "flex flex-row justify-between px-4">
            <div> Remember Me</div>
            <div>Forgot Password</div>
        </div>
        <div>
            <button className= "bg=indigo-500 text-white w-full py-3 rounded-md">
                Create An Account Button
            </button>
        </div>
        <div> Have an Account? <a href= "#">Log In</a> </div>
    </div>
    </div>
  
}

export default CreateAccount