import { useRouter } from 'next/router'
import Products from '../../components/products'

const ProductPage = () => {
  const { query } = useRouter()

  const page = parseInt(query.page)

  return <Products page={page} />
}

export default ProductPage
