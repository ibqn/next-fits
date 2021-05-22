import PropTypes from 'prop-types'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'

import Product from './product'
import { initializeApollo } from '../apollo/client'

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      status
      price
      published_at
      images {
        image {
          id
          url
        }
      }
    }
  }
`

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`

const Products = ({ page }) => {
  const { data, loading, error } = useQuery(GET_PRODUCTS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <div>products on {page}</div>
      <ProductsListStyles>
        {data?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
    </>
  )
}

Products.propTypes = {
  page: PropTypes.number,
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_PRODUCTS,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Products
