import consts from 'consts';

import * as React from 'react'; 
import WomenFash from 'assets/common/images/fashion1.jpg';
import {
    LinkToProduct,
    LinkToCart,
  } from 'libraries/components/Link';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';

function WomenFashComponent() {

    return (
        
        <div className="container-fluid">
            <div className="row align-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={WomenFash} />
            </div>
            <div className="row align-center">
                <h2>Trending Korean Summer Style</h2>
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
            <div>
                <Button>
                    <LinkToCart>Add all to Cart</LinkToCart>
                </Button>
            </div>
            <div>
                Add the top search results into cart for all products
            </div>
        </div>
    )
}

export default WomenFashComponent;