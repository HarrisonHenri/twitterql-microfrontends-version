import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import { useCallback } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input"
import { SignInMutation } from "../services/SignInMutation";
import { Container, FormContainer } from "./styles"
import { useHistory } from 'react-router-dom';
import {useAuth} from 'shell/auth'

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const {push} = useHistory()
  const {signIn} = useAuth()

  const [signInMutation] = useMutation(SignInMutation)

  const handleSignIn = useCallback(
    async (values: any) => {
      const {data} = await signInMutation({variables:{
        email: values.email,
        password: values.password,
      }})
      console.log(data)
      signIn({ userId:data.signIn.user.id, token:data.signIn.token })
      push("/home")
    },
    [signIn,push,signInMutation],
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
