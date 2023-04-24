import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useContext, useState } from "react"
import {signIn} from "../services/auth"
import { AuthContext } from "../contexts/AuthContext"


export default function SignInPage() {
  const [form, setForm] = useState({})
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSendForm(e){
    e.preventDefault()
    signIn(form).then((res) => {
      if (res.data.message) {
        return alert(res.data.message)
      }

      setUser(res.data.token);
      navigate("/home");
    })
  }

  return (
    <SingInContainer>
      <form>
        <MyWalletLogo />
        <input 
          placeholder="E-mail" 
          name="email"
          type="email" 
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <input 
          placeholder="Senha" 
          name="password"
          type="password" 
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <button onClick={handleSendForm}>Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
