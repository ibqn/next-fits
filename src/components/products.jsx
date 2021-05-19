import PropTypes from 'prop-types'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'

import Product from './product'

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
          <Product product={product} />
        ))}
      </ProductsListStyles>
    </>
  )
}

Products.propTypes = {
  page: PropTypes.number,
}

export default Products
