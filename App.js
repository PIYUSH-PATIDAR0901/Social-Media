
import styled from 'styled-components';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route exact element={<Home/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='Register' element={<Register/>}></Route>
            <Route path='Login' element={<Login/>}></Route>
            <Route path='Cart' element={<Cart/>}></Route>
            <Route path='Product/:cat' element={<Product/>}></Route>
            <Route path='ProductList' element={<ProductList/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </Container>
  );
}

export default App;
