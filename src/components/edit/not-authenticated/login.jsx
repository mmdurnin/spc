import React from 'react';
import AuthButton from '../auth-button';

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <form>
          <label htmlFor="username">
            Username
            <input 
              type="text"
              name="username"
              id="username"
            />
          </label>

          <label htmlFor="password">
            Password
            <input 
              type="password"
              name="password"
              id="password"
            />
          </label>

          <AuthButton title={"Admin Login"} />
        </form>
      </div>
    )
  }
}

export default Login;