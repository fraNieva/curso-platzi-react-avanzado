import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

export const withPhotoCard = graphql(gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);
