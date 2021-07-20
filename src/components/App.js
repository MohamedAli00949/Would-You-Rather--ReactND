import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import AddNewQuestion from './AddNewQuestion'
import PageNotFound from './PageNotFound'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import SigninPage from './SigninPage'
import Dashboard from './Dashboard'
import Nav from './Nav'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
		const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
              <div>
                {!authedUser ? <SigninPage /> : (
                  <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/add'  component={AddNewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='/questions/:id' component={QuestionPage} />
                    <Route component={PageNotFound} />
                  </Switch>
                )}
              </div>
          </div>
          <div>
            
          </div>
        </Fragment>
    </Router>
    )		
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser,
	};
}

export default connect(mapStateToProps)(App);
