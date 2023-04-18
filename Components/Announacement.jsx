import styled from 'styled-components'
import React from 'react'
import { Tablet } from '../Resonsive'

const Conatiner = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    font-size: 15px;
    font-weight: 500;
    ${Tablet({width: '100%'})}
`

const Announacement = () => {
  return (
    <Conatiner>
        Super Deal! Free Shipping on Orders Over 500Rs/-
    </Conatiner>
  )
}

export default Announacement;