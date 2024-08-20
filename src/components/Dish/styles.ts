import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const Card = styled.div`
    width: 472px;
    border: 1px solid ${cores.laranja};
    position: relative;
    background-color: #fff;
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 0 8px;
`

export const Assessment = styled(Title)``;

export const Star = styled.img`
    width: 21px;
    height: 21px;
    margin-right: 8px;
`

export const Description = styled.p`
    font-size: 14px;
    padding:  8px ;
    margin-bottom: 20px;
`

export const Image = styled.img`
    width: 100%;
    height: 217px;
`

export const More = styled.a`
    background-color: ${cores.laranja};
    color: ${cores.branco};
    font-size: 14px;
    font-weight: bold;
    padding: 6px 4px ;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 8px;
`

export const ButtonLink = styled(Link)`
    background-color: ${cores.laranja};
    color: ${cores.branco};
    font-size: 14px;
    font-weight: bold;
    padding: 6px 4px;
    margin-left: 8px;
    display: inline-block;
    margin-bottom: 12px;
    text-decoration: none;
`