import React from "react";
import HomeStyle from "./home.module.css"
import Products from '../Products/Products(1)'

export default function Home() {
    return (
        <div>
            <div className = {HomeStyle.bannerContainer}>
                <img src = "https://i.pinimg.com/564x/88/38/af/8838af25455000149f9fbd1b08dc236d.jpg" class = "me-1"></img>
                <img src = "https://i.pinimg.com/236x/63/44/da/6344da988a045ad2dd26e5015c8c0902.jpg" class = "me-1"/>
                <img src = "https://i.pinimg.com/236x/74/81/98/748198fde2961166900a5f36d201320f.jpg" class = "me-1"/>
                <img src = "https://i.pinimg.com/236x/b1/44/87/b144871ddd0a0c694fa62000f1d56ac5.jpg" class = "me-1"/>
                <img src = "https://i.pinimg.com/236x/ad/b9/8c/adb98c965c92486c97446f567fe8084b.jpg" class = ""/>
                
            </div>
            
            <div class = "mb-5">
                <h2> Welcome to BeU Visuals </h2>
                <p> Believe us, we will let you be yourself in every shoots. </p>
            </div>

            <Products />
        </div>
    )

    
}