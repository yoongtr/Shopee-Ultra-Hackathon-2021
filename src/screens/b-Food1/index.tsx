import consts from 'consts';

import * as React from 'react'; 
import CheeseCakeImage from 'assets/common/images/cheesecake.jpg';
import {
    LinkToProduct,
    LinkToCart,
  } from 'libraries/components/Link';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';

function CheeseCakeComponent() {
    // our keywords look retarded but the search API accuracy is bad - hire me JK
    const IngredientsKeys = [
        'Philadelphia',
        '95-0132',
        'redman',
    ]
    return (
        
        <div className="container-fluid">
            <div className="row align-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CheeseCakeImage} />
            </div>
            <div className="row align-center">
                <h2>Cheesecake</h2>
                <p>Ingredients list</p>
                <ul>
                    <li>
                    <Link to='compare-creamcheese'>Cream Cheese</Link>
                    </li>
                    <li>
                    <Link to='compare-strawberry'>Strawberry</Link>
                    </li>
                    <li>
                    <Link to='compare-sugar'>Sugar</Link>
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

export default CheeseCakeComponent;