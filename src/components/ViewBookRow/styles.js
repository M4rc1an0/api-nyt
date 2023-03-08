import styled from "styled-components";

export const ContainerViewBook = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
    width: 200px;
`

export const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContentImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const TitleAndAuthor = styled.div`
    /* display: flex; */
    gap: 5px;
`

export const Description = styled.div`
    padding: 10px 0;
`

export const OtherInfo = styled.div`

    div {
        padding: 5px 0;
    }
`

export const ImageBook = styled.img`
    width: 165px;
    padding: 15px 30px;
`

export const ButtonBuy = styled.button`
    cursor: pointer;
    background: #5062F0;
    max-width: 150px;
    padding: 8px 12px;
    margin: 10px 0;
    border-radius: 24px;
    border: none;
`