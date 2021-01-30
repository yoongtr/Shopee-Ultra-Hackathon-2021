import * as React from 'react'; 
import { Component } from 'react';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';
import CNY1 from 'assets/common/images/cny1.jpg';
import CNY2 from 'assets/common/images/cny2.png';

function CNYComponent() {
    return (
        <div className="container-fluid">
            <div className="row align-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CNY1} />
            </div>
            <div>
                <Button>
                    <Link to='/cny1'>Buy the items</Link>
                </Button>
            </div>
            <div className="row align-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CNY2} />
            </div>
            <div>
                <Button>
                    <Link to='/cny2'>Buy the items</Link>
                </Button>
            </div>
        </div>
    )
}

export default CNYComponent;