import { FC, ReactNode, useEffect, useState } from 'react'
import Header from '../../widgets/Header/Header'
import Footer from '../../widgets/Footer/Footer'
import { MainContext } from './MainContext'
import { WithScrollSmoother } from './WithScrollSmoother'
import { preloader } from '../../utils/preloader'

interface IProps {
  children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>('')
  const [pageLoaded, setPageLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setPageLoaded(true), 100)
  }, [])

  return (
    <MainContext.Provider
      value={{
        pageLoaded,
        setPageLoaded,
        currentPage,
        setCurrentPage,
      }}
    >
      <Header />
      <WithScrollSmoother>{children}</WithScrollSmoother>
      <Footer />
    </MainContext.Provider>
  )
}
