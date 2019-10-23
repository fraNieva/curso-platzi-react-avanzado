import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { AppWrapper } from './styles'

export const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Navbar />
    </AppWrapper>
  )
}
