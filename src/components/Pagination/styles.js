import styled from "styled-components";

export const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 5px;
`

export const ButtonPagination = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #1F2445;
    border-radius: 12px;
    background-color: ${(props) => props.page ? '#1F2445' : 'transparent'};
    width: 30px;
    height: 30px;
`