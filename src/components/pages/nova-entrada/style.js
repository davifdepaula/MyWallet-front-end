import styled from "styled-components"

const FinancialTransaction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start; 
    margin-left: 35px;

    h1{
        font-weight: 700;
        margin-top: 25px;
        margin-bottom: 20px;
    }

    form {
        width: 320px;
        input, button {
            height: 50px;
        }
    }


`

export {
    FinancialTransaction
}