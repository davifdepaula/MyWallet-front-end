import React, {useContext, useState} from 'react'
import axios from 'axios'

import { LoginContainer } from './style'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/authContext'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const {setToken} = useContext(UserContext)
    const navigate = useNavigate()

    function signIn(e){
        e.preventDefault()
       const url = process.env.REACT_APP_API_URL
       axios.post(url, {email, password})
        .then(response => {
            setToken(response.data)
            navigate('/home')
        })
        .catch(error => alert(error.response.data))
        setEmail('')
        setPassword('')
    }

  return (
    <>
        <LoginContainer>
            <div>
                <h1>
                    MyWallet
                </h1>
                <form onSubmit={signIn}>
                    <input 
                        type="email" 
                        value={email} 
                        placeholder='E-mail' 
                        onChange={(event) => setEmail(event.target.value)} ></input>

                    <input 
                        type='password' 
                        value={password} 
                        placeholder='Senha'
                        onChange={(event) => setPassword(event.target.value)} ></input>
                    <button type='submit'>Entrar</button>
                </form>
                <Link to ='/cadastro'> Primeira vez? Cadastre-se! </Link>
            </div>
        </LoginContainer>
    </>
  )
}

export default Login