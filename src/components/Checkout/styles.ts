import styled from "styled-components";
import { ButtonAdicionar, cores } from "../../styles";

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

        &.error {
            border: 2px solid red; 
        }
    }

    ${ButtonAdicionar} {
        margin-bottom: 8px;
    }
    
    > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`