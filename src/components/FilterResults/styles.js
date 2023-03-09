import styled from "styled-components";

export const ContainerFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 120px;
    background-color: #F2F3F8;

    @media (max-width: 992px) {
        flex-direction: column;
    }
    
    @media (max-width: 768px) {
        padding: 10px;
    }
`

export const ContentActions = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 992px) {
        margin-top: 10px;
    }
`

export const DisplayLayout = styled.div`
`

export const ButtonDisplay = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin: 0 5px;

`

export const Select = styled.select`
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    outline: none;
`