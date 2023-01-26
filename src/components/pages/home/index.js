import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/authContext'
import { Container, Box, InOut } from './style.js'

function Home() {
    const {token, setToken, userName, 
        setUserName, checkingAccount, setcheckingAccount, 
        balance, setBalance, config} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    }, [])

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL
        axios.get(`${url}home`, config)
            .then(response => {
                setUserName(response.data.name)
                setcheckingAccount(response.data.checkingAccount)
                setBalance(response.data.balance)
            })
            .catch(error => console.log(error))
    }, [])

    function boxContainer(){
        if(checkingAccount.length === 0 ) {
            return (
                <div className='noRegister'>
                    Não há registros de entrada ou saída
                </div>
            )
        }
        return(
            <div>
                {checkingAccount.map(transfer => {
                    return(
                        <div className='transitions'>
                        <div>
                        <span className='date'>{transfer.date}</span>
                        <span className='description'>{transfer.description}</span>
                        </div>
                        <InOut
                            color = {transfer.type === 'deposit'? '#03AC00':'#C70000' }>
                            {transfer.value}
                        </InOut>
                        </div>)                    
                })}

                <div className='controlPosition'>
                <div className='balance'>
                    <span>saldo</span> 
                    <span>{balance.toFixed(2)}</span>
                </div>
                </div>
            </div>
        )

    }

  return (
    <>
        <Container>
            <div>
                <h1>
                    <span>Olá, {userName} </span> 
                    <span className='exit' onClick={() => {
                        setToken('')
                        navigate('/')}}> <ion-icon name="exit-outline"></ion-icon> </span>
                </h1>

                <Box>  
                    { boxContainer() }
                </Box>

                <div className='buttons'>
                    <button onClick={() => navigate('/nova-entrada')}> 
                        <span><ion-icon name="add-circle-outline"></ion-icon></span>
                        <div>
                            <div>Nova</div>
                            <div>entrada</div>
                        </div> 
                    </button>

                    <button onClick={() => navigate('/nova-saida')}> 
                        <span><ion-icon name="remove-circle-outline"></ion-icon></span>
                        <div>
                            <div>Nova</div>
                            <div>saida</div> 
                        </div>
                        
                    </button>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Home