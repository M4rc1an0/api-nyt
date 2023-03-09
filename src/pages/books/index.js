import * as S from './styles'
import { Header, TextParagraph, Input, FilterResult, ViewBook, ViewBookRow, Modal, SidebarFavorite, ViewFavoriteBook } from '../../components'
import { GlobalContext } from '@/providers'
import { Star } from '../../../public/icons/star'
import { StarFilled } from '../../../public/icons/starFilled'

import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

export default function Books() {
    const [books, setBooks] = useState()
    const [itensPerPage, setItensPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const [modeLayout, setModeLayout] = useState(false)
    const [searchCategory, setSearchCategory] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [openFavorite, setOpenFavorite] = useState(false)

    const { favoriteBooks } = useContext(GlobalContext)

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
                    }).catch(() => {
                        setIsOpen(true)
                    })
        }
    }, [gender])

    useEffect(() => {
        setCurrentPage(0)
      }, [itensPerPage, modeLayout])

    return (
        <S.Container>
            <Header>
                <S.ContentTitleFavorite>
                    <S.LinkRedirect href='/'>
                        <TextParagraph type='h1' text='Bloom Books' size={32} color='#fff' weight='700' />
                    </S.LinkRedirect>
                    <S.ButtonIcon active={openFavorite} onClick={() => setOpenFavorite(!openFavorite)}>
                        <Star />
                    </S.ButtonIcon>
                </S.ContentTitleFavorite>
                <S.ContentInputButton>
                    <S.ContentInput>
                        <Input
                            value={searchCategory}
                            onChange={(e) => setSearchCategory(e.target.value)}
                            onClick={() => router.push(`/books?gender=${searchCategory}`)}
                        />
                    </S.ContentInput>
                    <S.ButtonIcon active={openFavorite} onClick={() => setOpenFavorite(!openFavorite)}>
                        <Star />
                    </S.ButtonIcon>
                </S.ContentInputButton>
            </Header>
            <S.ContentPage>
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
                {openFavorite &&
                    <SidebarFavorite>
                        <S.ContentFavorites>
                            <TextParagraph type='p' text='Favoritos' size='20px' color='#0B1A8E' weight='900' />
                            {favoriteBooks.map((fav, index) => {
                                return (
                                    <ViewFavoriteBook data={fav} key={index} />
                                )
                            })}
                        </S.ContentFavorites>
                    </SidebarFavorite>
                }
            </S.ContentPage>
            {isOpen &&
                <Modal>
                    <S.ContentModal>
                        <TextParagraph type='p' text='Algo deu errado, tente novamente mais tarde!' size='20px' color='#5062F0' weight='700' />
                        <S.ButtonReturn onClick={() => router.push('/')}>Voltar</S.ButtonReturn>
                    </S.ContentModal>
                </Modal>
            }
        </S.Container>
    )
}