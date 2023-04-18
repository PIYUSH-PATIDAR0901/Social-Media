import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Tablet } from '../Resonsive'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    position: relative;
    min-width: 250px;
    height: 300px
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #f5fbfd;
    ${Tablet({display: 'flex', alignItems: 'center', justifyContent: 'center'})}
    
    &:hover ${Info}{
        opacity: 1;
    }
`


const Image = styled.img`
    height: 90%;
    width: 85%;
    z-index: 2;
    object-fit: cover;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        background-color: #e9f5f5;
        color: red;
        transform: scale(1.1);
    }
`

const ProductMain = ({value}) => {
  return (
    <Container>
        <Image src={value.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductMain



 