import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Logo } from './components/Logo'
import { AppWrapper } from './styles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <AppWrapper>
      <GlobalStyle />
      <Logo />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : (
          <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
        )}

    </AppWrapper>
  )
}
