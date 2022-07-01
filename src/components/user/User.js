import React from 'react'
import { useEffect, useState}  from 'react'
import axios from 'axios'
import UserCard from "./UserCard"
import SearchUser from './SearchUser'

function User() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(1)
    const [loading, setLoading] = useState(true)

    // const id = 1

    console.log(user)

   //promises using Async/await- with arrow function
    const getUsers = async () => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(result.data)
            setLoading(false)
        }  catch (e){
            console.log(e)
            setLoading(false)
        }
    }

    const getUser = async () => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            setUser(result.data)
            setLoading(false)
        }  catch (e){
            console.log(e)
            setLoading(false)
        }
    }



    //writing Async/await with normal function
    // async function getUsersNormalFunc() {
    //     try {
    //         const result = await axios.get("http://jsonplaceholder.typicode.com/user")
    //      setUsers(result.data) 
    // setLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    useEffect (() => {
        getUser()
    }, [userId])
        
        
    useEffect (() => {
        getUsers()
    }, [])

    // handle promises with .then() & .catch() methods
    //    const myPromise =  axios.get("http://jsonplaceholder.typicode.com/userId15")
    //     .then(result => setUsers(result.data))
    //     .catch(error => console.log(error))
    //         console.log("getting result back")
       

    // console.log("users from API: ", users)
    
    if(loading) {
        return <div> LOADING...</div>}
     return <div className= 'space-y-10'>
        <SearchUser userId = {userId} setUserId= {setUserId}/>
        {user && 
            <UserCard user= {user} />
        }
     </div>
}
    // <ul> {user.map( user=> {
    //         return (<li key = {user.id}> {user.name}</li>)
    //  })} </ul>}
  
export default User