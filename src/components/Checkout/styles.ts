import styled from "styled-components";
import { ButtonAdicionar, cores } from "../../styles";
import Button from "../Button";

export const Form  =styled.form`
    h2 {
        font-size: 16px;
        font-weight: bold;
        color: ${cores.branco};
        margin-bottom: 16px;
    }

    label {
        display: block;
        font-size: 14px;
        color: ${cores.branco};
    }

    input {
        height: 32px;
        width: 100%;
        margin: 8px 0;
    }

    ${ButtonAdicionar} {
        margin-bottom: 8px;
    }
    
    > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .error {
            border: 2px solid red; 
        }
`

export const Confirmation = styled.div`
    h2 {
        font-size: 16px;
        color: ${cores.branco};
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        color: ${cores.branco};
        line-height: 22px;
        margin-bottom: 24px;
    }

`