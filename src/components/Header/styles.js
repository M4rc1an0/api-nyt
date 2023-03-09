import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 120px;
    background-color: #5062F0;
    z-index: 1000;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`