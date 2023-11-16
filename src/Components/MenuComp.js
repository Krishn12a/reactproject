import React, { Component } from 'react'
import HomeComp from './HomeComp'
import LaptopComp from './Products/LaptopComp'
import { Link,Routes,Route, Outlet, } from 'react-router-dom'
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
                    <div className='col-sm-2 border '>
                            <h3>userName</h3>
                            
                            <Link to={"Laptop"} className='lnk'>Laptops</Link><br/>
                            <Link to={"Tv"} className='lnk'>Tv</Link><br/>
                            <Link to={"Mobile"} className='lnk'>Mobile</Link><br/>
                            <Link to={"Camera"} className='lnk'>Camera</Link>

                           
                            
                    </div>
                    <div className='col-sm-10'>
                            <Routes>
                                <Route path='' element={<HomeComp></HomeComp>}></Route>
                                 
                            </Routes>
                            <Outlet></Outlet>
                            
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MenuComp
