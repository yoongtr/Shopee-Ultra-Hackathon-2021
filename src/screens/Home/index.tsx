import * as React from 'react';

// Components
import { Link, LinkBack } from 'libraries/components/Link';

// Stylings
// import './styles.scss';

import BootstrapCarousel from 'screens/Carousel';
import { Jumbotron, Footer } from 'reactstrap';

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
                        <p>Embrace the #ShopeeLifestyle and find inspirations for your hobbies from cooking, fashion to home decoration. </p>
                    </div>
                </div>
            </div>
          </Jumbotron>
          <BootstrapCarousel />
          <div className="container mt-3 justify-content-center bg-light">
                Want to be an influencer? Sign up <Link to='/be-an-influencer'>here</Link>!
          </div>
        </div>
    </div>
  );
}

export default Home;