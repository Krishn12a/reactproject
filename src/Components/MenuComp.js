import React  from 'react'
import HomeComp from './HomeComp'
import LaptopComp from './Products/LaptopComp'
import { Link,Routes,Route, Outlet, useNavigate} from 'react-router-dom'
import MenuBodyComp from './MenuBodyComp'
import TvComp from "./Products/TvComp";
import MobileComp from "./Products/MobileComp";
import CameraComp from "./Products/CameraComp";
import {Login} from './Login'



const MenuComp = () => {
    const nav=useNavigate()
    
         const logout = ()=>{
            if(!name ==''){
            if(window.confirm("Are You Sure to Logout")){
                sessionStorage.clear();
                 nav("/Home");
                
            }
            
          }
    }
    
    const name=sessionStorage.getItem("user")
    return (
        <div >
                <div className='container-fluid'>

                    <div className='row'>
                    <div className='col-sm-2 border '>
                            <h3>{name}</h3>
                            
                            <Link to={"Laptop"} className='lnk'>Laptops</Link><br/>
                            <Link to={"Tv"} className='lnk'>Tv</Link><br/>
                            <Link to={"Mobile"} className='lnk'>Mobile</Link><br/>
                            <Link to={"Camera"} className='lnk'>Camera</Link>
                            <br/><br/><br/>

                            <div>
                                <button type='button' onClick={logout} className='btn btn-outline-danger' >Log out</button>
                            </div>
                

                           
                            
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

export default MenuComp


// export class MenuComp extends Component {
    
//     render() {
       
       
//         return (
            
//         )
//     }
// }

// export default MenuComp
