import React, { Component } from 'react'
import LaptopComp from './Products/LaptopComp'
import MobileComp from './Products/MobileComp'
import TvComp from './Products/TvComp'
import CameraComp from './Products/CameraComp'


class MenuBodyComp extends Component {
    render() {
        return (
            <div>
                <LaptopComp></LaptopComp>
                <MobileComp></MobileComp>
                <TvComp></TvComp>
                <CameraComp></CameraComp>

                <div>
                    <button type='button' className='btn btn-outline-danger'>Log out</button>
                </div>
                
                
            </div>
        )
    }
}

export default MenuBodyComp
