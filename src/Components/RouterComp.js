import React, { Component }from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeComp from "./HomeComp";
import MenuComp from "./MenuComp";


class RouterComp extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div style={{width:'100%'}}>
                        <div className='card border-primary'>
                            <div className='card-header border-primary'>
                                
                            </div>
                            <div className='card-body border-primary'>
                            {/* <HomeComp></HomeComp> */}
                            <MenuComp></MenuComp>
                            </div>
                            <div className='card-footer border-primary'></div>
                            
                        </div>
                    </div>
                    <Routes>
                        <Route>

                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default RouterComp
