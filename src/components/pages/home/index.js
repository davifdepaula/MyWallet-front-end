import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/authContext'
import { Container, Box } from './style'

function Home() {
    const {token, setToken, userName, 
        setUserName, cashIn, setCashIn, 
        cashOut, setCashOut, balance, setBalance, config} = useContext(UserContext)
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
                setCashIn(response.data.cashIn)
                setCashOut(response.data.cashOut)
                setBalance(response.data.saldo)
            })
            .catch(error => console.log(error))
    }, [])

    function boxContainer(){
        if(cashIn.length === 0  && cashOut.length === 0 ) {
            return (
                <div className='noRegister'>
                    Não há registros de entrada ou saída
                </div>
            )
        }
        return(
            <div>
                {cashIn.map(deposit => {
                    return(
                        <div className='transitions'>
                        <div>
                        <span className='date'>{deposit.date}</span>
                        <span className='description'>{deposit.description}</span>
                        </div>
                        <span className='deposit'>{deposit.value}</span>
                        </div>)                    
                })}

                {cashOut.map(deposit => {
                    return(
                        <div className='transitions'>
                        <div>
                        <span className='date'>{deposit.date}</span>
                        <span className='description'>{deposit.description}</span>
                        </div>
                        <span className='withdraw'>{deposit.value}</span>
                        </div>)                    
                })}

                <div className='controlPosition'>
                <div className='balance'>
                    <span>saldo</span> 
                    <span>{balance}</span>
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