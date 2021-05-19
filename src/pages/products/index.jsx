import { useRouter } from 'next/router'

const Products = () => {
  const { query } = useRouter()

  const page = parseInt(query.page)

  return <div>{`products on page ${page}`}</div>
}

export default Products
