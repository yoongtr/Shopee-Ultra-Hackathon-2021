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
            <div className="container-fluid bg-light mt-3">
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CNY2image} />
            </div>
            <div className="justify-content-center mt-3">
                <h2>Trending CNY Items For Home Decorations!</h2>
                <p>-by Anna-</p>
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
                <h3>Anna's reviews</h3>
                <p>
                Chinese New Year is the busiest time of the year, with decorating, cooking, visiting, playing mahjong – it’s all about the hustle and bustle! Even though we’re not able to celebrate the way we did before, we can still amp up the festive vibes by decorating our homes. For this purpose, Shopee offers a huge variety of decorations at extremely affordable prices! Here are my top 10 finds for Chinese New Year home decorations.
                </p>

            </div>
            </div>
        </div>
    )
}

export default CNY2Component;