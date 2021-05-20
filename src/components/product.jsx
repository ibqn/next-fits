import Link from 'next/link'
import PropTypes from 'prop-types'

import { ProductCard, ProductName, ProductImage } from './styles/product-styles'
import Title from './styles/title'
import PriceTag from './styles/price-tag'
import formatMoney from '../lib/format-money'

const Product = ({ product }) => {
  const {
    id,
    name,
    price,
    description,
    images: [productImage],
  } = product

  const src = productImage?.image?.map(({ url }) => url)

  return (
    <ProductCard>
      <ProductImage src={src} />
      <Title>
        <Link href={`/product/${id}`}>{name}</Link>
      </Title>
      <PriceTag>{formatMoney(price)}</PriceTag>
      <ProductName key={id}>{description}</ProductName>
    </ProductCard>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product
