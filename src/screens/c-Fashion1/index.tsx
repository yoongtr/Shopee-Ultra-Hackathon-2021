import consts from 'consts';

import * as React from 'react'; 
import WomenFash from 'assets/common/images/fashion1.jpg';
import {
    LinkToProduct,
    LinkToCart,
  } from 'libraries/components/Link';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';

function Fashion1() {

    return (
        
        <div className="container-fluid">
            <div className="container-fluid bg-light mt-3">
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={WomenFash} />
            </div>
            <div className="justify-content-center mt-3">
                <h2>Trending Korean Summer Style</h2>
                <p>-by Jisoo-</p>
                <p>Items list</p>
                <ul>
                    <li>
                    <Link to='compare-sunglasses'>Sunglasses</Link>
                    </li>
                    <li>
                    <Link to='compare-cardigan'>Soft Cardigan</Link>
                    </li>
                    <li>
                    <Link to='compare-shoes'>Platform Shoes</Link>
                    </li>
                </ul>
            </div>
            <div className="justify-content-center">
                Or add all the top search results into cart in one go!
                <Button>
                    <LinkToCart>Add all to Cart</LinkToCart>
                </Button>
            </div>
            <div className="justify-content-center">
                <hr></hr>
            </div>
            <div className="justify-content-center">
                <h3>Jisoo's reviews</h3>
                <p>
                Like their western counterparts, the recently concluded Tokyo and Seoul Fashion Weeks saw a mix of digital presentations and socially-distanced runway shows—and with that, reduced activity outside the shows.                
                </p>

            </div>
            </div>
        </div>
    )
}

export default Fashion1;