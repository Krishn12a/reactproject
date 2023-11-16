import React, { Component }from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeComp from "./HomeComp";
import MenuComp from "./MenuComp";
import LaptopComp from "./Products/LaptopComp";
import TvComp from "./Products/TvComp";
import MobileComp from "./Products/MobileComp";
import CameraComp from "./Products/CameraComp";
import NavComp from "./NavComp";




class RouterComp extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div style={{width:'100%'}}>
                        <div className='card border-primary'>
                            <div className='card-header border-primary'>
                                <NavComp></NavComp>
                            </div>
                            <div className='card-body border-primary'>
                           
                            <Routes>
                                
                                <Route path="" element={<HomeComp></HomeComp>}></Route>
                                <Route path="Menu" element={<MenuComp></MenuComp>}>
                                    <Route path="Laptop" element={<LaptopComp></LaptopComp>}></Route>
                                    <Route path="Tv" element={<TvComp></TvComp>}></Route>
                                    <Route path="Mobile" element={<MobileComp></MobileComp>}></Route>
                                    <Route path="Camera" element={<CameraComp></CameraComp>}></Route>
                                </Route>
                                <Route path="Home" element={<HomeComp></HomeComp>}></Route>
                                
                            </Routes>
                            </div>
                            <div className='card-footer border-primary'></div>
                            
                        </div>
                    </div>
                   
                </BrowserRouter>
            </div>
        )
    }
}

export default RouterComp
