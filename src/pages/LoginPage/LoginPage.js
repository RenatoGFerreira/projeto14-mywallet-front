import { useState } from "react"
import { ExternalContainer, CenterContainer, StyledButton, StyledInput } from "./StyledLoginPage"
import myWallet from "../../assets/images/MyWallet.png"
import { Link } from "react-router-dom"

export default function LoginPage() {

    const [form, setForm] = useState({ email: "", password: "" })

    function doLogin() {
        console.log("Foi")
    }

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <>
            <ExternalContainer>
                <CenterContainer>
                    <img src={myWallet} alt="my Wallet logo" />
                    <form onSubmit={doLogin}>
                        <StyledInput
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={form.email}
                            required
                            onChange={handleChange}
                        />
                        <StyledInput
                            type="password"
                            placeholder="Senha"
                            name="password"
                            value={form.password}
                            required
                            onChange={handleChange}
                        />
                        <StyledButton type="submit">
                            <span>Entrar</span>
                        </StyledButton>
                    </form>
                    <Link to={'/cadastro'}>Primeira vez? Cadastre-se</Link>
                </CenterContainer>
            </ExternalContainer>
        </>
    )
}



// pra salvar isso depois
// https://react-hook-form.com/
