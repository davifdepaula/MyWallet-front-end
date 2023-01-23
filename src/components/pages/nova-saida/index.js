import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/authContext'
import { FinancialTransaction } from './style'

function Withdraw() {
    const [value, setValue] = useState()
    const [description, setDescription] = useState()
    const {token, config} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    }, [])

    function makeWithdraw(e){
        e.preventDefault()
        const url = process.env.REACT_APP_API_URL
        axios.post(`${url}nova-saida`, {value, description}, config)
            .then(response => alert("Retirada realizada com sucesso"))
            .catch(error => alert(error.response.data))
        setValue('')
        setDescription('')
    }

  return (
    <>
        <FinancialTransaction>
            <h1>
                Nova saída
            </h1>
            <form onSubmit={makeWithdraw}>
                <input 
                    type="number" 
                    value={value} 
                    placeholder='Valor' 
                    onChange={(event) => setValue(event.target.value)} ></input>

                <input 
                    type='text' 
                    value={description} 
                    placeholder='Descrição'
                    onChange={(event) => setDescription(event.target.value)} ></input>
                <button type='submit'>Salvar saída</button>
            </form>
        </FinancialTransaction>
    </>
  )
}

export default Withdraw