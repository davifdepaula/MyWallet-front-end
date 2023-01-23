import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignUpContainer } from './style'

function SignUP() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    function onSignUp(e){
        e.preventDefault()
        const url = process.env.REACT_APP_API_URL
        axios.post(`${url}cadastro`, {name, email, password, confirmPassword})
            .then(response => {
                alert('Cadastro criado com sucesso')
                navigate('/')})
            .catch(error => alert(error.response.data))
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
                
    }

    return (
        <>
            <SignUpContainer>
                <div>
                    <h1 className="myWallet">
                        MyWallet
                    </h1>
                    <form onSubmit={onSignUp}>
                        <input type="text" 
                            placeholder='Nome'
                            value={name}  
                            onChange={(event) => setName(event.target.value)}>
                        </input>
                        <input type="email" 
                            placeholder='E-mail'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}>
                        </input>
                        <input type='password' 
                            placeholder='Senha'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}>
                        </input>
                        <input type='password' 
                            placeholder='Confirme a senha'
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}>
                        </input>
                        <button type='submit'>Cadastrar</button>
                    </form>
                    <Link to ='/'> Já tem uma conta? Entre agora! </Link>
                </div>
            </SignUpContainer>
        </>
      )
}

export default SignUP