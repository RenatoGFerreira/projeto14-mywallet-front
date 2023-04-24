import styled from "styled-components"
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { createTransaction } from "../services/transations"

export default function TransactionsPage(props) {

  const { user } = useContext(AuthContext);
  const { type } = useParams();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSendForm(e) {
    e.preventDefault();
    createTransaction(form, type, user).then((res) => {
      if (res.status === 401) {
        alert("[ERRO1]")
      }
      if (res.status === 400) {
        alert("[ERRO2]")
      }
      navigate("/home");
    });
  }

  return (
    <TransactionsContainer>
      <h1>Nova {type}</h1>
      <form>
        <input 
          placeholder="Valor" 
          name="value"
          type="text"
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <input 
          placeholder="Descrição" 
          name="description"
          type="text" 
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <button onClick={handleSendForm}>Salvar TRANSAÇÃO</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
