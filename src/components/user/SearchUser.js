import  {Fragment} from "react"
import React from "react"
const SearchUser = ({userId,setUserId})  => {
    return (
        <Fragment>
        <h1> Search User</h1>
        <label>
            User Id: <input className= 'border border-black' text= "text" value = {userId} onChange= {(event) => setUserId(event.target.value)}/>

        </label>
        </Fragment>
    )
}
export default SearchUser