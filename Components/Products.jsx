import React from 'react'
import styled from 'styled-components'
import { popularProduct } from '../Data'
import ProductMain from './ProductMain'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
        {popularProduct.map((values)=>{
            return(
                <ProductMain value={values} key={values.id}/>
            )
        })}
    </Container>
  )
}

export default Products