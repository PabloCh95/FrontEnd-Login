import React from 'react';
import './login.scss'

const Login = () => {
    return ( 
    <div className="background-main">
        <div className="background-secondary">
        <h1 className="first-title-login">Iniciar sesión</h1>
            <form className="formulary-primary">
                <input type="text" className="first-text-login input-login login "/>
                <label className="label-login">USUARIO</label>
                <input type="password" className="first-password-login input-login login"/>
                <label className="label-login">CONTRASEÑA</label>
                {/*Aca iría un pulsador si me acordara como hacerlo... */}
            </form>
            <input type="submit" className="btn btn-primary btn-submit"/>
        </div>
    </div> 
    );
}
 
export default Login;