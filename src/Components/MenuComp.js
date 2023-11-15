import React, { Component } from 'react'
import HomeComp from './HomeComp'
import LaptopComp from './Products/LaptopComp'
import { Link,Routes,Route } from 'react-router-dom'
import MenuBodyComp from './MenuBodyComp'
import TvComp from "./Products/TvComp";
import MobileComp from "./Products/MobileComp";
import CameraComp from "./Products/CameraComp";

export class MenuComp extends Component {
    render() {
        return (
            <div >
                <div className='container-fluid'>

                    <div className='row'>
                    <div className='col-sm-2 border border-primary'>
                            <h3>userName</h3>
                            <h3>Home</h3>
                            <Link to={"Laptop"}>Laptops</Link><br/>
                            <Link to={"Tv"}>Tv</Link><br/>
                            <Link to={"Mobile"}>Mobile</Link><br/>
                            <Link to={"Camera"}>Camera</Link>
                            
                    </div>
                    <div className='col-sm-10'>
                            <Routes>
                                <Route path="Laptop" element={<LaptopComp></LaptopComp>}></Route>
                                <Route path="Tv" element={<TvComp></TvComp>}></Route>
                                <Route path="Mobile" element={<MobileComp></MobileComp>}></Route>
                                <Route path="Camera" element={<CameraComp></CameraComp>}></Route>
                                
                            </Routes>
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MenuComp
