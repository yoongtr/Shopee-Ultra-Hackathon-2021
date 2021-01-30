import consts from 'consts';

import * as React from 'react'; 
import WomenFash from 'assets/common/images/cny1.jpg';
import {
    LinkToProduct,
    LinkToCart,
  } from 'libraries/components/Link';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';

function CNY1Component() {

    return (
        
        <div className="container-fluid">
            <div className="row align-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={WomenFash} />
            </div>
            <div className="row align-center">
                <h2>Trending CNY Items!</h2>
                <p>Items list</p>
                <ul>
                    <li>
                    <Link to='compare-angbao'>Red Angbao</Link>
                    </li>
                    <li>
                    <Link to='compare-bakkwa'>Bakkwa</Link>
                    </li>
                    <li>
                    <Link to='compare-pineappletart'>Pineapple Tart</Link>
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

export default CNY1Component;