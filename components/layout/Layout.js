import React from 'react'
import { UIProvider } from '../../contexts/UIProvider'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <UIProvider>
        <Navbar />
        {children}
      </UIProvider>
    </>
  )
}

export default Layout
