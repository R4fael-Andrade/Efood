import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
    width: 320px;
    background-color: ${cores.laranja};
    padding: 8px;
    margin: 0;
    `

export const Image = styled.img`
    height: 167px;
    margin-bottom: 8px;
    width: 100%;
    `
export const Title = styled.h2`
    color: ${cores.branco};
    font-size: 16px;
    `
export const Description = styled.p`
    font-size: 14px;
    margin: 8px 0;
    color: ${cores.branco};
`

export const ButtonAdicionar = styled.button`
    background-color: ${cores.branco};
    color: ${cores.laranja};
    font-size: 14px; 
    padding: 4px;
    width: 100%;
    border: none;
    cursor: pointer;
`