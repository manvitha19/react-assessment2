import React, { useState } from "react";
export const Register = (props) => { 
        const [email, setEmail] =useState('');
        const [pass, setPass] = useState('');
        const [name, setName] =useState('');
        
        const handleSubmit = (e) => { 
            e.preventDefault();
            console.log(email); 
        }
        
        
        return(
            <>
            <div className="auth-form-container">
                    <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name"> Full Name</label>
                    <input value={name} name="name" id="name" placeholder="Enter your full name"/>
                    <label htmlfor="email">EMAIL</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                    <label htmlFor="passworddd">PASSWORD</label>
                    < input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>       
                    <button>REGISTER</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>already have an account? login</button>
        </div>
        </>
    )
}