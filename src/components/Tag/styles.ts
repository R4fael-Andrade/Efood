import styled from "styled-components";
import { colors } from "../../styles";
import { Props } from ".";

export const TagContainer = styled.div<Props>`
    background-color: ${colors.orange};
    color: ${colors.white};
    font-size: ${(props => props.size === 'small' ? '12px' : '14px')};
    font-weight: bold;
    padding: 6px 4px;
    margin-left: 8px;
    display: inline-block;
    margin-bottom: 12px;
`