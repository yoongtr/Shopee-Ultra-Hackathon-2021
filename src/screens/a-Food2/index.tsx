import consts from 'consts';

import * as React from 'react'; 
import CheeseCakeImage from 'assets/common/images/makisushi.jpg';
import {
    LinkToProduct,
    LinkToCart,
  } from 'libraries/components/Link';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';

function SushiComponent() {

    return (
        
        <div className="container-fluid">
            <div className="row align-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CheeseCakeImage} />
            </div>
            <div className="row align-center">
                <h2>MakiSushi</h2>
                <p>Ingredients list</p>
                <ul>
                    <li>
                    <Link to='compare-rice'>Japanese Rice</Link>
                    </li>
                    <li>
                    <Link to='compare-salmon'>Salmon</Link>
                    </li>
                    <li>
                    <Link to='compare-seaweed'>Seaweed</Link>
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

export default SushiComponent;