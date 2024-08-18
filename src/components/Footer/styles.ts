import styled from "styled-components";
import { cores } from "../../styles";

export const FooterContainer = styled.footer`
    padding: 40px 0 ; 
    /* position: relative; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${cores.footer};
    flex-direction: column;
`
export const LogoImg = styled.img`
    width: 125px;
    height: 57px;
    /* position: absolute; */
    top: 64px;
    left: 45%;
    display: flex;
`
export const List = styled.ul`
    display: flex;
    margin-top: 32px;
    margin-bottom: 80px;
`

export const ListItem = styled.img`
    /* margin-right: 8px; */
    width: 24px;
    height: 24px;
`

export const ItemCenter = styled(ListItem)`
    margin: 0 8px;
`

export const Description = styled.p`
    font-size: 10px;
`