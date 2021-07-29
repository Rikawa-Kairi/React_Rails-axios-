import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return(
    <div className="header">
      <div className="header-inner">
        <div className="header-logo">
          <h2>タイトル</h2>
        </div>
        <ul className="header-list">
            <li>新規会員登録</li>
            <Link to="new_post"><li>新規投稿</li></Link>
          </ul>
      </div>
    </div>
  )

}
export default Header;