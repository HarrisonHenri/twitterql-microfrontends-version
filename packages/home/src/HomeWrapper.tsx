import { ApolloProvider } from '@apollo/client';
import {useAuth} from 'shell/auth'

import HomeContent from './HomeContent';
import { clientFactory } from './services/apollo';


const HomeWrapper = () => {
  const {token} = useAuth()

 return (
    <ApolloProvider client={clientFactory(token)}>
      <HomeContent />
    </ApolloProvider>
  );
};

export default HomeWrapper;
