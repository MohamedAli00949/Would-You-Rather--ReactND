import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import SigninPage from './SigninPage'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  // render() {
  //   const authedUser = this.props.authedUser
  //   if (authedUser !== '') {
  //     return (
  //       <div className="App">
  //         <Dashboard />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div className="App">
  //         <SigninPage />
  //       </div>
  //     )
  //   }
    
  // }

  render() {
		const { authedUser } = this.props;

		// if (loadingBar === undefined /* || loadingBar === 1 */) {
		// 	//loading
		// 	return (
		// 		<div className="d-flex justify-content-center">
		// 			<div >Loading...</div>
		// 		</div>
		// 	);
		// } else {
    return (
    <div>
      {!authedUser ? <SigninPage /> : <Dashboard />}
    </div>
    )		
	}
}

function mapStateToProps({ authedUser, loadingBar }) {
	return {
		authedUser,
	};
}

export default connect(mapStateToProps)(App);


// const mapStateToProps = ({ authedUser }) => {
//   return {
//     authedUser,
//   }
// }

// export default connect()(App)
