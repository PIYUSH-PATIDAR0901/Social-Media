import { Remove, AddOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import Newsletter from '../Components/Newsletter'
import { mobile, Tablet } from '../Resonsive'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: '10px', flexDirection: 'column'})}
    ${Tablet({padding: '15px', flexDirection: 'column'})}
`
const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: '40vh'})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: '0px 10px'})}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`


const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between
    ${mobile({width: '100%'})}
    ${Tablet({width: '100%'})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 3px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`


const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: '100%'})}
    ${mobile({width: '100%'})}
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type) =>{
        if(type === "dec"){
           quantity > 1 && setQuantity(quantity - 1)
        }else{
            setQuantity(quantity + 1)
        }
    }
  return (
    <Container>
        <Wrapper>
            <ImageContainer>
                <Image src='https://cdn.luxatic.com/wp-content/uploads/2021/04/What-exactly-is-a-jumpsuit.jpg'/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem excepturi asperiores repellendus dolores, iure error amet, commodi quasi omnis ipsa at quod. Dolore quidem optio error minima distinctio ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque!</Desc>
                <Price>Rs/- 500</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color: </FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color='darkblue'/>
                        <FilterColor color='gray'/>
                        <FilterColor color='maroon'/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={() => handleQuantity('dec')}/>
                        <Amount>{quantity}</Amount>
                        <AddOutlined onClick={() => handleQuantity('inc')}/>
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
    </Container>
  )
}

export default Product