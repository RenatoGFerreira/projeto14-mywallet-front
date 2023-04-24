import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"

export default function SignUpPage() {
  const [form, setForm] = useState({})

  function handleForm({value, name}){
    setForm({...form, [name]: value})
  }

  function handleSendForm(e){
    e.preventDefault()

  }
  return (
    <SingUpContainer>
      <form>
        <MyWalletLogo />
        <input 
          placeholder="Nome" 
          name="name"
          type="text" 
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <input 
          placeholder="E-mail" 
          name="name" 
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
          autocomplete="new-password" 
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <input 
          placeholder="Confirme a senha" 
          name="passwordConfirm"
          type="password" 
          autocomplete="new-password" 
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <button onClick={handleSendForm}>Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
