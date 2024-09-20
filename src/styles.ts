import styled, {createGlobalStyle} from 'styled-components'

export const colors = {
    orange: '#E66767',
    white: '#FFF8F2',
    gray: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        color: ${colors.orange}
    }

    body {
        background-color: ${colors.white};
        width: 100%;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: 768px) {
            max-width: 80%;
            width: 100%;
        }
    }
`

export const ButtonAdicionar = styled.button`
    background-color: ${colors.white};
    color: ${colors.orange};
    font-size: 14px; 
    padding: 4px;
    width: 100%;
    border: none;
    cursor: pointer;
    font-weight: bold;
`
