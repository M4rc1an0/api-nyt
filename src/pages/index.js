import * as S from '../styles/styles'
import { Header, Input, FilterResult, TextParagraph, ViewGender, ViewGenderRow } from '../components'
import { Star } from '../../public/icons/star'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [dataBooks, setDataBooks] = useState()
  const [itensPerPage, setItensPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)
  const [modeLayout, setModeLayout] = useState(false)

  const pages = dataBooks && Math.ceil(dataBooks?.results?.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = dataBooks?.results.slice(startIndex, endIndex)

  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=dBuIT7cVmQlS3wesMMkrKJuPGMssjMny')
      .then((response) => {
        setDataBooks(response.data)
      }).catch((error) => {
        alert(error)
      })
  }, [])

  const searchGender = () => {
    
  }

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <S.Container>
      <Header>
        <S.LinkRedirect href='/'><TextParagraph type='h1' text='Bloom Books' size={32} color='#fff' weight='700' /></S.LinkRedirect>
        <Input />
        <S.ButtonIcon>
          <Star />
        </S.ButtonIcon>
      </Header>
      <FilterResult
        title='Gêneros'
        itensPerPage={itensPerPage}
        setItensPerPage={(e) => setItensPerPage(Number(e.target.value))}
        modeLayout={modeLayout}
        setModeLayout={setModeLayout}
      />
      <S.ContentGender>
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
    </S.Container >
  )
}
