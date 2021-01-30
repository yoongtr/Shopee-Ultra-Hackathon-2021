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
            <div className="container-fluid bg-light">
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CheeseCakeImage} />
            </div>
            <div className="justify-content-center">
                <h2>MakiSushi</h2>
                <p>-by Jason-</p>
                <p>Ingredients list - click on each ingredients to view products</p>
                <ul>
                    <li>
                    <Link to='compare-rice'>3 cups Japanese Rice</Link>
                    </li>
                    <li>
                    <Link to='compare-salmon'>50g Salmon</Link>
                    </li>
                    <li>
                    <Link to='compare-seaweed'>1 package of Seaweed</Link>
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
                        <li>To make sushi rice, Japanese white rice is mixed with a special sushi rice vinegar.</li>
                        <li>Once you have your sushi rice prepared, you will need to begin by laying out a preparation area with your makisu rolling mat.</li>
                        <li>Place a sheet or nori on the mat and cover two thirds of one side of your nori seaweed with your sushi rice approximately 1cm high.</li>
                        <li>Add your ingredients in a line on top of the rice in the centre. You can choose any combination of ingredients that compliment each other well. We went for salmon, salad and mayonnaise for this one.</li>
                    </ol>
                </p>

            </div>
            </div>
        </div>
    )
}

export default SushiComponent;