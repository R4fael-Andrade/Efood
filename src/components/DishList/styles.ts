import styled from "styled-components";

export const Container = styled.section`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 120px;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;

    @media (max-width: 768px) {
        display: block;
    }
`