import { gql } from "@apollo/client";

const SignInMutation = gql`
  mutation SignInMutation($password: String!, $email: String!) {
    signIn(password: $password, email: $email) {
      token
      user {
        id
      }
    }
  }
`

export {SignInMutation}