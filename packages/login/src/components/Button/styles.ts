import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #55409C;

  display: flex;
  justify-content: center;
  
  button {
    background: none;
    border: none;
    height: 30px;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;

    font-size: 14px;
  
    &:first-child {
    
      svg {
        margin-right: 8px;
      }
    } 
    
    &:nth-child(2) {
      svg {
        margin-left: 8px;
      }
    }
  }
`;