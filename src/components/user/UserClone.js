import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import UserCardClose from './UserCardClone'

function User() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(1)
    const [loading, setLoading] = useState(true)
}

const getUser = async () => {
        try {
            const result = await axios.get("http://jsonplaceholder.typicode.com/user")
         setUsers(result.data)
         setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    async function getUsers(userId) {
        try {
            const result = await axios.get(`http://jsonplaceholder.typicode.com/${user}`)
            setUsers(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

useEffect (() => {
    getUser()
    getUsers()
}, [])

if(loading) {
    return <div> LOADING...</div>
return <div className= 'space-y-10'>
    <SearchUser userId = {userId} setUserId = {setUserId} />
    {user &&
        <UserCard user= {user} />
        }
</div>
}
 export default UserClone