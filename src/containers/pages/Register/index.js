import React, { Component } from 'react'
import './Register.scss'
import Button from '../../../components/atoms/Button'
import { registerUserApi } from '../../../config/redux/action'
import { connect } from 'react-redux'

class Register extends Component {
    state= {
        email: '',
        password: '',     
    }

    handleChangeText = (e) => {
        // console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value,       
        })
    }

    handleRegistersubmit = () => {
        const {email, password} = this.state;
        console.log("data before send:", email, password)  
        this.props.registerAPI({email, password}) 
      
    }
    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" type="text" placeholder="email" onChange={this.handleChangeText}/>
                    <input className="input" type="password" name="" id="password" placeholder="password" onChange={this.handleChangeText}/>
                    <Button onClick={this.handleRegistersubmit} title="register" loading={this.props.isLoading}/>
                </div>
                {/* <button>Go to Dashboard</button> */}
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserApi(data))
})

export default connect(reduxState, reduxDispatch)(Register)