import * as React from 'react';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

// Stylings
// import './styles.scss';

import BootstrapCarousel from 'screens/Carousel';
import { Jumbotron, Carousel, CarouselItem } from 'reactstrap';

function Home() {
  // Start creating your awesome app here
  return (
    <div>
        <div className="container-fluid">
          <Jumbotron>
            <div>
                <div className="row row-header">
                    <div className="container-fluid col-12">
                        <h1>PieceOfCake</h1>
                        <p>Easy feature to find all items you need, in one click. Shopping now is just a piece of cake!</p>
                    </div>
                </div>
            </div>
          </Jumbotron>
          <BootstrapCarousel />
        </div>
    </div>
  );
}

export default Home;