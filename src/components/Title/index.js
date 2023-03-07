import * as S from './styles'

const Title = ({text, size, color, weight}) => {
    return (
        <S.TitleH1 size={size} color={color} weight={weight}>
            {text}
        </S.TitleH1>
    )
}

export default Title