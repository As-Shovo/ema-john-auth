import React from 'react';
import { Link } from 'react-router-dom';

const Rigester = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your email" />
                    <br />
                    <input type="password" placeholder= "Password" />
                    <br />
                    <input type="password" placeholder= "Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>

                <div>--------- Or ------------</div>
                <button className="btn-regular">Google Signin</button>
            </div>
        </div>
    );
};

export default Rigester;