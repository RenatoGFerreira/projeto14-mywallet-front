import styled from "styled-components";

export const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 147px;
        height: 40px;
        margin-bottom: 13px;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        font-weight: 700;
        font-size: 15px;
    }
`

export const ExternalContainer = styled.div`
    width: 326px;
    height: 326px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledInput = styled.input`
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    color: #000;
    box-sizing: border-box;
    border: none;
    padding: 0px;
    width: 326px;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 15px;
    padding-right: 15px;
    ::placeholder {
        font-family: "Raleway", sans-serif;
    }
`

export const StyledButton = styled.button`
    box-sizing: border-box;
    border: none;
    width: 326px;
    height: 58px;
    background: #a328d6;
    border-radius: 5px;
    margin-bottom: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color:#9c26ce;
    }
    span{
        font-family: "Raleway", sans-serif;  
        font-size: 20px;
        font-weight: 700;
        color: #fff;
    }
`