import React, { useEffect } from "react";
import './header.css';
import {
    Link
} from "react-router-dom";
import koovslogo from '../../assets/images/KoovsLogo.png';
import koovsicon from '../../assets/images/Icon.png';
import { loadHeaderCategory } from "../../api/commonApi";



function Header() {

useEffect(()=>{
loadHeaderCategory();
},[])
    return (
    <header>
    <div className="top-nav">
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' for="menu-toggle">
            <div className='menu-button'></div>
        </label>
        <ul className="menu">
            <li className="main-menu">
                <ul><span>Men </span>
                    <li> View all</li>
                    <li> New arrivals</li>
                    <li><span>Clothing </span>
                        <ul>
                            <li>All clothing </li>
                            <li>T-shirts, Tops, Shirts </li>
                            <li>Sweatshirts</li>
                            <li>Dresses, Skirts</li>
                            <li>Knitwear</li>
                            <li>Coats, Jackets </li>
                            <li>Trousers, Jeans, Shorts </li>
                            <li>Underwear, Swimwear, Activewear</li>
                        </ul>

                    </li>
                    <li>Footwear</li>
                    <li> Accessories</li>
                </ul>
            </li>
            <li className="main-menu">
                <ul><span>Women </span>
                    <li> View all</li>
                    <li> New arrivals</li>
                    <li>Clothing </li>
                    <li>Footwear</li>
                    <li> Accessories</li>
                </ul>
            </li>
            <li className="main-menu">
                <ul><span>Pre Loved </span>
                    <li> View all</li>
                    <li>Clothing </li>
                    <li>Footwear</li>
                    <li> Accessories</li>
                </ul>
            </li>
            <li className="main-menu">
                <ul>
                    <li><span>Live shopping</span></li>
                    <li><span>Influencer collaborations</span></li>
                    <li><span>Mid season sale</span></li>
                </ul>
            </li>
            <li className="main-menu">
                <ul>
                    <li> Log in / create account </li>
                    <li>Online support </li>
                    <li>Footwear</li>
                    <li> <u>Shipping to Denmark</u></li>
                </ul>
            </li>
        </ul>
        <div className="nav-brand">
            <img src={koovslogo} alt="Koovs Logo" />
        </div>
        <div className="d-flex align-items-center gap-4">
            <img src={koovsicon} alt="Koovs Search icon" />
            <div>Account</div>
            <div>Cart (0)</div>
        </div>
    </div>
</header>
  )
}

export default Header

// class Header extends React.Component {



//     render() {
//         return (
           

//         )
//     }
// }

// export default Header;



