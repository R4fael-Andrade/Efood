import styled from "styled-components";
import { ButtonAdicionar, colors } from "../../styles";

export const Card = styled.div`
    width: 320px;
    background-color: ${colors.orange};
    padding: 8px;
    margin: 0;

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
    `

export const Image = styled.img`
    height: 167px;
    margin-bottom: 8px;
    width: 100%;
    `
export const Title = styled.h2`
    color: ${colors.white};
    font-size: 16px;
    `
export const Description = styled.p`
    font-size: 14px;
    margin: 8px 0;
    color: ${colors.white};
`

export const Modal =  styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1;
    
    &.visivel {
        display: flex;
    }
    
    .overlay {
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
    `

export const ModalContent = styled.div`
    width: 1024px;
    position: relative;
    z-index: 1;
    padding: 32px;
    background-color: ${colors.orange};
    
    header {
        display: flex;
        justify-content:end;
        align-items: center;

        > img {
        display: block;
        max-width: 100%;
        cursor: pointer;
    }
}
    
    .inforCard {
        display: flex;
        > img {
            width: 280px;
            height: 280px;
            object-fit: cover;
            margin-right: 32px; 
        } 

        ${ButtonAdicionar} {
            max-width: 218px;
            width: 100%;
        }
    }
    
    h3 {
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
}

    p { 
        margin: 16px 0;
        color: ${colors.white};
        font-size: 14px;
    }

    @media (max-width: 768px) {
        display: block;
        .inforCard {
            display: block;
            img {
            margin: 8px 0;
            height: 100%;
            width: 100%;
            }
        }
    }
`