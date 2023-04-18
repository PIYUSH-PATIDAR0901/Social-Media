import styled from 'styled-components'
import React from 'react'
import { Categories } from '../Data'
import CategoriesItems from './CategoriesItems'
import { mobile, Tablet } from '../Resonsive'


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between; 
    ${mobile({padding: '0px', flexDirection: 'column'})}
    ${Tablet({padding: '0px', flexDirection: 'column'})}
`

const CategoriesMain = () => {
  return (
    <Container>
        {Categories.map((items)=>{
          return(  <CategoriesItems items={items} key={items.id}/>)
        })}
    </Container>
  )
}

export default CategoriesMain