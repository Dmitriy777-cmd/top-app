import { Noto_Sans } from 'next/font/google'
import { Button } from '../../components/Button/Button'
import { Htag } from '../../components/Htag/Htag'
import { Input, P, Rating, Tag, Textarea } from '../../components'
import { useState } from 'react'
import { withLayout } from '../../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../../interfaces/menu.interface'
import { GetStaticProps } from 'next'
import { API } from '../../helpers/api'

const NotoSans = Noto_Sans({ subsets: ['latin'] })

function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>

      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="тест" />
      <Textarea placeholder="тест area" />
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  })

  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
