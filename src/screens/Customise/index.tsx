import * as React from 'react';

import FoodImage from 'assets/common/images/foodsquare.jpg';
import FashionImage from 'assets/common/images/fashionsquare.jpg';
import HomeImage from 'assets/common/images/homesquare.jpg';
import ElectronicImage from 'assets/common/images/electronicssquare.jpg';
import BabyImage from 'assets/common/images/babiessquare.jpg';
import SeasonalImage from 'assets/common/images/seasonalsquare.jpg';

import Button from 'screens/Button';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

// Stylings
import './styles.scss';

import { Jumbotron } from 'reactstrap';

function Customise() {
  // Start creating your awesome app here
  return (
    <div>
        <div>
          <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12">
                        <h1>Tell us what you love!</h1>
                    </div>
                </div>
            </div>
          </Jumbotron>
          <div className="container">
              <div className="row">
                <div className='col-4'>
                    <input type="checkbox"></input>
                    <img style={{'width':"100vw"}} className="d-block w-100" src={FoodImage} />
                    <h5> Food/Cooking </h5>
                </div>
                <div className='col-4'>
                    <input type="checkbox"></input>
                    <img style={{'width':"100vw"}} className="d-block w-100" src={FashionImage} />
                    <h5> Fashion </h5>
                </div>
                <div className='col-4'>
                    <input type="checkbox"></input>
                    <img style={{'width':"100vw"}} className="d-block w-100" src={BabyImage} />
                    <h5> Babies/Children </h5>
                </div>
                <div className='col-4'>
                    <input type="checkbox"></input>
                    <img style={{'width':"100vw"}} className="d-block w-100" src={SeasonalImage} />
                    <h5> Seasonal </h5>
                </div>
                <div className='col-4'>
                    <input type="checkbox"></input>
                    <img style={{'width':"100vw"}} className="d-block w-100" src={ElectronicImage} />
                    <h5> Technology </h5>
                </div>
                <div className='col-4'>
                    <input type="checkbox"></input>
                    <img style={{'width':"100vw"}} className="d-block w-100" src={HomeImage} />
                    <h5> Home/Living </h5>
                    <Button>
                        <Link to='/'>Bring Me These!</Link>
                    </Button>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Customise;