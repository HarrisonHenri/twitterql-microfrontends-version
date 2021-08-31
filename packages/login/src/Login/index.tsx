import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apollo";
import LoginForm from "./login";

const Login = () => {
  return (
    <ApolloProvider client={client}>
      <LoginForm />
    </ApolloProvider>
  )
}

export default Login
