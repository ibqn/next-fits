import PropTypes from 'prop-types'

const Product = ({ product }) => {
  const { id, name } = product
  return <div key={id}>{name}</div>
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product
