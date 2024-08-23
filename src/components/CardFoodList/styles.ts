import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonAdicionar } from "../CardFood/styles";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-top: 56px;
    margin-bottom: 120px;

    @media (max-width: 768px) {
        display: block;
    }
`

