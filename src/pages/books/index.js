import * as S from './styles'
import { Header, TextParagraph, Input, FilterResult, ViewBook, ViewBookRow } from '../../components'
import { Star } from '../../../public/icons/star'

import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Books() {
    const [books, setBooks] = useState()
    const [itensPerPage, setItensPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const [modeLayout, setModeLayout] = useState(false)

    const router = useRouter()
    const { gender } = router.query

    const pages = books && Math.ceil(books?.results?.books.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = books?.results.books.slice(startIndex, endIndex)

    useEffect(() => {
        {
            gender &&
                axios.get(`https://api.nytimes.com/svc/books/v3/lists/${gender}.json?api-key=dBuIT7cVmQlS3wesMMkrKJuPGMssjMny`)
                    .then((response) => {
                        setBooks(response.data)
                    }).catch((error) => {
                        alert(error)
                    })
        }
    }, [gender])

    console.log(books, 'BOOKS')

    console.log(currentItens, 'currentItens')


    return (
        <S.Container>
            <Header>
                <S.LinkRedirect href='/'>
                    <TextParagraph type='h1' text='Bloom Books' size={32} color='#fff' weight='700' />
                </S.LinkRedirect>
                <Input />
                <S.ButtonIcon>
                    <Star />
                </S.ButtonIcon>
            </Header>
            <FilterResult
                title={books?.results?.display_name}
                itensPerPage={itensPerPage}
                setItensPerPage={(e) => setItensPerPage(Number(e.target.value))}
                modeLayout={modeLayout}
                setModeLayout={setModeLayout}
            />
            <S.ContentBooks>
                {!modeLayout &&
                    <>
                        {currentItens && currentItens?.map((book, index) => {
                            return <ViewBook data={book} key={index} />
                        })}
                    </>
                }
                {modeLayout &&
                    <S.ContentRow>
                        {currentItens && currentItens?.map((book, index) => {
                            return <ViewBookRow data={book} key={index} />
                        })}
                    </S.ContentRow>
                }
            </S.ContentBooks>
            <S.ContainerPagination>
                {Array.from(Array(pages), (item, index) => {
                    return <S.ButtonPagination
                        page={currentPage == index}
                        value={index}
                        onClick={(e) => setCurrentPage(e.target.value)}
                        key={index}>
                        {index + 1}
                    </S.ButtonPagination>
                })}
            </S.ContainerPagination>
        </S.Container>
    )
}