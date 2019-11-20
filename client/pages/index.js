import React, { useEffect } from "react"
import Head from "next/head"
import { withApollo } from "../lib/apollo"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_EMAIL = gql`
  {
    users {
      email
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
      {data.users.map(x => (
        <div key={x.id}>{x.email}</div>
      ))}
    </div>
  )
}

export default withApollo(Home)
