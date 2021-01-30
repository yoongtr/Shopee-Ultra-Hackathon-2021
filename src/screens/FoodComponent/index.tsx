import * as React from 'react'; 
import { Component } from 'react';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';
import CheeseCakeImage from 'assets/common/images/cheesecake.jpg';
import MakiSushi from 'assets/common/images/makisushi.jpg';

function FoodComponent() {
    return (
        <div className="container-fluid">
            <div className="row align-center">
                <img style={{'height':"150px"}} className="d-block w-100" src={CheeseCakeImage} />
            </div>
            <div>
                <Button>
                    <Link to='/food1'>Buy the ingredients</Link>
                </Button>
            </div>
            <div className="row align-center">
                <img style={{'height':"150px"}} className="d-block w-100" src={MakiSushi} />
            </div>
            <div>
                <Button>
                    <Link to='/food2'>Buy the ingredients</Link>
                </Button>
            </div>
        </div>
    )
}

export default FoodComponent;