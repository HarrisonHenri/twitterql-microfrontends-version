import {ApolloClient, InMemoryCache} from '@apollo/client'

const clientFactory = (token:string) =>{
  return new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}

export {clientFactory}