import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    max-height: 50px;
    height: 100%;
    padding: 0 120px;
    background-color: #5062F0;
    z-index: 1000;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        min-height: 110px;
        padding: 0 10px;
    }

`