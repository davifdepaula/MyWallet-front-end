import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/authContext'
import { FinancialTransaction } from './style'


function Deposit() {
    const [value, setValue] = useState()
    const [description, setDescription] = useState()
    const {token, config} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    }, [])

    function makeDeposit(e){
        e.preventDefault()
        const url = process.env.REACT_APP_API_URL
        axios.post(`${url}nova-entrada`, {value, description}, config)
            .then(response => alert("Entrada realizada com sucesso"))
            .catch(error => alert(error.response.data))
        setValue('')
        setDescription('')
    }

  return (
    <>
        <FinancialTransaction>
            <h1>
                Nova entrada
            </h1>
            <form onSubmit={makeDeposit}>
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
                <button type='submit'>Salvar entrada</button>
            </form>
        </FinancialTransaction>
    </>
  )
}

export default Deposit