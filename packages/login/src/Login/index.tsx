import { Input } from "../components/Input"
import { Container, FormContainer } from "./styles"

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <Input placeholder="E-mail"/>
        <Input placeholder="Password"/>
      </FormContainer>
    </Container>
  )
}

export default Login
