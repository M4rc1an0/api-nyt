import * as S from './styles'
import TextParagraph from '../TextParagraph'

const ViewBookRow = ({ data }) => {
    return (
        <S.ContainerViewBook>
            <S.ContentInfo>
                <S.ContentImage>
                    <S.ImageBook src={data.book_image} />
                </S.ContentImage>
                <S.TitleAndAuthor>
                    <TextParagraph type='h3' text={data.title} size='16px' color='#0E1337' weight='700' />
                    <TextParagraph type='p' text={data.contributor} size='14px' color='#454A67' weight='400' />
                </S.TitleAndAuthor>
                <S.Description>
                    <TextParagraph type='p' text={data.description} size='14px' color='#0E1337' weight='bold' />
                </S.Description>
                <S.OtherInfo>
                    <TextParagraph type='p' text={data.publisher} size='14px' color='#0E1337' weight='bold' />
                    <TextParagraph type='p' text={`Rank: ${data.rank}`} size='14px' color='#0E1337' weight='bold' />
                </S.OtherInfo>
                <S.ButtonBuy onClick={() => window.location.href = data.amazon_product_url}>
                    <TextParagraph type='p' text={`Compre por R$${data.price}`} size='14px' color='#fff' weight='bold' />
                </S.ButtonBuy>
            </S.ContentInfo>
        </S.ContainerViewBook>
    )
}

export default ViewBookRow