import React from 'react';
import AuthButton from '../auth-button';
import '../../../stylesheets/admin.css';
import { AuthContext } from '../../App';

const Login = () => {
  const { dispatch } = React.useContext(AuthContext);
  
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
      console.log(resJson)
      dispatch({
        type: 'LOGIN',
        payload: resJson
      })
    }).catch(err => {
      console.log(err)
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: err.message || err.statusText
      });
    });
  };

  return(
    <div>
      <form onSubmit={handleFormSubmit} className="column">
        <label htmlFor="username">
          Username
          <input 
            type="text"
            name="username"
            id="username"
            placeholder="USERNAME"
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
            placeholder="PASSWORD"
            value={data.password}
            onChange={handleInputChange}
          />
        </label>

        {data.errorMessage && (
          <span className="form-error">{data.errorMessage}</span>
        )}

        <AuthButton title={"LOGIN"} />
      </form>
    </div>
  )
}

export default Login;