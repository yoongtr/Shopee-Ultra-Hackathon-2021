import * as React from 'react'; 
import { Component } from 'react';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';
import Fashion1 from 'assets/common/images/fashion1.jpg';
import Fashion2 from 'assets/common/images/Fashion2.jpg';

function FashionComponent() {
    return (
        <div className="container-fluid">
            <div className="justify-content-center mt-3">
                <img style={{'width':"100vw"}} className="d-block w-100" src={Fashion1} />
            </div>
            <div className="justify-content-center mt-3">
            <p><h2>Mid-Summer Outfit</h2>- by Jisoo -</p>
                <p>Fashion enthusiasts out there have no doubt heard about the ever-popular Seoul Fashion Week held every year! With all the creative designers and inspirations shown previously, it is safe to say that it is one of our favourite Korean events year-round.
                </p>
            </div>
            <div className="row justify-content-center">
                <Button>
                    <Link to='/fashion1'>Copy this style for less than SGD39.99!</Link>
                </Button>
            </div>
            <div className="justify-content-center">
                <hr></hr>
            </div>
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={Fashion2} />
            </div>
            <div className="justify-content-center mt-3">
                <h2>Urban Style for Guys</h2>
                <p>- by Jack -</p>
                <p>
                Casual dress code for men is perhaps men’s best chance to express a true sense of personal style. Whether you prefer something sleek or rugged, upscale or down-to-earth, men’s casual wear is an open invitation to dress in what feels most comfortable to you.
                </p>
            </div>
            <div className="row justify-content-center">
                <Button>
                    <Link to='/fashion2'>Copy this style for less than SGD49.99!</Link>
                </Button>
            </div>
        </div>
    )
}

export default FashionComponent;