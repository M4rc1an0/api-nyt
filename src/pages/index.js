import * as S from '../styles/styles'
import { Header, Input, FilterResult, TextParagraph, ViewBook } from '../components'
import { Star } from '../../public/icons/star'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [dataBooks, setDataBooks] = useState()
  const [itensPerPage, setItensPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)

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

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <S.Container>
      <Header>
        <TextParagraph type='h1' text='Bloom Books' size={32} color='#fff' weight='700' />
        <Input />
        <S.ButtonIcon>
          <Star />
        </S.ButtonIcon>
      </Header>
      <FilterResult title='Gêneros' itensPerPage={itensPerPage} setItensPerPage={(e) => setItensPerPage(Number(e.target.value))} />
      <S.ContentGender>
        {currentItens && currentItens?.map((book, index) => {
          return (
            <ViewBook data={book} key={index} />
          )
        })}
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
    </S.Container>
  )
}
