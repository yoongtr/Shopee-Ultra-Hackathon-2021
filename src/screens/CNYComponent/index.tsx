import * as React from 'react'; 
import { Component } from 'react';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';
import CNY1 from 'assets/common/images/cny1.jpg';
import CNY2 from 'assets/common/images/cny2.png';

function CNYComponent() {
    return (
        <div className="container-fluid">
            <div className="justify-content-center mt-3">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CNY1} />
            </div>
            <div className="justify-content-center mt-3">
                <h2>My favourite CNY snacks</h2>
                <p>- by Hong Yu -</p>
                <p>
                    Chinese New Year is the season to spend quality time with your family, put up decorations and toss plenty of Yee Sang. Here's my top 10 favourite snacks.              
                </p>
            </div>
            <div className=" row justify-content-center">
                <Button>
                    <Link to='/cny1'>Buy all items in this post</Link>
                </Button>
            </div>
            <div className="justify-content-center">
                <hr></hr>
            </div>
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CNY2} />
            </div>
            <div className="justify-content-center mt-3">
                <h2>Top 10 CNY home decor</h2>
                <p>- by Anna -</p>
                <p>
                Chinese New Year is the busiest time of the year, with decorating, cooking, visiting, playing mahjong – it’s all about the hustle and bustle!
                </p>
            </div>
            <div className=" row justify-content-center">
                <Button>
                    <Link to='/cny2'>Buy all items in this post</Link>
                </Button>
            </div>
        </div>
    )
}

export default CNYComponent;