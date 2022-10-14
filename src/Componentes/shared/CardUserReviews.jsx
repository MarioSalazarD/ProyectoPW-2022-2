
import React from "react";

import Card from 'react-bootstrap/Card';


const CardUserReviews = (props) => {
  const { id, title, description } = props;
  return(
<div class="card" style = {{backgroundColor : '#5a6978', 'margin-bottom': '2rem'}}>
  <div class="card-body">
    <b><h5 class="card-title" style = {{color: 'white'}}>{title}</h5></b>
    <b><p class="card-text">{description}</p></b>
  </div>
</div>
  );

}

export default CardUserReviews
