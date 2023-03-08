import * as S from './styles'
import TextParagraph from '../TextParagraph'

const ViewBook = ({ data }) => {

    function ReplaceDate(data) {
        return data.replaceAll('-', '/')
    }

    return (
        <S.ContainerViewBook>
            <S.ContentPrimary>
                <S.ContentTitle href={'/'}>
                    <TextParagraph type='p' text={data.display_name} size='20px' color='#5062F0' />
                </S.ContentTitle>
                <S.UpdateText>
                    {data.updated === 'WEEKLY' &&
                        <TextParagraph type='p' text='Atualizado semanalmente' size='10px' color='#9296AC' />
                    }
                    {data.updated === 'MONTHLY' &&
                        <TextParagraph type='p' text='Atualizado mensalmente' size='10px' color='#9296AC' />
                    }
                </S.UpdateText>
            </S.ContentPrimary>
            <S.Publication>
                <TextParagraph type='p' text='Última publicação: ' size='12px' color='#454A67' />
                <TextParagraph type='p' text={ReplaceDate(data.newest_published_date)} size='12px' color='#454A67' />
            </S.Publication>
            <S.Publication>
                <TextParagraph type='p' text='Publicação mais antiga: ' size='12px' color='#454A67' />
                <TextParagraph type='p' text={ReplaceDate(data.oldest_published_date)} size='12px' color='#454A67' />
            </S.Publication>
        </S.ContainerViewBook>
    )
}

export default ViewBook