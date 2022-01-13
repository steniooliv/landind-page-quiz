import type { NextPage } from 'next'
import Head from 'next/head';

import { ProductList } from '../components/ProductList';
import { Footer } from '../components/Footer';

import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Produtos - Real Transformação</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>
          Conheça nossos produtos!
        </h1>
        <ProductList />
      </main>
      <Footer />
    </>
  )
}

export default Home
