import Link from 'next/link'
import styled from 'styled-components'
import Cart from './cart'
import Nav from './nav'
import Search from './search'

const Bar = styled.div`
  border-bottom: 10px solid var(--black, black);
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;
`

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: red;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`

const SubBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 1px solid var(--black, black);
`

const Header = () => (
  <header>
    <Bar>
      <Logo>
        <Link href="/">Next Fits</Link>
      </Logo>
      <Nav />
    </Bar>
    <SubBar>
      <Search />
    </SubBar>
    <Cart />
  </header>
)

export default Header
