import React from 'react'

const RegisterComp = () => {
    return (
        <div className='myform'>
            <h1>Register</h1>
            <form>
                
                <input type='text' name='User_fname' placeholder='Enter your FirstName'></input>&nbsp; &nbsp;
                <input type='text' name='User_lname' placeholder='Enter your LastName'></input><br/><br/>
                <input type='email' name='User_Email' placeholder='Enter your Email'></input>&nbsp; &nbsp;
                <input type='password' name='User_Email' placeholder='Enter your Password'></input><br/><br/>
                <input type='text' name='User_Mno' placeholder='Enter your Mobile '></input>&nbsp; &nbsp;
                <input type='text' name='User_gender' placeholder='Enter your Gender '></input><br/><br/>
                <button type='submit btn btn-info'>Register</button>
                
                


            </form>
        </div>
    )
}

export default RegisterComp
