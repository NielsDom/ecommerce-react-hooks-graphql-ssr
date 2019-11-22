import { useState, useEffect } from "react"
import Head from "next/head"
import { withApollo } from "../../lib/apollo"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import Header from "./Header"
import HeaderBanner from "./HeaderBanner"
import { GET_CATEGORIES } from "../../queries/productsQuery"

const Layout = ({ children, title }) => {
  const [openMenu, setopenMenu] = useState(null)

  const _openMenu = x => setopenMenu(x)

  useEffect(() => {
    console.log(openMenu)
  }, [openMenu])

  const { loading, error, data } = useQuery(GET_CATEGORIES)

  if (error) return <div>error</div>
  if (loading) return <div>loading</div>

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header _openMenu={_openMenu} />
      {openMenu &&
        (loading ? (
          <div>Loading...</div>
        ) : (
          <HeaderBanner
            _openMenu={_openMenu}
            openMenu={openMenu}
            GET_CATEGORIES={data.productscategories}
            data={data}
          />
        ))}
      {children}
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default withApollo(Layout)
