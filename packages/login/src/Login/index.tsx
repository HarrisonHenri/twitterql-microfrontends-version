import { Formik } from "formik";
import { Button } from "../components/Button";
import { Input } from "../components/Input"
import { Container, FormContainer } from "./styles"

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={(values)=>console.log(values)}>
      {({ handleChange, handleSubmit, values }) => (
        <FormContainer>
          <Input placeholder="E-mail" onChange={handleChange("email")} value={values.email} />
          <Input placeholder="Password" onChange={handleChange("password")} value={values.password}/>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </FormContainer>
      )}
      </Formik>
    </Container>
  )
}

export default Login
