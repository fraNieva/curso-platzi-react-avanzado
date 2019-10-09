import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { getPhoto } from '../hocs/getPhoto'
// permite utilizar renderProps
import { Query } from 'react-apollo'

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={getPhoto} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return null
      const { photo = {} } = data
      return <PhotoCard {...photo} />
    }}
  </Query>
)
