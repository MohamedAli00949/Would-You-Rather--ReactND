import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class SigninPage extends Component {
    state = {
        userLogedIn : '',
        hasLoged : false,
    };

    handleChange = (e) => {
        const userLogedIn = e.target.value

        this.setState(() => ({
            userLogedIn : userLogedIn,
        }))

        const { dispatch } = this.props;

        dispatch(setAuthedUser(userLogedIn))

        this.setState({ hasLoged: true, })
        console.log('the authed user', userLogedIn)

        const LoginButton =  document.getElementById('login-button');
        LoginButton.removeAttribute('disabled')
    }

    render () {
        const { myUsers } = this.props; 

        return (
            <div className='login'>
                <h3>Welcome to the Would You Rather App!</h3>
                <p>Please sign in to continue</p>
                <h2>Sign in</h2>
                <form className='login-form'>
                    <select onChange={this.handleChange}>
                        <option value='' >Select User</option>
                        {myUsers.map((user) => (
                        <option  key={user.id} value={user.id} >
                            <p>{user.name}</p><img src={user.avetar} alt={`Avatar of ${user.name}`} />
                        </option>
                    ))}</select>
                    <button id='login-button' onClick={(e) => e.preventDefault()} disabled>
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        myUsers: Object.keys(users).map((id) => ({
            id: id,
            name: users[id].name,
            avetar: users[id].avetar
        }))
    }
}



export default connect(mapStateToProps)(SigninPage)


