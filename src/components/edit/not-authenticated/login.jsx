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

  const handleFormSubmit = event => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });
    fetch('http://localhost:3002/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res;
    }).then(resJson => {
      dispatchEvent({
        type: 'LOGIN',
        payload: resJson
      })
    }).catch(err => {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message || error.statusText
      });
    });
  };

  return(
    <div>
      <form onSubmit={handleFormSubmit}>
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