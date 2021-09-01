import { gql } from "@apollo/client";

const TweetsQuery = gql`
  query TweetsQuery($first: Float!) {
    tweets(first: $first) {
      edges {
        cursor
        node {
          id
          author {
              id
              name
          }
          description
          likes
          createdAt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`

export {TweetsQuery}