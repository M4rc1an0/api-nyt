import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

export const ButtonIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
`

export const ContentBooks = styled.div`
    width: 100%;
    padding: 0 120px;
`

export const ContentRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const LinkRedirect = styled.a`
    text-decoration: none;
`

export const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
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