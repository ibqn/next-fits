import styled from 'styled-components'

import Meta from '../components/meta'
import Header from '../components/header'

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`

const Page = ({ children }) => (
  <div>
    <Meta />
    <Header />
    <InnerStyles>{children}</InnerStyles>
  </div>
)

export default Page
