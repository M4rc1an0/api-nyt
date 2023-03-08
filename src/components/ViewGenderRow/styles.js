import styled from "styled-components";

export const ContainerViewBook = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    padding: 40px 0;
`

export const ContentPrimary = styled.div`
    display: flex;
    flex-direction: column;
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
    margin: 5px 0 10px 0;
`

export const ContentPublications = styled.div`
    display: flex;
    flex-direction: column;
`

export const Publication = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 3px;
`