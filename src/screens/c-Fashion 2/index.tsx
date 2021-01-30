import consts from 'consts';

import * as React from 'react'; 
import MenFash from 'assets/common/images/fashion2.jpg';
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
                <img style={{'width':"100vw"}} className="d-block w-100" src={MenFash} />
            </div>
            <div className="row align-center">
                <h2>Trending Urban Look</h2>
                <p>Items list</p>
                <ul>
                    <li>
                    <Link to='compare-shirt'>Pocket T-Shirt</Link>
                    </li>
                    <li>
                    <Link to='compare-jeans'>Navy Blue Jeans</Link>
                    </li>
                    <li>
                    <Link to='compare-watch'>Black Minimalist Watch</Link>
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