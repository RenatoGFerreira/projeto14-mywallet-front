import { ExternalContainer, CenterContainer, StyledInput, StyledButton } from "./StyleExpensePage"

export default function ExpensePage(){
    return(
        <ExternalContainer>
        <CenterContainer>
          <h1>Nova saida</h1>
          <form>
            <StyledInput placeholder="Valor" name="value"  type="number" step={0.01} required />
            <StyledInput placeholder="Descrição" name="description" type="text" maxLength={20} required />
            <StyledButton type="submit">
              <span>Salvar saida</span>
            </StyledButton>
          </form>
        </CenterContainer>
      </ExternalContainer>
    )
}