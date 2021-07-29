import React from 'react';
import {Link} from 'react-router-dom';

function Post() {

return(
  <div>
    <Link to="/">
      <button>
        戻る
      </button>
    </Link>
  </div>
);
}

export default Post;