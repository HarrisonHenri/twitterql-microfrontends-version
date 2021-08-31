import { InputHTMLAttributes } from "react"

import { Container } from "./styles"

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...props})=>{
  return <Container {...props}/>
}

export {Input}
