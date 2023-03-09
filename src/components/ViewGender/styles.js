import styled from "styled-components";

export const ContainerViewBook = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;

    @media (max-width: 1280px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const ContentPrimary = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1280px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;
    }
`

export const ContentTitle = styled.a`
    cursor: pointer;
    margin-right: 10px;

    div {
        p {
            text-decoration-line: underline;
        }
    }
`

export const UpdateText = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`

export const Publication = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 3px;
`