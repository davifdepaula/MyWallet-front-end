import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;
        margin-bottom: 25px;

        .exit {
            font-size: 36px;
            cursor: pointer;
        }
    }

    .buttons{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        button{
            align-items: flex-start;
            background: #A328D6;
            border: 1px solid #A328D6;
            border-radius: 5px;
            color: #FFFFFF;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            font-size: 17px;
            font-weight: 700;
            height: 15vh;
            justify-content: space-between;
            padding-top: 10px;
            padding-bottom: 10px;
            width: 42vw;

            div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            ion-icon{
                font-size: 30px;
                font-weight: 700;
            }
        }
    }
`

const Box = styled.div`
    width: 90vw;
    height: 70vh;
    background: #FFFFFF;
    border: 1px solid #A328D6;
    border-radius: 5px;
    margin-bottom: 15px;
    position: relative;

    .noRegister{
        align-items: center;
        color: #868686;
        display: flex;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        height: 70vh;
        justify-content: center; 
    }

    .transitions{
        display: flex;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 16px;
        justify-content: space-between;
        align-items: center;
        margin: 5px;

        span{
            margin: 5px;
        }

        .date {
            color: #C6C6C6;
        }

        .description{
            color: #000000;
        }

        .withdraw{
            color: #C70000;
        }

    }

    .controlPosition{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        .balance {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 5px;
        }
    }
`

const InOut = styled.div`
    color: ${props => props.color};
`

export {
    Container,
    Box,
    InOut
}