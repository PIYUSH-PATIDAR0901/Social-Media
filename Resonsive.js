import { css } from "styled-components"

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 380px){
        ${props}
      }
    `
    
}

export const Tablet =(props)=>{
  return css`
    @media only screen and (max-width: 520px){
        ${props}
      }
    `
}