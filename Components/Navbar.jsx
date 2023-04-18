import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import {mobile, Tablet} from '../Resonsive'
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  margin-top: 8px;
  ${mobile({height: '50px'})}
  ${Tablet({height: '65px'})}
`;
const Wrapper = styled.div`
  padding: 10px, 20px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  ${mobile({padding: '10px 0px'})}
  ${Tablet({padding: '12px 0px'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
`;

const Language = styled.div`
  font-size: 14px;
  ${mobile({display: 'none'})}
  ${Tablet({display: 'none'})}
`;

const SearchConatiner = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-item: center;
  margin-left: 18px;
  padding: 5px;
  height: 20px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 0px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: flex-end;
  ${mobile({flex: '2', justifyContent: 'center'})}
  ${Tablet({flex: '3', justifyContent: 'center'})}
`;

const Input = styled.input`
  border: none;
  ${mobile({width: '50px'})}
  ${Tablet({width: '128px'})}
`;

const Logo = styled.h1`
margin-top: 0px;
font-weight: bold;
${mobile({fontSize: '24px'})}
${Tablet({fontSize: '28px'})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 25px;
  ${mobile({fontSize: '12px', marginLeft:'10px'})}
  ${Tablet({fontSize: '16px', marginLeft:'13px'})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchConatiner>
            <Input placeholder="Search"/>
            <Search
              style={{ color: "gray", fontSize: "16px", marginTop:'3px' }}
            />
          </SearchConatiner>
        </Left>
        <Center>
          <Logo><Link to='/' style={{textDecoration: "none", color: "black"}}> PIYUSH.</Link></Logo>
        </Center>
        <Right>
          <MenuItem><Link to='Register' style={{textDecoration: "none", color: "black"}}>REGISTER</Link></MenuItem>
          <MenuItem><Link to='Login' style={{textDecoration: "none", color: "black"}}> SIGN-IN</Link></MenuItem>
          <MenuItem><Link to='Cart'>
              <ShoppingCartOutlined />
          </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
