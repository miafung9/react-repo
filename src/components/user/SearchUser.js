import  {Fragment, useState, useEffect} from "react"
import React from "react"
import axios from 'axios'

const SearchUser = ({setUser})  => {
    const [userId, setUserId]= useState(0)

    async function getUser () {
        try{
            const result= await axios.get(`https://jsonplaceholder.typicode.com/${userId}`)
            setUser(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getUser()
    },[userId])

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