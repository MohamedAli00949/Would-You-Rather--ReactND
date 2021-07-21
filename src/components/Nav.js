import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { resetAuthedUser } from '../actions/authedUser'

class Nav extends Component {
    
    handleLogout = () => {
        const { dispatch } = this.props
        dispatch(resetAuthedUser())
    }
    render () {
        const { me, authedUser } = this.props;
        return (
            <nav>
                <ul style={{display: 'flex'}}>
                    <li>
                        <NavLink to='/' exact activeClassName='active-link'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active-link'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active-link'>
                            Leader Board
                        </NavLink>
                    </li>
                    <li>{authedUser !== null && (
                        <div className='user'>
                            <p>Hello, {me.name}</p>
                            <img className='nav-aratar' src={me.avatarURL} alt= {`Avatar Of ${me.name}`} />
                            <button onClick={this.handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = ({ users, authedUser }) => {
    return {
        me : users[authedUser],
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)