import * as React from 'react'; 
import { Component } from 'react';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';
import CheeseCakeImage from 'assets/common/images/cheesecake.jpg';
import MakiSushi from 'assets/common/images/makisushi.jpg';

function FoodComponent() {
    return (
        <div className="container-fluid">
            <div className="justify-content-center mt-3">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CheeseCakeImage} />
            </div>
            <div className="justify-content-center mt-3">
                <h2>Cheesecake</h2>
                <p>- by Susan -</p>
                <p>As much as I love cheesecake, I’ve never published a classic cheesecake recipe. There’s always been peanut butter, sprinkles, blueberry swirls, Snickers cheesecake, pumpkin, lemon, red velvet, or Nutella. That’s a lot of cheesecake recipes without a single nod to where it all originates: classic cheesecake.
                </p>
            </div>
            <div className="row justify-content-center">
                <Button id='clicktobuy'>
                    <Link to='/food1'>Buy all ingredients for less than SGD19.99!</Link>
                </Button>
            </div>
            <div className="justify-content-center">
                <hr></hr>
            </div>
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={MakiSushi} />
            </div>
            <div className="justify-content-center mt-3">
                <h2>MakiSushi</h2>
                <p>- by Jason -</p>
                <p>
                Sushi rolls, or ‘makizushi’ in Japanese, are what most non-Japanese people think of when they think of sushi. Makizushi is made by wrapping up fillings in rice and nori seaweed. This recipe shows you how to make a basic makizushi roll, which can then be filled with whatever fillings you desire. Master the technique and get creative. 
                </p>
            </div>
            <div className="row justify-content-center">
                <Button>
                    <Link to='/food2'>Buy all ingredients for less than SGD29.99!</Link>
                </Button>
            </div>
        </div>
    )
}

export default FoodComponent;