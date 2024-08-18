import styled from "styled-components";
import { cores } from "../../styles";
import { Props } from ".";

export const TagContainer = styled.div<Props>`
    background-color: ${cores.laranja};
    color: ${cores.branco};
    font-size: ${(props => props.size === 'small' ? '12px' : '14px')};
    font-weight: bold;
    padding: 6px 4px;
    margin-left: 8px;
    display: inline-block;
    margin-bottom: 12px;
`