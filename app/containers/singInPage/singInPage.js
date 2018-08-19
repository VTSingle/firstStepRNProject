import React, { Component } from 'react';
import InputForm from '../../components/inputForm/inputForm';
class SingInPage extends Component {

    render() {
        return (
            <InputForm textName = {'Enter your name'} textLastName = {'Enter your last name'} textEmail = {'Enter your email'} password = {'Create your password'}/>
        );
    }
}

export default SingInPage;