import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { findAllTransactions } from "../services/transations";

export default function HomePage() {
  const { user, setUser } = useContext(AuthContext);
  const [usuario, setUsuario] = useState({});
  const [transacoes, setTransacoes] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  async function getTransactions() {
    if (!user) {
      navigate("/");
    }
    const res = await findAllTransactions(user);
    if (res.status === 401) {
      alert("Faça login novamente.");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    console.log(res.data)
    setUsuario(res.data.user);
    setTransacoes(res.data.transactionsUser);

    let total = 0;
    res.data.transactionsUser.forEach((transaction) => {
      if (transaction.type === "entrada") {
        total += Number(transaction.value);
      } else {
        total -= Number(transaction.value);
      }
    });

    setTotal(total);
  }

  function newEntries(type) {
    navigate(`nova-transacao/${type}`);
  }

  function deslogar() {
    setUser("");
    navigate("/");
  }

  useEffect(() => {
    getTransactions()
  });
  
  return (
    <HomeContainer>
      <Header>
        <h1>Olá, {usuario.name}</h1>
        <BiExit onClick={deslogar} />
      </Header>

      <TransactionsContainer>
        <ul>
          {transacoes.map((transactionsUser, index) => (
            <ListItemContainer key={index}>
              <div>
                <span>{transactionsUser.createdAt.substr(0,5)}</span>
                <strong>{transactionsUser.description}</strong>
              </div>
              <Value color={transactionsUser.type}>{transactionsUser.value}</Value>
            </ListItemContainer>
          ))}

          <ListItemContainer>
            <div>
              <span>30/11</span>
              <strong>Almoço mãe</strong>
            </div>
            <Value color={"negativo"}>120,00</Value>
          </ListItemContainer>
        </ul>

        <article>
          <strong>Saldo</strong>
          <Value color={"positivo"}>{total}</Value>
        </article>
      </TransactionsContainer>

      <ButtonsContainer>
        <button onClick={() => newEntries("entrada")}>
          <AiOutlinePlusCircle />
          <p>
            Nova <br /> entrada
          </p>
        </button>
        <button onClick={() => newEntries("saida")}>
          <AiOutlineMinusCircle />
          <p>
            Nova <br />
            saída
          </p>
        </button>
      </ButtonsContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`;
const TransactionsContainer = styled.article`
  flex-grow: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    display: flex;
    justify-content: space-between;
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;

  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
`;
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`;
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`;
