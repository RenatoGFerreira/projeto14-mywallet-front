import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/css/GlobalStyle"

import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import Home from "./pages/Home/Home"
import IncomingPage from "./pages/IncomingPage/IncomingPage"
import ExpensePage from "./pages/ExpensePage/ExpensePage"


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nova-entrada" element={<IncomingPage />} />
                <Route path="/nova-saida" element={<ExpensePage />} />
            </Routes>
        </BrowserRouter>
    )
}