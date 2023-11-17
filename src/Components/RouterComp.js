import React, { Component }from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeComp from "./HomeComp";
import MenuComp from "./MenuComp";
import LaptopComp from "./Products/LaptopComp";
import TvComp from "./Products/TvComp";
import MobileComp from "./Products/MobileComp";
import CameraComp from "./Products/CameraComp";
import NavComp from "./NavComp";
import Login from "./Login";
import AboutComp from "./AboutComp";
import FooterComp from "./FooterComp";
import RegisterComp from "./RegisterComp";
import CrudComp from "./CrudComp";
import Home from "../Crud/Laptops/Home"
import Create from "../Crud/Laptops/Create";
import Read from "../Crud/Laptops/Read";
import Date from "../Crud/Laptops/Date";
import AdminComp from "./AdminComp";




class RouterComp extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div style={{width:'100%'}}>
                        <div className='card border-primary' >
                            <div className='card-header border-primary' style={{backgroundColor:'rgba(198,198,198,255)'}}>
                                <NavComp></NavComp>
                            </div>
                            <div className='card-body border-primary 'style={{backgroundColor:'#E6b777'}} >
                           
                            <Routes>
                                
                                <Route path="" element={<HomeComp></HomeComp>}></Route>
                                <Route path="Menu" element={<MenuComp></MenuComp>}>
                                    <Route path="Laptop" element={<LaptopComp></LaptopComp>}></Route>
                                    <Route path="Tv" element={<TvComp></TvComp>}></Route>
                                    <Route path="Mobile" element={<MobileComp></MobileComp>}></Route>
                                    <Route path="Camera" element={<CameraComp></CameraComp>}></Route>
                                </Route>
                                <Route path="Home" element={<HomeComp></HomeComp>}></Route>
                                <Route path="RgisterComp" element={<RegisterComp></RegisterComp>}></Route>
                                <Route path="Signin" element={<Login></Login>}></Route>
                                <Route path="Footer" element={<FooterComp></FooterComp>}>
                                    <Route path="About" element={<AboutComp></AboutComp>}></Route>
                                </Route>
                                <Route path="crud" element={<CrudComp></CrudComp>}></Route>

                                <Route path="admin" element={<AdminComp></AdminComp>}>
                                    <Route path='home1' element={<Home></Home>}></Route>
                                    <Route path='create' element={<Create></Create>}></Route>
                                    <Route path="read/:id" element={<Read></Read>}></Route>
                                    <Route path="update/:id" element={<Date></Date>}></Route>
                                    
                                </Route>
                                
                                
                            </Routes>
                            </div>
                            <div className='card-footer border-primary' style={{backgroundColor:'rgba(198,198,198,255)'}}>
                                {/* <AboutComp></AboutComp> */}
                                <FooterComp></FooterComp>
                                

                            </div>
                            
                        </div>
                    </div>
                   
                </BrowserRouter>
            </div>
        )
    }
}

export default RouterComp
