import { ExternalContainer, StyledInput, StyledButton, CenterContainer } from "./StyleIncomingPage"

export default function IncomingPage(){
    return(
        <ExternalContainer>
        <CenterContainer>
          <h1>Nova entrada</h1>
          <form>
            <StyledInput placeholder="Valor" name="value"  type="number" step={0.01} required />
            <StyledInput placeholder="Descrição" name="description" type="text" maxLength={20} required />
            <StyledButton type="submit">
              <span>Salvar entrada</span>
            </StyledButton>
          </form>
        </CenterContainer>
      </ExternalContainer>
    )
}