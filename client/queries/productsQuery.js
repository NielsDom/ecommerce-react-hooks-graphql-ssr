import gql from "graphql-tag"

export const GET_PRODUCTS = gql`
  {
    products {
      id
      category {
        id
        title
      }
      subcategory
      colors
      price
      title
      picture
      description
      comments {
        id
        message
        rating
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  {
    productscategories {
      id
      title
      subcategories {
        id
        title
      }
    }
  }
`
