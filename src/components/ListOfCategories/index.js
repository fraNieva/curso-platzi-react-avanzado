import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { Loading } from '../Loading'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] =  useState([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-franieva.franieva.now.sh/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response)
      setLoading(false)
    })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed != newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  
  const renderList = (fixed) => (
    loading ? (
      <Loading />
    ) : (
      <List fixed={fixed}>
        { categories.map(category => <Item key={category.id}><Category {...category} /></Item>) }
      </List>
    )

    
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
