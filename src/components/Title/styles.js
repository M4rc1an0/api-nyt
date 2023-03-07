import styled from "styled-components";

export const TitleH1 = styled.h1`
    font-size: ${(props) => props.size ? props.size : '40px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.weight ? props.weight : 'normal'};
`