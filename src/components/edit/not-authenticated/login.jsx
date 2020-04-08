import React from 'react';
import AuthButton from '../auth-button';

const Login = () => {

  const initialState = {
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };
  const [data, setData] = React.useState(initialState);
  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  return(
    <div>
      <form>
        <label htmlFor="username">
          Username
          <input 
            type="text"
            name="username"
            id="username"
            value={data.username}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input 
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleInputChange}
          />
        </label>

        {data.errorMessage && (
          <span className="form-error">{data.errorMessage}</span>
        )}
        
        <AuthButton title={"Admin Login"} />
      </form>
    </div>
  )
}

export default Login;