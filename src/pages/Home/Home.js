import { ExternalContainer, TopContainer, MainContainer, ButtonsContainer, StyledButton } from "../Home/StyledHome"
import { Link } from "react-router-dom"

export default function Home() {

    const user = {
        name: "Fulano"
    }
    return (
        <>
            <ExternalContainer>
                <TopContainer>
                    <h1>Olá, {user.name}</h1>
                </TopContainer>
                <MainContainer>
                    <h2>
                        Não há registros de
                        entrada ou saída
                    </h2>
                </MainContainer>
                <ButtonsContainer>
                    <Link to={'/incoming'}>
                        <StyledButton>
                            <span>Nova Entrada</span>
                        </StyledButton>
                    </Link>
                    <Link to={'/expense'}>
                        <StyledButton>
                            <span>Nova Saída</span>
                        </StyledButton>
                    </Link>
                </ButtonsContainer>
            </ExternalContainer>
        </>
    )
}