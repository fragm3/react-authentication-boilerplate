import React, {Component} from 'react';
import './login.css';

const Button =  (props) => {
    if(props.disabled == false){
        return <a class="btn btn-primary btn-md">Login <i class="fa fa-sign-in"></i></a>
    }
    return <a >Login <i class="fa fa-sign-in"></i></a>
}

export default Button;