import React, { Component } from 'react'
import HomeComp from './HomeComp'

export class MenuComp extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>

                    <div className='row'>
                    <div className='col-sm-2 border border-primary'>
                            Menu
                    </div>
                    <div className='col-sm-10'>
                        <HomeComp></HomeComp>
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MenuComp
