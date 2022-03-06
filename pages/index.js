import Head from 'next/head'
import React from 'react'
import Portfolio from '../components/portfolio/Portfolio'
import { UIProvider } from '../contexts/UIProvider'

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Mark Christian Albinto</title>
      </Head>
      <UIProvider>
        <Portfolio />
      </UIProvider>
    </>
  )
}

export default PortfolioPage
