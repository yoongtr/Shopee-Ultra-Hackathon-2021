import * as React from 'react';
import { useState } from 'react';
import cx from 'classnames';
import styles from './styles.scss';
// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
//   } from 'reactstrap';
import { Link, LinkBack , LinkToCart} from 'libraries/components/Link';
import Button from 'screens/Button';
import CheeseCakeImage from 'assets/common/images/cheesecake.jpg';
import FashionImage from 'assets/common/images/fashionguy.jpg';
import CNYImage from 'assets/common/images/cny.jpg';

function BootstrapCarousel() {
    // const items = [
    //     {
    //       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    //     },
    //     {
    //       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    //     },
    //     {
    //       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    //     }
    //   ];
      
    //   const Example = (props) => {
    //     const [activeIndex, setActiveIndex] = useState(0);
    //     const [animating, setAnimating] = useState(false);
      
    //     const next = () => {
    //       if (animating) return;
    //       const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    //       setActiveIndex(nextIndex);
    //     }
      
    //     const previous = () => {
    //       if (animating) return;
    //       const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    //       setActiveIndex(nextIndex);
    //     }
      
    //     const goToIndex = (newIndex) => {
    //       if (animating) return;
    //       setActiveIndex(newIndex);
    //     }
      
    //     const slides = items.map((item) => {
    //       return (
    //         <CarouselItem
    //           onExiting={() => setAnimating(true)}
    //           onExited={() => setAnimating(false)}
    //           key={item.src}
    //         >
    //           <img src={item.src} />
    //           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    //         </CarouselItem>
    //       );
    //     });
      
    //     return (
    //       <Carousel
    //         activeIndex={activeIndex}
    //         next={next}
    //         previous={previous}
    //       >
    //         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
    //         {slides}
    //         <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
    //         <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    //       </Carousel>
    //     );
    //   }


    return (  
        <div className="container-fluid">
            <div className="justify-content-center text-center">
                <p>Based on your likes and purchases, we suggest the following content just for you!</p>
                <p>To edit your feed, click <Link to='/customize-feed'>here</Link>.</p>
            </div>
            <hr></hr>
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CheeseCakeImage} />
            </div>
            <div className="row justify-content-center">
                <Button>
                    <Link to='/food'>Check out more recipes!</Link>
                </Button>
            </div>
            <hr></hr>
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={FashionImage} />
            </div>
            <div className="row justify-content-center">
                <Button>
                    <Link to='/fashion'>Copy these trending OOTDs!</Link>
                </Button>
            </div>
            <hr></hr>
            <div className="justify-content-center">
                <img style={{'width':"100vw"}} className="d-block w-100" src={CNYImage} />
            </div>  
            <div className="row justify-content-center">
                <Button>
                    <Link to='/cny'>Haven't bough CNY stuff in time? Click here!</Link>
                </Button>
            </div>
            {/* <Example /> */}

        </div>
        
    )  
}  

export default BootstrapCarousel  