import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import banner4 from '../../images/banner4.jpg'
const Banner = () => {
    return (
        <div>
            <div className="row  my-5 mx-4 banner">
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div>
                        <h3>The Best Laptops for 2022</h3>
                        <p>Looking at specs is just the start: Whether you want a simple budget PC, a productivity workhorse, or a screamer of a gaming notebook, our deep-dive guide has the advice you need to find the best laptop for you.</p>
                    </div>

                </div>
                <div className="col-lg-6">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner2}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner4}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;