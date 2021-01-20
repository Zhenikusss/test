import React from 'react';
import Table from '../table'
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import './account.scss';

function Account (props) {
  console.log(props);

  return (
    <Router>
      <div className="account">
        <div className="account__block">

          <Link to="/table">
            <div className="account__item">
              <div className="account__today">Матч на сегодня</div>
              <div className="account__name">Гомель – Кронон</div>
            </div>
          </Link>

          <Link to="/table">
            <div className="account__item">
              <div className="account__today">Матч на сегодня</div>
              <div className="account__name">БГК им. Мешкова – СКА Минск</div>
            </div>
          </Link>

          <Link to="/table">
            <div className="account__item">
              <div className="account__today">Матч на сегодня</div>
              <div className="account__name">Машека – Витязь</div>
            </div>
          </Link>

        </div>

        <div className="account__func">
          <button>Написать в техподдержку</button>
          <button onClick={() => {props.onClick(false)}}>Выйти</button>
        </div>
      </div>



    </Router>
  )
}
  
export default Account;