import React from 'react';
import { Link, useLocation, useHistory  } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signIUsInGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirectUrl = location.state?.from || '/'
    const handleGoogleLogin = ()=>{
            signIUsInGoogle()
            .then(result =>{
                history.push(redirectUrl)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input type="email" placeholder="your email" />
                    <br />
                    <input type="password" placeholder= "SecRet" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <p>New to ema-john <Link to="/register">Create an Account</Link></p>
                <div>---------- or ----------------</div>

                <button onClick={handleGoogleLogin} className="btn-regular">Google Signin</button>
            </div>
        </div>
    );
};

export default Login;