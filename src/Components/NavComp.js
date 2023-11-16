import React, { Component } from 'react'
import {Multimedia} from '../shared/Constant/const'
import './External.css'

import { Link } from 'react-router-dom';




export class NavComp extends Component {
    render() {
        return (
            <div>
                <img src={Multimedia.clogo}  className='logo'/> &nbsp;&nbsp;
                <span className='lognme'>Grace Electronics</span>

                <Link to='Menu'>Menu</Link>
                

                <Link to='Home' className='btn btn-outline-info' style={{marginLeft:"870px"}}>Home</Link>
                <Link to='Register' className='btn btn-outline-info' style={{marginLeft:"20px"}}
                >Register</Link>
                <Link to='Register' className='btn btn-outline-info' style={{marginLeft:"20px"}}
                >Sign-in</Link>
            </div>
        )
    }
}

export default NavComp
