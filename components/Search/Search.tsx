import { SearchProps } from './Search.props'
import styles from './Search.module.css'
import cn from 'classnames'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { useState } from 'react'
import GlassIcon from './glass.svg'
import { useRouter } from 'next/router'

export const Search = ({ className, ...props }: SearchProps) => {
  const [search, setSearch] = useState<string>('')

  const router = useRouter()

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    })
  }

  const handLeKeyDown = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      goToSearch()
    }
  }

  return (
    <form className={cn(className, styles.search)} {...props} role="search">
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handLeKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
        aria-label="Искать по сайту"
      >
        <GlassIcon />
      </Button>
    </form>
  )
}
