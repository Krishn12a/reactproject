import React, { Component } from 'react'
import {Multimedia} from '../shared/Constant/const'
import './External.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




export class NavComp extends Component {
    render() {
        return (
            <div>
                <div className='row'>

                    <div className='col-sm-6'>
                    <img src={Multimedia.clogo}  className='logo'/> &nbsp;&nbsp;
                    <span className='lognme'>Grace Electronics</span>&nbsp;&nbsp;&nbsp;&nbsp;

                    <Link to='Menu' style={{fontSize:'x-large',textDecoration:'none',color:'#111150', fontWeight:'bold'}}><FontAwesomeIcon icon={faBars} /> Menu</Link>
                    </div>
                    <div className='col-sm-6' style={{textAlign:'right'}}>
                    <Link to='Home' className='btn btn-info mt-3'>Home</Link>&nbsp;
                    <Link to='RgisterComp' className='btn btn-info mt-3' 
                        >Register</Link>&nbsp;
                    <Link to='Signin' className='btn btn-info mt-3' 
                        >Log in</Link>&nbsp;
                    </div>



                
                
               
                
                </div>
            </div>
        )
    }
}

export default NavComp
