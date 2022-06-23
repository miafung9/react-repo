import { useEffect, useState}  from 'react'
import axios from 'axios'

function User() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

   //promises using Async/await- with arrow function
    const getUser = () => async () => {
        try {
            const result = await axios.get("http://jsonplaceholder.typicode.com/user")
         setUsers(result.data)
         setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }}
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
        
    // handle promises with .then() & .catch() methods
    //    const myPromise =  axios.get("http://jsonplaceholder.typicode.com/userId15")
    //     .then(result => setUsers(result.data))
    //     .catch(error => console.log(error))
    //         console.log("getting result back")
        console.log("making network request")
         getUser()   
        })
        if(loading )

    // console.log("users from API: ", users)
    console.log ("rendering my component")
    return <ul> {user.map( user=> {
            return (<li key = {user.id}> {user.name}</li>)
     })} </ul>
  
export default User