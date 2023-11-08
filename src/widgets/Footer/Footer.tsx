import clsx from 'clsx'
import styles from './Footer.module.scss'
import { useContext } from 'react'
import { MainContext } from '../../app/providers/MainContext'

const Footer = () => {
  const { pageLoaded } = useContext(MainContext)

  return (
    <footer className={clsx(styles.footer, pageLoaded && styles.loaded)}>
      <a href="/terms-and-conditions">terms</a>
      <a href="/privacy-policy">policy</a>
      <a href="mailto:team@seen.video">contact</a>
    </footer>
  )
}

export default Footer
