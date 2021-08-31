import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import { useCallback } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input"
import { SignInMutation } from "../services/SignInMutation";
import { Container, FormContainer } from "./styles"
import { useHistory } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const {push} = useHistory()

  const [signIn] = useMutation(SignInMutation)

  const handleSignIn = useCallback(
    async (values: any) => {
      const res = await signIn({variables:{
        email: values.email,
        password: values.password,
      }})
      console.log(res)
      push("/home")
    },
    [signIn,push],
  )  

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={(values)=>handleSignIn(values)}>
      {({ handleChange, handleSubmit, values }) => (
        <FormContainer>
          <Input placeholder="E-mail" onChange={handleChange("email")} value={values.email} />
          <Input placeholder="Password" onChange={handleChange("password")} value={values.password}/>
          <Button onClick={() => handleSubmit()} type="submit">Submit</Button>
        </FormContainer>
      )}
      </Formik>
    </Container>
  )
}

export default LoginForm
