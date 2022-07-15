import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Home.module.css'

export const Layout: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
};
