import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import ProductsData from '../Data/ProductsData';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setProducts(ProductsData)
        return () => {}
    }, [])

    // console.log(ProductsData)
    // console.log(products)

    return (
        <div>
            <div class = "d-flex flex-row justify-content-center mt-5">
            <div>
                <div className="head mb-0">
                    <p> Our latest products: </p>
                </div>
            </div>
            <div className="categories d-flex mb-5">
                <button className="category btn btn-dark ms-3"> All </button>
                <button className="category btn btn-dark ms-3"> Portrait </button>
                <button className="category btn btn-dark ms-3"> Wedding </button>
                <button className="category btn btn-dark ms-3"> Studio </button>
                <button className="category btn btn-dark ms-3"> Street Style</button>
                <button className="category btn btn-dark ms-3"> Magazine </button>
                <button className="category btn btn-dark ms-3"> Fashion Brands</button>
            </div>
            </div>
            
            <div className="products-container">
                <div className='row row-cols-4'>
                {products.length > 0 && products.map((pr, index) => {
                return (
                    <div className='d-flex flex-column'>
                        <p> {pr.title} </p>
                        <img class = "img-thumbnail mx-auto"src = {pr.models[0]} style = {{width: "60%", height: "60%"}}/>
                        <div className="options-btn d-flex flex-column">
                        <button className="booking-btn btn btn-light btn-outline-dark mx-auto mt-3"> Book now </button>
                        <button className="booking-btn btn btn-light btn-outline-dark mx-auto mt-1"> + Save to cart </button>
                        </div>
                        
                    </div>
                )
                })}
                </div>
            
            </div>
            
        </div>
    )
}