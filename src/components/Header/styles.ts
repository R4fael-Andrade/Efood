import { Link } from "react-router-dom";
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

    .container {
        display: flex;
        justify-content: space-between;

        @media (max-width: 738px) {
        display: flex;
        text-align: center;
        padding: 16px;
        flex-direction: column;
        align-items: center;
    }
}
`

export const Titles = styled.h2`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`

export const LinkTitle = styled(Link)`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
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
    color: #fff;
    font-size: 32px;

    @media (max-width: 768px) {
        left: 20px;
    }
`