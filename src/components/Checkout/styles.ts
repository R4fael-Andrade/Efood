import styled from "styled-components";
import { ButtonAdicionar, colors } from "../../styles";

type InputGroupProps = {
    maxWidth?: string
}


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
        border: none;

        &:nth-last-of-type(5) {
            margin-bottom: 16px;
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

export const ButtonGroup = styled.div`
    margin-top: 16px;

    div {
        width: 100%;
    }
`

export const InputGroup = styled.div<InputGroupProps>`
    flex: auto;
    max-width: ${(props) => props.maxWidth || 'auto'};

    label {
        display: block;
    }

`
