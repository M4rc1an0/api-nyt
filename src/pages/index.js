import * as S from '../styles/styles'
import { Header, Input, FilterResult, TextParagraph, ViewGender, ViewGenderRow, Modal, SidebarFavorite } from '../components'
import { Star } from '../../public/icons/star'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Home() {
  const [dataBooks, setDataBooks] = useState()
  const [itensPerPage, setItensPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)
  const [modeLayout, setModeLayout] = useState(false)
  const [searchCategory, setSearchCategory] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [openFavorite, setOpenFavorite] = useState(false)

  const router = useRouter()

  const pages = dataBooks && Math.ceil(dataBooks?.results?.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = dataBooks?.results.slice(startIndex, endIndex)

  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=dBuIT7cVmQlS3wesMMkrKJuPGMssjMny')
      .then((response) => {
        setDataBooks(response.data)
      }).catch(() => {
        setIsOpen(true)
      })
  }, [])

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
          title='Gêneros'
          itensPerPage={itensPerPage}
          setItensPerPage={(e) => setItensPerPage(Number(e.target.value))}
          modeLayout={modeLayout}
          setModeLayout={setModeLayout}
        />
        <S.ContentGender>
          <S.ContentListage>
            {!modeLayout &&
              <>
                {currentItens && currentItens?.map((gender, index) => {
                  return (
                    <ViewGender data={gender} key={index} />
                  )
                })}
              </>
            }
            {modeLayout &&
              <S.ContentRow>
                {currentItens && currentItens?.map((gender, index) => {
                  return (
                    <ViewGenderRow data={gender} key={index} />
                  )
                })}
              </S.ContentRow>
            }
          </S.ContentListage>
        </S.ContentGender>
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

          </SidebarFavorite>
        }
      </S.ContentPage>
      {isOpen &&
        <Modal>
          <S.ContentModal>
            <TextParagraph type='p' text='Algo deu errado, tente novamente mais tarde!' size='20px' color='#5062F0' weight='700' />
            <S.ButtonReturn onClick={() => setIsOpen(false)}>Voltar</S.ButtonReturn>
          </S.ContentModal>
        </Modal>
      }
    </S.Container>
  )
}
