import React from 'react'

function Register() {
  return (
    <>
    <div className="wrapper">
        <div className="register">
            <form action="">
                <label htmlFor="name">First Name</label>
                <input type="text" placeholder='Enter your First Name'/>
                <label htmlFor="name">Last Name</label>
                <input type="text" placeholder='Enter your Last Name'/>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Enter your Email'/>
                <label htmlFor="password">Password</label>
                <input type="text" placeholder='Enter your Password'/>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register