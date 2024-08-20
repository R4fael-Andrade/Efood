import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    height: 384px;
    top: -24px;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
    width: 540px;
    text-align: center;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        max-width: 240px;
        top: 150px;
        text-align: center;
        left: 100px;
    }
`

export const LogoImg = styled.img`
    width: 125px;
    height: 57px;
    margin-top: 64px;
    margin-bottom: 138px;
    
    @media (max-width: 768px) {
        margin-top: 16ox;
        margin-bottom: 32px;
    }
`