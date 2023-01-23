import styled from "styled-components";


export const ExternalContainer = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

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
`;

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
    display:${props => props.disabled === true ? "none" : ""};
    }
`;

export const CenterContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
    h1 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    margin-bottom: 40px;
    }
`;