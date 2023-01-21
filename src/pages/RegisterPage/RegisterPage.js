import { useState } from "react"
import { ExternalContainer, CenterContainer, StyledButton, StyledInput } from "./StyledRegisterPage"
import myWallet from "../../assets/images/MyWallet.png"
import { Link } from "react-router-dom"

export default function RegisterPage(){

    const [form, setForm] = useState({ email: "", password: "" })

    function doLogin() {
        console.log("Foi")
    }

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return(

        <>
            <ExternalContainer>
                <CenterContainer>
                    <img src={myWallet} alt="my Wallet logo" />
                    <form onSubmit={doLogin}>
                    <StyledInput
                            type="text"
                            placeholder="Nome"
                            name="name"
                            value={form.name}
                            required
                            onChange={handleChange}
                        />
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
                        <StyledInput
                            type="password"
                            placeholder="Confirme a senha"
                            name="confirmPassword"
                            value={form.ConfirmPassword}
                            required
                            onChange={handleChange}
                        />
                        <StyledButton type="submit">
                            <span>Cadastrar</span>
                        </StyledButton>
                    </form>
                    <Link to={'/'}>Primeira vez? Cadastre-se</Link>
                </CenterContainer>
            </ExternalContainer>
        </>
    )
}