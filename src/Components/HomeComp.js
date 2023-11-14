import React, { Component } from 'react'
import "./products.css"
import RegisterComp from './RegisterComp'
import {Multimedia} from '../shared/Constant/const'

export class HomeComp extends Component {
    render() {
        return (
            <div>
                
               <div className='Laptops'>
                    <h2>Laptops</h2>
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
                                <img src={Multimedia.laptop1} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                Lenovo IdeaPad 3 15IGL05 Intel Celeron (15.6 inch, 8GB, 256GB, Windows 11, MS Office 2021, Intel UHD Graphics, FHD Display, Platinum Grey, 81WQ00MQIN)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹29,999</span><br/><br/>
                                <button type='button'  className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div> <div className='col-lg-3 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop2} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                acer Aspire Lite Intel Core i3 11th Gen (15.6 inch, 8GB, 512GB, Windows 11, Intel UHD, FHD Display, Steel Grey, UN.431SI.252)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹29,999</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div> <div className='col-lg-3 col-md-6'>
                       <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.laptop3} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>
                                HP 14s-dr3003TU Intel Pentium Silver (14 inch, 8GB, 512GB, Windows 11 Home, MS Office 2021, Intel UHD Graphics, HD Display, Natural Silver, 832T7PA)
                                </p>
                                <span style={{fontWeight:'bold'}}>₹29,999</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                            

                        </div>
                       </div>
                    </div>

               </div><br/> 
               <div className='tv'>
                    <h2>Tv's</h2>
                    <div className='row'>
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
                        </div>
                        <div className='col-lg-3 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv2} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>LG LM56 81.28 cm (32 inch) HD Ready LED Smart WebOS TV with Down Firing Speaker</p>
                                <span style={{fontWeight:'bold'}}>₹13,490</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv3} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Croma 60 cm (24 inch) HD Ready LED TV with 16W Speaker</p>
                                <span style={{fontWeight:'bold'}}>₹5,790</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.tv4} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Croma 80 cm (32 inch) HD Ready LED Smart TV with Bezel Less Display (2023 model)</p>
                                <span style={{fontWeight:'bold'}}>₹8,499</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        
                    </div>
               </div><br/>
               <div className='Mobile'>
                    <h2>Mobile's</h2>
                    <div className='row'>
                    <div className='col-lg-3 col-md-6 '>
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
                        </div>
                        <div className='col-lg-3 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb2} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>OnePlus 11R 5G (16GB RAM, 256GB, Sonic Black)</p>
                                <span style={{fontWeight:'bold'}}>₹44,999</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb3} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 14 (128GB, Midnight)</p>
                                <span style={{fontWeight:'bold'}}>₹65,490</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.mb4} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Apple iPhone 14 (128GB, Blue)</p>
                                <span style={{fontWeight:'bold'}}>₹65,490</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                    </div>
               </div><br/>
               <div className='camera'>
                    <h2>Camera's</h2>
                    
                    <div className='row'>
                    <div className='col-lg-3 col-md-6'>
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
                        <div className='col-lg-3 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm2} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>GoPro Hero10 5.3K and 23MP 60 FPS Waterproof Action Camera with Touch Screen (Black)</p>
                                <span style={{fontWeight:'bold'}}>₹27,490</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm3} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>Nikon Z 50 20.9MP Mirrorless Camera (16-50 mm and 55-210 mm Lens, 23.5 x 15.7 mm Sensor, Auto ISO Sensitivity Control)</p>
                                <span style={{fontWeight:'bold'}}>₹87,999</span><br/><br/>
                                <button type='button' className='btn btn-outline-secondary btn-lg'>Buy</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                    <div className='card'>
                            <div className='card-body'>
                                <img src={Multimedia.cm4} className='card-img-top img-fluid'></img>
                            </div>
                            <div className='card-footer'>
                                <p className='card-text text-truncate'>GoPro Hero11 5.3K and 27MP 60 FPS Waterproof Action Camera with Front + Rear LCD Screens (Black)</p>
                                <span style={{fontWeight:'bold'}}>₹34,990</span><br/><br/>
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
