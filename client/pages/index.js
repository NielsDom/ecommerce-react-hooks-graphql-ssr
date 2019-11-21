import React, { useEffect } from "react"
import { withApollo } from "../lib/apollo"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_EMAIL = gql`
  {
    products {
      id
      category
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

const Home = () => {
  useEffect(() => {
    console.log("yo")
  }, [])
  const { loading, error, data } = useQuery(GET_EMAIL)
  {
    console.log(data)
  }

  if (loading) return <div>Loading</div>
  return (
    <div>
      <div>
        {data.products.map(x => (
          <div key={x.id}>{x.title}</div>
        ))}
      </div>
    </div>
  )
}

export default withApollo(Home)
