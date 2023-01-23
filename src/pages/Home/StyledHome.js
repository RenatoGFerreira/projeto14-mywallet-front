import styled from "styled-components";


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
    `;

export const TopContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
h1{
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
}
img{
    width: 32px;
    pointer-events:${props => props.disabled === true ? "none" : ""};
}
margin-bottom: 26px;
`

export const MainContainer = styled.div`
border-radius: 5px;
width: 326px;
height: 446px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
h2{
    width: 180px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
}
`

export const ButtonsContainer = styled.div`
    margin-top: 13px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        text-decoration: none;
    }
    `


export const StyledButton = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    border: none;
    width: 156px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    img{
        width: 22px;
    }
    span{
        display: inline-block;
        text-align: left;
        width: 64px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`