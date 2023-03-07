import * as S from '../styles/styles'
import { Header, Title, Input, FilterResult, TextParagraph } from '../components'
import { Star } from '../../public/icons/star'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [dataBooks, setDataBooks] = useState()

  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=dBuIT7cVmQlS3wesMMkrKJuPGMssjMny')
    .then((response) => {
      setDataBooks(response.data)
    }).catch((error) => {
      alert(error)
    })
  }, [])

  console.log(dataBooks.results, 'BOOKS')

  return (
    <S.Container>
      <Header>
        <TextParagraph type='h1' text='Bloom Books' size={32} color='#fff' weight='700' />
        <Input />
        <S.ButtonIcon>
          <Star />
        </S.ButtonIcon>
      </Header>
      <FilterResult title='Gêneros'/>
      {dataBooks && dataBooks.results.map((book, index) => {
        return (
          <>

          </>
        )
      })}
    </S.Container>
  )
}
