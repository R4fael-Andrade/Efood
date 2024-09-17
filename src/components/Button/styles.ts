import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
    font-weight: bold;
    height: 24px;
    width: 100%;
    padding: 4px 0;
    color: ${cores.laranja};
    background-color: ${cores.footer};
    border: none;
    margin-bottom: 8px;
    cursor: pointer;
`

export const ButtonLink = styled(Link)`
    font-weight: bold;
    height: 24px;
    width: 100%;
    padding: 4px 0;
    color: ${cores.laranja};
    background-color: ${cores.footer};
    border: none;
    margin-bottom: 8px;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    display: inline-block;
    align-items: center;
    text-align: center;
`