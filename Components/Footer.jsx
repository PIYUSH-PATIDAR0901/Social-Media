import { Facebook, FmdGood, Instagram, MailOutlineOutlined, Phone, Pinterest, Twitter} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile, Tablet } from '../Resonsive'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
    ${Tablet({flexDirection: 'column'})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20;
`

const Logo = styled.h1``
const Desc = styled.p``
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}

`

const Title = styled.div`
    margin-bottom: 30px;
    font-weight: 1000;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex:
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: '#fff8f8'})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>PIYUSH..</Logo>
            <Desc>There are many variations of passages Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum et necessitatibus illo obcaecati quae, magnam vel dolore adipisci blanditiis odio a ratione, numquam iste! Lorem ipsum dolor sit consequatur?</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Pinterest/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                {/* <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem> */}
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <FmdGood style={{marginRight: '10px'}}/> MII 200 USA 983360
            </ContactItem>
            <ContactItem>
              <Phone style={{marginRight: '10px'}}/>  +1 234 56 78
            </ContactItem>
            <ContactItem>
              <MailOutlineOutlined style={{marginRight: '10px'}}/>  Conatct@patidar.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer