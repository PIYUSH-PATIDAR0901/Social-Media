import React from 'react'
import Slider from '../Components/Slider'
import CategoriesMain from '../Components/CategoriesMain'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'

const Home = () => {
    return (
        <>
            <Slider/>
            <CategoriesMain/>
            <Products/>
            <Newsletter/>
        </>
    )
}

export default Home