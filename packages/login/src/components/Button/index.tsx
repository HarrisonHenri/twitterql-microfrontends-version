import { ButtonHTMLAttributes } from "react"

import { Container } from "./styles"

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({...props})=>{
  return (
  <Container>
    <button {...props}/>
  </Container>
  )
}

export {Button}