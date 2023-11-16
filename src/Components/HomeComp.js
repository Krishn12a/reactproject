import React, { Component } from 'react'
import "./products.css"
import RegisterComp from './RegisterComp'
import {Multimedia} from '../shared/Constant/const'
import { Carousel,CarouselItem } from 'react-bootstrap'

export class HomeComp extends Component {
    render() {
        return (
            <div>
                
                <div className='container-fluid'>
                        
                <Carousel className="carousel"  >
                    <Carousel.Item interval={1000}>
                        <img src={Multimedia.courel1} alt="Tv" style={{width:'100%', height:'550px'}}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img src={Multimedia.courel2} alt="Camera" style={{width:'100%', height:'550px'}}/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Multimedia.courel3} alt="Mobile" style={{width:'100%', height:'550px'}} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>



        


                
                <div className='Laptops'>
                    <h2>Products</h2>
                    <div className='row'>
                        
                       <div className='col-lg-3 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                ASUS E410KA-BV103WS Intel Pentium (14 inch, 8GB, 256GB, Windows 11, MS Office 2021, Intel UHD Graphics, LED-Backlit Display, Star Black, 90NB0UA5-M004J0)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹29,999</span><br/><br/>
                                <button type='button'  className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                       <div className='col-lg-3 col-md-6'>
                       <div className='card'>
                       <div className='card-body'>
                                <img src={Multimedia.tv1} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Croma 109 cm (43 inch) Full HD LED Smart TV with Bezel Less Display (2023 model)</p>
                                <span style={{fontWeight:'bold'}}>₹15,999</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div> <div className='col-lg-3 col-md-6'>
                       <div className='card'>
                       <div className='card-body'>
                                <img src={Multimedia.mb1} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 13 (128GB, Starlight White)</p>
                                <span style={{fontWeight:'bold'}}>₹55,990</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div> <div className='col-lg-3 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm1} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Canon EOS R10 24.2MP Mirrorless Camera (18-150 mm Lens, 22.3 x 14.9 mm Sensor, Vari-Angle Touch Screen LCD)</p>
                                <span style={{fontWeight:'bold'}}>₹94,999</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                    </div>

               </div>
              
               
            </div>
        )
    }
}

export default HomeComp
