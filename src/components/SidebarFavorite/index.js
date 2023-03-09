import * as S from './styles'

const SidebarFavorite = ({children}) => {
    return (
        <S.OpacitySidebar>
            <S.Sidebar>
                {children}
            </S.Sidebar>
        </S.OpacitySidebar>
    )
}

export default SidebarFavorite