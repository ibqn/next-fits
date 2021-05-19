import styled from 'styled-components'
import PropTypes from 'prop-types'

import Meta from '../components/meta'
import Header from '../components/header'

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`

const Page = ({ children }) => (
  <>
    <Meta />
    <Header />
    <InnerStyles>{children}</InnerStyles>
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
