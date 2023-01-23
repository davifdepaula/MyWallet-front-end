import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../../context/authContext";
import ResetStyle from "../../resetstyle"
import Home from "../pages/home";
import Login from "../pages/login"
import Deposit from "../pages/nova-entrada";
import Withdraw from "../pages/nova-saida";
import SignUP from "../pages/sign-up";
import GlobalStyle  from "./style"

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login />} />
          <Route path='/cadastro' element = {<SignUP />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/nova-entrada' element = {<Deposit />} />
          <Route path='/nova-saida' element = {<Withdraw />} />
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
