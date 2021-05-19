import { useRouter } from 'next/router'
import Products from '../../components/products'

const ProductPage = () => {
  const { query } = useRouter()

  const page = parseInt(query.page)

  return (
    <div>
      <Products page={page} />
    </div>
  )
}

export default ProductPage
