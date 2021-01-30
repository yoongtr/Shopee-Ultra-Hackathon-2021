import consts from 'consts';

import * as React from 'react'; 
import CNY2image from 'assets/common/images/cny2.png';
import {
    LinkToProduct,
    LinkToCart,
  } from 'libraries/components/Link';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';

function CNY2Component() {

    return (
        
        <div className="container-fluid">
            <div className="row align-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CNY2image} />
            </div>
            <div className="row align-center">
                <h2>Trending CNY Items For Home Decorations!</h2>
                <p>Items list</p>
                <ul>
                    <li>
                    <Link to='compare-carpet'>Living Room Carpet</Link>
                    </li>
                    <li>
                    <Link to='compare-cushion'>Sofa Cushion</Link>
                    </li>
                    <li>
                    <Link to='compare-vase'>Vase</Link>
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

export default CNY2Component;