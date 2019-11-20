import React, { useEffect } from "react"
import Head from "next/head"
import { withApollo } from "../lib/apollo"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_EMAIL = gql`
  {
    products {
      id
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
      {data.products.map(x => (
        <div key={x.id}>{x.title}</div>
      ))}
    </div>
  )
}

export default withApollo(Home)
