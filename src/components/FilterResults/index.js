import * as S from './styles'
import TextParagraph from '../TextParagraph'

const FilterResult = ({ title, itensPerPage, setItensPerPage }) => {
    return (
        <S.ContainerFilter>
            <TextParagraph type='h2' text={title} size={24} color='#010311' weight='700' />
            <S.ContentActions>
                <TextParagraph type='p' text='Exibir' size='12px' color='#000000' />
                <S.Select value={itensPerPage} onChange={setItensPerPage}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </S.Select>
                <TextParagraph type='p' text='por vez' size='12px' color='#000000' />
            </S.ContentActions>
        </S.ContainerFilter>
    )
}

export default FilterResult