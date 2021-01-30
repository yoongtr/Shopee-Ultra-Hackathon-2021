import * as React from 'react'; 
import { Component } from 'react';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';
import Fashion1 from 'assets/common/images/fashion1.jpg';
import Fashion2 from 'assets/common/images/Fashion2.jpg';

function FashionComponent() {
    return (
        <div className="container-fluid">
            <div className="row align-center">
                <img style={{'height':"100vw"}} className="d-block w-100" src={Fashion1} />
            </div>
            <div>
                <Button>
                    <Link to='/food1'>Buy the items</Link>
                </Button>
            </div>
            <div className="row align-center">
                <img style={{'height':"100vw"}} className="d-block w-100" src={Fashion2} />
            </div>
            <div>
                <Button>
                    <Link to='/food2'>Buy the items</Link>
                </Button>
            </div>
        </div>
    )
}

export default FashionComponent;