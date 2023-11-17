import React, { Component } from 'react'
import {Routes,Route } from 'react-router-dom'
import Create from '../Crud/Laptops/Create'

export class CrudComp extends Component {
    render() {
        return (
            <div>
                
                    <Routes>
                        <Route path='create' element={<Create></Create>}></Route>
                    </Routes>
                
                
            </div>
        )
    }
}

export default CrudComp
