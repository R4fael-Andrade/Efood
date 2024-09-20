import styled from "styled-components";
import { ButtonAdicionar, colors } from "../../styles";

export const Form  =styled.form`
    h2 {
        font-size: 16px;
        font-weight: bold;
        color: ${colors.white};
        margin-bottom: 16px;
    }

    label {
        display: block;
        font-size: 14px;
        color: ${colors.white};
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
        color: ${colors.white};
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        color: ${colors.white};
        line-height: 22px;
        margin-bottom: 24px;
    }

`