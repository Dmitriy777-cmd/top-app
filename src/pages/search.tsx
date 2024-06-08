import { Noto_Sans } from 'next/font/google'
import { withLayout } from '../../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../../interfaces/menu.interface'
import { GetStaticProps } from 'next'
import { API } from '../../helpers/api'

const NotoSans = Noto_Sans({ subsets: ['latin'] })

function Search() {
  return <></>
}

export default withLayout(Search)

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
