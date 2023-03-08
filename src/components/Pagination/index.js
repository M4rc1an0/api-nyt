import * as S from './styles'
import TextParagraph from '../TextParagraph'

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
    return (
        <S.ContainerPagination>
            {Array?.from(Array(pages), (item, index) => {
                return <S.ButtonPagination page={index === currentPage} value={index} onClick={(e) => setCurrentPage(e.target.value)}>
                    <TextParagraph type='p' text={index + 1} size='12px' color={index === currentPage ? '#fff' : '#1F2445'} weight='700' />
                </S.ButtonPagination>

            })}
        </S.ContainerPagination>
    )
}

export default Pagination