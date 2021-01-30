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
            <div className="container-fluid bg-light mt-3">
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={WomenFash} />
            </div>
            <div className="justify-content-center mt-3">
                <h2>Trending CNY Items!</h2>
                <p>-by Hong Yu-</p>
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
                <h3>Hong Yu's reviews</h3>
                <p>
                Whether presented as gifts or left at home as snacks to offer guests, delectable goodies usually come to define CNY celebrations at home. These snacks are undoubtedly good to eat but there is actually a reason why people mainly have them during Chinese New Year.                
                </p>

            </div>
            </div>
        </div>
    )
}

export default CNY1Component;