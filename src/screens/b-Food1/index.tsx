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
            <div className="container-fluid bg-light mt-3">
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CheeseCakeImage} />
            </div>
            <div className="justify-content-center mt-3">
                <h2>Cheesecake</h2>
                <p>-by Susan-</p>
                <p>Ingredients list - click on each ingredients to view products</p>
                <ul>
                    <li>
                    <Link to='compare-creamcheese'>50g Cream Cheese</Link>
                    </li>
                    <li>
                    <Link to='compare-strawberry'>10g Strawberry</Link>
                    </li>
                    <li>
                    <Link to='compare-sugar'>10g Sugar</Link>
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
                <h3>Recipe</h3>
                <p>
                    <ol>
                        <li>How to Make Classic Cheesecake</li>
                        <li>You only need a few basic staple ingredients for this cheesecake recipe.</li>
                        <li>Block cream cheese: Four 8-ounce blocks of full-fat cream cheese are the base of this cheesecake. That’s 2 pounds. Make sure you’re buying the blocks of cream cheese and not cream cheese spread. There’s no diets allowed in cheesecake, so don’t pick up the reduced fat variety!</li>
                        <li>Sugar: 1 cup. Not that much considering how many mouths you can feed with this dessert. Over-sweetened cheesecake is hardly cheesecake anymore. Using only 1 cup of sugar gives this cheesecake the opportunity to balance tangy and sweet, just as classic cheesecake should taste.</li>
                    </ol>
                </p>

            </div>
            </div>
        </div>
    )
}

export default CheeseCakeComponent;