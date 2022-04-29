import React from 'react'
import "./newUser.css"
export default function NewUser() {
  return (
    <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="userUserForm">
                <div className="newUserItem">
                     <label htmlFor="">Username</label>
                     <input type="text" name="" id="" placeholder='john smith'/>   
                </div>

                <div className="newUserItem">
                     <label htmlFor="">Full Name</label>
                     <input type="text" name="" id="" placeholder='john smith'/>   
                </div>

                <div className="newUserItem">
                     <label htmlFor="">Email</label>
                     <input type="email" name="" id="" placeholder='jon@gmail.com'/>   
                </div>

                <div className="newUserItem">
                     <label htmlFor="">Password</label>
                     <input type="password" name="" id="" placeholder='password'/>   
                </div>

                <div className="newUserItem">
                     <label htmlFor="">Phone</label>
                     <input type="password" name="" id="" placeholder='+92 3182819293'/>   
                </div>

                <div className="newUserItem">
                     <label htmlFor="">Address</label>
                     <input type="password" name="" id="" placeholder='Pakistan | Karachi'/>   
                </div>

                <div className="newUserItem">
                     <label htmlFor="">Gender</label>
                     <div className="newUserGender">
                     <input type="radio" name="male" id="male" value="male" />
                     <label for="male">Male</label>  
                     <input type="radio" name="male" id="female" value="female" />
                     <label for="female">Female</label> 
                     <input type="radio" name="male" id="other" value="other" />
                     <label for="Other">Other</label>   
                     </div>
                </div>
                <div className="newUserItem">
                <label htmlFor="">Active</label>
                <select className='newUserSelect' name='active' id="active">
                     <option value="yes">yes</option>
                     <option value="no">No</option>
                </select>
                </div>
                <button className="newUserButton">
                    Create
                </button>
            </form>

    </div>
  )
}
