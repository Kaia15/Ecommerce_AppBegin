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
            <div className="products-container" style = {{display: "grid", gridTemplateColumns: "auto auto auto"}}>
            {products.length > 0 && products.map(pr => {
                return (
                    <div>
                        <img src = {pr.models[0]} style = {{width: "60%", height: "60%"}}/>
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}