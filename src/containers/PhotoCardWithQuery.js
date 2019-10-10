import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { GET_PHOTO } from '../hocs/getPhoto'
import { Loading } from '../components/Loading'
// permite utilizar renderProps
import { Query } from 'react-apollo'

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loading />
  if (error) return <p>error</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
