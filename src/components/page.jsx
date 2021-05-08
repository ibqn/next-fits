import Meta from '../components/meta'
import Header from '../components/header'

const Page = ({ children }) => (
  <div>
    <Meta />
    <Header />
    {children}
  </div>
)

export default Page
