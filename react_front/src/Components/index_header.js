import React from 'react';
function Header() {
  return(
    <div className="header">
      <div className="header-inner">
        <div className="header-logo">
          <h2>タイトル</h2>
        </div>
        <ul className="header-list">
            <li>新規会員登録</li>
            <li>ログイン</li>
          </ul>
      </div>
    </div>
  )

}
export default Header;