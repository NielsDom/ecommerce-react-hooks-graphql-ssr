import React, { useEffect } from "react"
import { withApollo } from "../lib/apollo"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { GET_PRODUCTS } from "../queries/productsQuery"

const Home = () => {
  useEffect(() => {
    console.log("yo")
  }, [])
  const { loading, error, data } = useQuery(GET_PRODUCTS)
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
