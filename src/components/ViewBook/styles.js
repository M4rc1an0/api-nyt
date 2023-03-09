import styled from "styled-components";

export const ContainerViewBook = styled.div`
    display: flex;
    margin: 15px 0;
`

export const ContentInfo = styled.div`

`

export const TitleAndAuthor = styled.div`
    display: flex;
    align-items: center;
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
    padding: 0 30px;

    @media (max-width: 1280px) {
        width: 200px;
    }
`

export const ButtonBuy = styled.button`
    cursor: pointer;
    background: #5062F0;
    padding: 8px 12px;
    margin: 10px 0;
    border-radius: 24px;
    border: none;
`

export const ButtonFavorite = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`