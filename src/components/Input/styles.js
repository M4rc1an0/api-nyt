import styled from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    height: 32px;
    padding: 0 5px;
    margin: 10px 0;
    background-color: #fff;
    border-radius: 16px;

    @media (max-width: 1280px) {
        width: 100%;
    }
`

export const ContentIcon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 12px;
    padding: 5px;
    
    :hover {
        background-color: #d0d3e2;
        border-radius: 16px;

        svg{
            path{
                fill: #fff;
            }
        }
    }
`

export const TextInput = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
`