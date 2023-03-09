import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

export const ContentPage = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    margin-top: 50px;

    @media (max-width: 768px) {
        margin-top: 110px;
    }
`

export const ContentTitleFavorite = styled.div`
    display: flex;
    align-items: center;

    button {
        display: none;

        @media (max-width: 768px) {
            display: initial;
        }
    }

    @media (max-width: 992px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        justify-content: space-between;
        width: 100%;
    }
`

export const ContentInputButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 100%;

    button {
        margin: 0 10px;
        display: initial;
        @media (max-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 992px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const ContentInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 65%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const ButtonIcon = styled.button`
    cursor: pointer;
    width: 64px;
    height: 53px;
    background-color: ${(props) => props.active ? '#0B1A8E' : 'transparent'};
    border: none;
    outline: none;

    @media (max-width: 768px) {
        height: 52px;

    }
`

export const ContentGender = styled.div`
    width: 100%;
    padding: 0 120px;
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
`

export const ContentListage = styled.div`

`

export const LinkRedirect = styled.a`
    text-decoration: none;
`

export const ContentRow = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px 10px;
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
    color: ${(props) => props.page ? '#fff' : '#1F2445'};
    width: 30px;
    height: 30px;
`

export const ContentModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const ButtonReturn = styled.button`
    cursor: pointer;
    background: #5062F0;
    color: #fff;
    max-width: 150px;
    padding: 8px 12px;
    margin-top: 10px;
    border-radius: 24px;
    border: none;
`