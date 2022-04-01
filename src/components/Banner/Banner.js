import React from 'react';
import './Banner.css'

import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import banner4 from '../../images/banner4.jpg'
const Banner = () => {
    return (
        <div>
            <div className="row  py-5 px-4 banner">
                <div className="col-lg-6 ps-5 d-flex justify-content-center align-items-center text-light">
                    <div>
                        <h3>The Best Laptops for 2022</h3>
                        <p>Looking at specs is just the start: Whether you want a simple budget PC, a productivity workhorse, or a screamer of a gaming notebook, our deep-dive guide has the advice you need to find the best laptop for you.</p>
                        <button className='btn btn-warning  mt-3 mb-5'>Explore More </button>
                    </div>

                </div>
                <div className="col-lg-6">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-circle"
                                src={banner1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-circle"
                                src={banner2}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-circle"
                                src={banner3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded-circle"
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