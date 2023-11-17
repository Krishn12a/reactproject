import React from 'react'
import { Link,Routes,Route, Outlet, useNavigate} from 'react-router-dom'
import Home from '../Crud/Laptops/Home'
import Create from '../Crud/Laptops/Create'
import Read from '../Crud/Laptops/Read'
import Date from '../Crud/Laptops/Date'


const AdminComp = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-2 border '>
                    <Link to='home1'>Laptop</Link>
                </div>
            
                <div className='col-sm-10'>
                    <Routes>
                        <Route path='' element={<Home></Home>}></Route>
                        <Route path='home1' element={<Home></Home>}></Route>
                        <Route path='create' element={<Create></Create>}></Route>
                        <Route path="read/:id" element={<Read></Read>}></Route>
                        <Route path="update/:id" element={<Date></Date>}></Route>
                    </Routes>
                        <Outlet>
                            
                        </Outlet>
                </div>
            </div>
            
           
        </div>
        
    )
}

export default AdminComp
