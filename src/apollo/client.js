import { useMemo } from 'react'
import {
  ApolloClient,
  gql,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const httpLink = new HttpLink({
  uri: process.env.URI_ENDPOINT,
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }

  if (networkError) {
    console.log(
      `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
    )
  }
})

let apolloClient = null

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  })
}

const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

const useApollo = (initialState) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}

// Test query
const TEST_QUERY = gql`
  query {
    productImages {
      image {
        name
        url
      }
      altText
    }
  }
`

const testApollo = async () => {
  const client = initializeApollo()

  try {
    const result = await client.query({
      query: TEST_QUERY,
    })

    const { data } = result

    console.log('🚀 test data', data)
  } catch (error) {
    console.log(`error occurred ${error}`)
  }
}

testApollo()

export { initializeApollo, useApollo }
