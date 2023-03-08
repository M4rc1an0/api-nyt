import styled from "styled-components";

export const ContentText = styled.div`
    display: flex;
    align-items: center;
`

export const H1 = styled.h1`
    font-size: ${(props) => props.size ? props.size : '40px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.weight ? props.weight : 'normal'};
`

export const H2 = styled.h2`
    font-size: ${(props) => props.size ? props.size : '35px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.weight ? props.weight : 'normal'};
`

export const H3 = styled.h3`
    font-size: ${(props) => props.size ? props.size : '30px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.weight ? props.weight : 'normal'};
`

export const H4 = styled.h4`
    font-size: ${(props) => props.size ? props.size : '25px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.weight ? props.weight : 'normal'};
`

export const H5 = styled.h5`
    font-size: ${(props) => props.size ? props.size : '20px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.weight ? props.weight : 'normal'};
`

export const H6 = styled.h6`
    font-size: ${(props) => props.size ? props.size : '15px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.weight ? props.weight : 'normal'};
`

export const P = styled.p`
    font-size: ${(props) => props.size ? props.size : '12px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.weight ? props.weight : 'normal'};
`