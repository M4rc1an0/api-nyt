import * as S from './styles'
import TextParagraph from '../TextParagraph'

const FilterResult = ({title}) => {
    return (
        <S.ContainerFilter>
            <TextParagraph type='h2' text={title} size={24} color='#010311' weight='700' />
            <S.ContentActions>
                Exibir
            </S.ContentActions>
        </S.ContainerFilter>
    )
}

export default FilterResult