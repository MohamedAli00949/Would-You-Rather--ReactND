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
            hasLoged: true,
        }))

    }

    handleClick = (e) => {
        e.preventDefault()

        const { userLogedIn } = this.state;
        const { dispatch } = this.props;

        dispatch(setAuthedUser(userLogedIn))

        console.log('the authed user', userLogedIn)
    }


    render () {
        const { myUsers } = this.props; 
        const hasLoged = this.state.hasLoged

        return (
            <div className='login'>
                <h3>Welcome to the Would You Rather App!</h3>
                <p>Please sign in to continue</p>
                <h2>Sign in</h2>
                <form className='login-form' onSubmit={this.handleClick}>
                    <select onChange={this.handleChange}>
                        <option value='' >Select User</option>
                        {myUsers.map((user) => (
                        <option  key={user.id} value={user.id} >
                            {user.name}
                        </option>
                    ))}</select>
                    <button id='login-button' type='submit'  disabled={hasLoged === false}>
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
            avetar: users[id].avetar,
        }))
    }
}



export default connect(mapStateToProps)(SigninPage)


