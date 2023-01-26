import React, {useState, createContext} from "react"
const UserContext = createContext()

function UserProvider({ children }){
    const [userName, setUserName] = useState("")
    const [token, setToken] = useState()
    const [checkingAccount, setcheckingAccount] = useState([])
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
            checkingAccount, setcheckingAccount,
            balance, setBalance, config}}>
            {children}
        </UserContext.Provider>

    )
}

export {UserContext, UserProvider}