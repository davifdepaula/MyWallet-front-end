import React, {useState, createContext} from "react"
const UserContext = createContext()

function UserProvider({ children }){
    const [userName, setUserName] = useState("")
    const [token, setToken] = useState()
    const [cashIn, setCashIn] = useState([])
    const [cashOut, setCashOut] = useState([])
    const [balance, setBalance] = useState(0)

    const config = {
        headers: {
            authorization:`Bearer ${token}`
        }
    }

    return (
        <UserContext.Provider 
        value = {{userName, setUserName,
            token, setToken, 
            cashIn, setCashIn,
            cashOut, setCashOut, balance, setBalance, config}}>
            {children}
        </UserContext.Provider>

    )
}

export {UserContext, UserProvider}