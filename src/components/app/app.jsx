import React, { useState, useEffect } from 'react';
import Account from '../account';
import Login from '../login';
import Table from '../table';
import $ from 'jquery-ajax';

import './app.scss';

import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

const App = () => {
  const [valueLogin, setLogin] = useState(false);
  const onSubmit = data => {
    let getLogin = data.login;
    let getPassword = data.password;

    // console.log(data);
  
    $.ajax ({
              
      type:'POST',
      url:'http://localhost:3001/auth',
      dataType:'json',
      data: {
        'admin': getLogin,
        'password': getPassword
      },
      success: function(inLogin) {
        setLogin(inLogin);
        if (!inLogin) {
          alert('Неверное имя пользователя или пароль')
        }
      }
    });
  }

  const onClick = (inLogin) => {
    setLogin(inLogin);
    console.log(inLogin);
  }

  // return (
  //   <Router>
  //     <Table />
  //   </Router>
    
  // )

  if (!valueLogin) {
    return (
        <Router>
          <Switch>
            <Route path="/auth">
              <Login onSubmit={onSubmit} />
            </Route>
            <Redirect to="/auth"></Redirect>
          </Switch>
        </Router>
    )
  } else {
    return (
        <Router>
          <Switch>
            <Route path="/account">
              <Account onClick={onClick} />
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            <Redirect from="/auth" to="/account"></Redirect>
          </Switch>
      </Router>
    )
  }
}

export default App;