import styled from "styled-components";
import { ButtonAdicionar, cores } from "../../styles";
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
    z-index: 1;
    
`

export const CartContainer  = styled.li`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;
    
    &.is-open {
        display: flex;
    }
    `

export const Sidebar = styled.aside`
    background-color: ${cores.laranja};
    z-index: 1;
    max-width: 360px;
    width: 100%; 
    padding: 32px 8px;
    overflow-y: auto;

    ul {
        display: block;
    }

    ${ButtonAdicionar} {
        background-color: ${cores.footer};
    }
    `

export const Cartitem = styled.li`
    display: flex;
    background-color: ${cores.branco};
    position: relative;
    padding: 8px;
    margin-bottom: 16px;
    
    img {
        width: 80px;
        height: 80px;
        margin-right: 8px;
        object-fit: cover;
    }

    h3 {
        margin-bottom: 16px;
    }
    
    button {
        background-image: url(${lixeira});
        background-color: transparent;
        width: 16px;
        height: 16px;
        border: none;
        position: absolute;
        bottom: 8px;
        right: 8px;
        cursor: pointer;
    }
`

export const BarInfor = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 16px;

    P {
        color: ${cores.branco};
    }

    span {
        color: ${cores.branco};
    }
`