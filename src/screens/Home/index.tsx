import * as React from 'react';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

// Stylings
// import './styles.scss';

import BootstrapCarousel from 'screens/Carousel';
import { Jumbotron } from 'reactstrap';

function Home() {
  // Start creating your awesome app here
  return (
    <div>
        <div>
          <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12">
                        <h1>PieceOfCake</h1>
                        <p>Easy feature to find all items you need, in one click. Shopping now is just a piece of cake!</p>
                    </div>
                </div>
            </div>
          </Jumbotron>
          <div className="container">
            <BootstrapCarousel />
          </div>
        </div>
    </div>
  );
}

export default Home;