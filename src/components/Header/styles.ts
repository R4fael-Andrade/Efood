import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 186px;
    background-size:cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 738px) {
        display: block;
        text-align: center;
        padding: 16px;
    }
`

export const Titles = styled.h2`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`

export const LogoImg = styled.img`
    width: 125px;
    height: 57px;
    top: 64px;
    left: 45%;
    
    @media (max-width: 768px) {
        margin: 15px 0;
    }
`

export const ContainerPresentation = styled.div`
    height: 280px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
`

export const TagPresentation = styled.p`
    font-size: 32px;
    position: absolute;
    top: 25px;
    left: 170px;
    color: #fff;
    font-weight: 100;

    @media (max-width: 768px) {
        left: 20px;
    }
`

export const TitlePresentation = styled.h2`
    font-weight: bold;
    position: absolute;
    bottom: 32px;
    left: 170px;
    color: #fff;
    font-size: 32px;

    @media (max-width: 768px) {
        left: 20px;
    }
`