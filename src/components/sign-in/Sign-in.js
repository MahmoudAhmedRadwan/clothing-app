import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handelSubmit = event => {
        event.preventDefault();
        this.setState({email : '', password: ''})
    }

    handelChange = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handelSubmit}>

                    <FormInput handelChange={this.handelChange} label="email" name="email" type="email" value={this.state.email} required />
                    <FormInput handelChange={this.handelChange} label="password" name="password" type="password" value={this.state.password} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            Sign In with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;