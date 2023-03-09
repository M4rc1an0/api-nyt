import { GlobalContext } from '@/providers'

import * as S from './styles'
import TextParagraph from '../TextParagraph'
import { StarFilled } from '../../../public/icons/starFilled'
import { useContext } from 'react'

const ViewFavoriteBook = ({data}) => {
    const { favoriteBooks, setFavoriteBooks } = useContext(GlobalContext)


    const removeBookFavorite = () => {
        setFavoriteBooks(favoriteBooks.filter((book) => book.title !== data.title))
    }

    return (
        <S.BoxFavorite>
            <S.ImageFavorite src={data.book_image} />
            <S.BoxDescription>
                <TextParagraph type='h2' text={data.title} size='14px' color='#0E1337' weight='bold' />
                <S.ContentBy>
                    <TextParagraph type='p' text={data.contributor} size='12px' color='#454A67' weight='900' />
                    <S.ButtonIconSide onClick={() => removeBookFavorite()}>
                        <StarFilled width='12px' color="#5062F0" />
                    </S.ButtonIconSide>
                </S.ContentBy>
            </S.BoxDescription>
        </S.BoxFavorite>
    )
}

export default ViewFavoriteBook