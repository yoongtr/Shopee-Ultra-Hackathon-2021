import * as React from 'react'; 
import { Component } from 'react';
import Button from 'screens/Button';
import { Link } from 'react-router-dom';
import CNY1 from 'assets/common/images/cny1.jpg';
import CNY2 from 'assets/common/images/cny2.png';

function CNYComponent() {
    return (
        <div className="container-fluid">
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CNY1} />
            </div>
            <div className="justify-content-center">
                <h2>My favourite CNY snacks</h2>
                <p>- by Hong Yu -</p>
                <p>
                    Chinese New Year is the season to spend quality time with your family, put up decorations and toss plenty of Yee Sang. During the first few days, many families will spend the entire day together with their extended relatives. Cousins, uncles, aunts, grandparents and even some people you’ve never heard of will be dropping by.
                    Apart from the delicious main meals that are served, there are usually plenty of snacks available.                
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
            <div className="justify-content-center">
                <h2>Top 10 CNY home decor</h2>
                <p>- by Anna -</p>
                <p>
                Chinese New Year is the busiest time of the year, with decorating, cooking, visiting, playing mahjong – it’s all about the hustle and bustle! Even though we’re not able to celebrate the way we did before, we can still amp up the festive vibes by decorating our homes. For this purpose, Taobao offers a huge variety of decorations at extremely affordable prices! Here are my top 10 finds for Chinese New Year home decorations.
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